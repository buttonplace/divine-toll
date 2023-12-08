import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
export { default } from "next-auth/middleware";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log("MIDDLEWEAREEEE!");
  console.log(request);

  const token = "f05a7e8f5f0c215d1103afc734c9619239393f50";

  return NextResponse.error();
  //   return NextResponse.redirect(new URL("/home", request.url));
}

// See "Matching Paths" below to learn more
export const config = { matcher: ["/mse"] };
