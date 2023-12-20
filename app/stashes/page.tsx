import { getServerSession } from "next-auth";
import { NextRequest } from "next/server";
import { use, useEffect, useState } from "react";
import { CheckboxGroup, Checkbox } from "@nextui-org/react";
import StashSelect from "@/components/stash-scanner/stash-select/stash-select";
import { StashItem } from "@/types";
import { ScrollShadow } from "@nextui-org/react";
import { Stash } from "@/types";
import { Button } from "@/components/ui/button";
import StashTable from "@/components/stash-scanner/stash-table/stash-table";
import { count } from "console";
import StashScanner from "@/components/stash-scanner/stash-scanner";

export default function StashScannerPage() {
  return <StashScanner />;
}
