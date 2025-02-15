import { getServerSession } from "next-auth";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

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
    const data = await fetch("https://api.pathofexile.com/stash/Standard", {
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
    json["bearer"] = access;
    console.log(json);
    return NextResponse.json({
      status: 200,
      json,
    });
  }

  //   console.log(json);
  //   return new Response(JSON.stringify(json));
}
