import { getDivine } from "@/lib/serverutils";
import { TableItem } from "@/components/data-table/columns";
// import { Item } from "@/s";
import { prisma } from "@/lib/db";
import { relativeDifference } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { getSession } from "next-auth/react";
import { getServerSession } from "next-auth";

export async function POST(request: NextRequest) {
  const session = await getServerSession();
  if (!session && false) {
    //TODO remove false to re-enable auth
    console.log("no session");
    //return NextResponse.json({ status: 403 });
  } else {
    let t = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
    });
    if (!t) {
      console.log("no token from try route!");

      //return NextResponse.json({ status: 401 });
      t = {
        accessToken: "access",
      };
    }
    const access = t.accessToken;
    const req = await request.json();

    if (req.jStash) {
      console.log(req.jStash);
    }

    const data = await fetch(
      "https://api.pathofexile.com/stash/Affliction/" +
        //   "https://65f636b0-d71c-4d7d-b074-22f0e034f871.mock.pstmn.io/stash/Affliction/" +
        req.jStash.id,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${access}`,
          "User-Agent": "OAuth divinetoll/1.2 (contact:teatreydev@gmail.com)",
        },
      },
    ).catch((e) => {
      console.log(e);
      return NextResponse.json({ status: 500 });
    });

    const json = await data.json();
    console.log(json);
    if (!json.stash) {
      return NextResponse.json({
        status: 404,
        items: [],
      });
    }

    return NextResponse.json({
      status: 200,
      items: json.stash.items,
    });
  }
}
