import { NextResponse } from "next/server";
import { getDivine } from "@/lib/serverutils";

export async function GET() {
  const divine = await getDivine();
  return NextResponse.json({ divine });
}

/*
const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL! + "/api/divine/",
    { method: "GET", next: { revalidate: 120 } },
    */
