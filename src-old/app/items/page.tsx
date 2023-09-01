import { ItemWithPrices } from "@/types/Item";
import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";
import { TableItem } from "./columns";
import TableView from "./TableView";
import { Suspense } from "react";

export default async function TablePage() {
  return (
    <div>
      <div>hello</div>
      <Suspense fallback={<div>Loading...</div>}>
        <TableView type={"scarab"} />
      </Suspense>
    </div>
  );
}
