import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { getSession } from "next-auth/react";

export async function GET(request: NextRequest) {
  console.log("TRYING!");
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const json = await data.json();
  const session = await getSession();
  if (!session) {
    console.log("no session");
    return NextResponse.json({ json });
  } else {
    const t = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
    });
    if (!t) {
      console.log("no token from try route!");
      return NextResponse.json({ json });
    }
    console.log("token from try route:");
    const access = t.accessToken;
    console.log(access);
    return NextResponse.json({ token: t, session: session, json: json });
  }

  console.log(json);
  return new Response(JSON.stringify(json));
}
