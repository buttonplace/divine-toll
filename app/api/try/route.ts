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
    const data = await fetch("api.pathofexile.com/stash/Standard", {
      headers: {
        Authorization: `Bearer ${access}`,
        "User-Agent": "OAuth divinetoll/1.2 (contact:teatreydev@gmail.com)",
      },
    });
    return NextResponse.json({
      status: 200,
      data,
    });
  }

  //   console.log(json);
  //   return new Response(JSON.stringify(json));
}
