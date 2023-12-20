import { getDivine } from "@/lib/serverutils";
import { TableItem } from "@/components/data-table/columns";
import { Item } from "@/types";
import { prisma } from "@/lib/db";
import { relativeDifference } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { getSession } from "next-auth/react";
import { getServerSession } from "next-auth";
export async function GET(
  request: Request,
  { params }: { params: { type: string } },
) {
  //   const type = params.type; // 'a', 'b', or 'c'
  const type = decodeURIComponent(`${params.type}`);
  console.log(type);

  const items: Item[] = await prisma.item.findMany({
    where: {
      type: type,
      ignored: false,
    },
    orderBy: {
      stashIndex: "asc",
    },
  });

  if (!items || items.length === 0) {
    return new NextResponse();
  } else {
    const data: any[] = items.map((item, index) => {
      const chaosRate: number =
        item.divineTollChaosNumerator / item.divineTollChaosDenominator;
      const divineRate: number =
        item.divineTollDivineNumerator / item.divineTollDivineDenominator;

      return {
        id: index,
        name: item.name,
        icon: item.icon,
        divineRateString: `${item.divineTollDivineNumerator} / ${item.divineTollDivineDenominator}`,
        divineRateValue: divineRate,
        divineNumerator: item.divineTollDivineNumerator,
        divineDenominator: item.divineTollDivineDenominator,
      };
    });
    return NextResponse.json({ data });
  }
}

export async function POST(request: NextRequest) {
  console.log(`POST /api/scanner/${request}}`);

  const session = await getServerSession();
  if (!session && false) {
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

    // console.log("token from try route:");
    const access = t.accessToken;
    // console.log(access);
    const data = await fetch(
      "https://api.pathofexile.com/stash/Affliction",
      // "https://65f636b0-d71c-4d7d-b074-22f0e034f871.mock.pstmn.io/stash/Affliction",
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
    // https: const data = await fetch(
    //   "https://api.pathofexile.com/stash/Standard",
    //   {
    //     method: "GET",
    //     headers: {
    //       Authorization: `Bearer ${access}`,
    //       "User-Agent": "OAuth divinetoll/1.2 (contact:teatreydev@gmail.com)",
    //     },
    //   },
    // ).catch((e) => {
    //   console.log(e);
    //   return NextResponse.json({ status: 500 });
    // });
    const json = await data.json();
    // console.log(json);
    return NextResponse.json({
      status: 200,
      json,
    });
  }

  //   console.log(json);
  //   return new Response(JSON.stringify(json));
}
