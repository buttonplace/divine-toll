import dynamic from "next/dynamic";
const Help = dynamic(() => import("@/components/help"), { ssr: false });
import { TableCell, TableRow } from "@/components/ui/table";
import React from "react";

type Props = {
  title: string;
  value: string;
  help: string;
};

const InfoRow = ({ title, value, help }: Props) => {
  return (
    <TableRow className="text-start">
      <TableCell>{title}</TableCell>
      <TableCell className="flex items-center ">
        <div className="">{value}</div>
        <Help content={help} />
      </TableCell>
    </TableRow>
  );
};

export default InfoRow;
