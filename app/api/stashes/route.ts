import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { getSession } from "next-auth/react";
import { getServerSession } from "next-auth";

export async function POST(request: NextRequest) {
  console.log(request.body);
  console.log("TRYING!");

  const session = await getServerSession();
  if (!session) {
    console.log("no session");
    return NextResponse.json({ status: 403 });
  } else {
    const t = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
    });
    if (!t) {
      console.log("no token from try route!");

      return NextResponse.json({ status: 401 });
    }
    console.log("token from try route:");
    const access = t.accessToken;
    console.log(access);
    const data = await fetch("https://api.pathofexile.com/stash/Affliction", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${access}`,
        "User-Agent": "OAuth divinetoll/1.2 (contact:teatreydev@gmail.com)",
      },
    }).catch((e) => {
      console.log(e);
      return NextResponse.json({ status: 500 });
    });

    const json = await data.json();

    console.log(json.stashes);

    // json.stashes.forEach(async (stash: any) => {
    const stash = json.stashes[0];
    console.log(`trying ${stash.id}`);
    const stashData = await fetch(
      "https://api.pathofexile.com/stash/Affliction/" + stash.id,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${access}`,
          "User-Agent": "OAuth divinetoll/1.2 (contact:teatreydev@gmail.com)",
        },
      },
    );
    const stashJson = await stashData.json();
    console.log(stash.id + ":");
    console.log(stashJson);
    // });

    console.log(json);
    return NextResponse.json({
      status: 200,
      json,
    });
  }

  //   console.log(json);
  //   return new Response(JSON.stringify(json));
}
