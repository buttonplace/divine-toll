import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { getSession } from "next-auth/react";

export async function GET(request: NextRequest) {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const json = await data.json();
  const session = await getSession();
  if (!session) {
    console.log("no session");
    return NextResponse.json({ json });
  } else {
    const t = getToken({ req: request });
    console.log(t);
    return NextResponse.json({ token: t, session: session, json: json });
  }

  console.log(json);
  return new Response(JSON.stringify(json));
}
