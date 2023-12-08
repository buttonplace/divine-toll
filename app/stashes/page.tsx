// // import { DataTable } from "@/components/data-table/data-table";
// import { ItemWithPrices } from "@/types";
// import { prisma } from "@/lib/db";
// import React from "react";
// import { TableItem, columns } from "@/components/data-table/columns";
// import { relativeDifference } from "@/lib/utils";
// import { Icons } from "@/components/icons";
// import Image from "next/image";
// import { Item } from "types";
"use client";
import { getServerSession } from "next-auth";
import { NextRequest } from "next/server";
import { use, useEffect, useState } from "react";

// import { getToken } from "next-auth/jwt";

// import dynamic from "next/dynamic";
// import { ColumnDef, Table } from "@tanstack/react-table";
// import DataTable from "@/components/data-table/data-table";
// import DivineRate from "@/components/divine-rate";
// import { getDivine } from "@/lib/serverutils";
// import { iconRoute } from "@/config/icon-route";
// import { Card, CardContent } from "@/components/ui/card";
// import { getServerSession } from "next-auth";
// const NoSSR = dynamic(() => import("@/components/data-table/data-table"), {
//   ssr: false,
// });

// type Props = {
//   params: { typeURI: string };
// };

// const fetchStashes = async () => {
//   const session = await getServerSession();
// console.log(session)
//   try {
//     const league = "Standard";

//     // const stashes = await fetch(
//     //   `/api/stashes?league=${encodeURIComponent(league)}`,
//     // );

//     const stashes = await fetch(
//       `https://api.pathofexile.com/stash/Standard`,
//       {
//         headers: {
//           "User-Agent": "OAuth divinetoll/1.2 (contact: teatreydev@gmail.com)",
//           "Authorization": `Bearer ${getToken()}`,
//       },

//     if (stashes.ok) {
//       const data = await stashes.json();
//       console.log(data);
//     } else {
//       console.error("Failed to fetch data from stash");
//     }
//   } catch (error) {
//     console.error("Error retrieving stash data: ", error);
//   }
// };

type Stash = {
  id: string;
  name: string;
  type: string;
  index: number;
};

export default function TypePage() {
  const [stashes, setStashes] = useState<Stash[]>([]);

  useEffect(() => {
    async function getStashes() {
      console.log("Trying to fetch stashes");
      const res = await fetch("/api/try", {
        method: "POST",
        body: JSON.stringify({ name: "test" }),
      });
      const data = await res.json();
      if (data.status === 200) {
        if (!data.json.stashes) {
          console.log("No stashes found");
          return;
        }
        console.log(data.json);
        console.log("STASH SUCCESS");
        const st = data.json.stashes.map((v: any) => {
          return {
            id: v.id,
            name: v.name,
            type: v.type,
            index: v.index,
          };
        });
        setStashes(st);
      }
      //ultaimtely, lets just grab all stash tabs that are
      //of correct type, i.e. currency, div cards, etc.
      //then scan them and show a list of items that match
    }
    getStashes();
  }, []);
  return (
    <div>
      {stashes.length > 0 ? (
        <>
          <ul>
            {stashes.map((v) => {
              return <li key={v.id}>{v.name}</li>;
            })}
          </ul>
        </>
      ) : (
        <div>you are not logged in</div>
      )}
    </div>
  );

  return <div>test</div>;
}
//   // const type = decodeURIComponent(`${typeURI}`);
//   // // console.log(type);
//   // const divine = await getDivine();
//   // const items: Item[] = await prisma.item.findMany({
//   //   where: {
//   //     type: type,
//   //     ignored: false,
//   //   },
//   //   orderBy: {
//   //     stashIndex: "asc",
//   //   },
//   // });
//   const session = await getServerSession();
//   return (
//     <div>
//       getServerSession Result
//       {session?.user?.name ? (
//         <div>{session?.user?.name}</div>
//       ) : (
//         <div>Not signed in</div>
//       )}
//     </div>
//   );
// }
