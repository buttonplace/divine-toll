import { ItemWithPrices } from "@/types/Item";
import React, { Suspense } from "react";
import { prisma } from "../api/db";
import { Item } from "@prisma/client";
import DataTable from "./DataTable";
import { getData } from "@/lib/serverutils";

const TestPage = async () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DataTable items={await getData()} />{" "}
    </Suspense>
  );
};

export default TestPage;
