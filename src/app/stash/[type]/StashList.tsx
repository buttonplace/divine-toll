import { ItemWithPrices } from "@/types/Item";
import ListItem from "@/components/ListItem";
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";

type Props = {
  items: ItemWithPrices[];
  query: string;
};

const columns = [
  {
    key: "name",
    label: "Item",
  },
  {
    key: "divine",
    label: "Divine Rate",
  },
  {
    key: "chaos",
    label: "Chaos Rate",
  },
];

const StashList = ({ items, query }: Props) => {
  return (
    <Table aria-label="Example table with dynamic content">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody
        items={items.filter((item) => {
          if (!item) return false;
          return item.name.toLowerCase().includes(query.toLowerCase());
        })}
      >
        {(item) => (
          <TableRow key={item.name}>
            <TableCell>{item.name}</TableCell>
            <TableCell>
              {item.currentDivine?.numerator}/{item.currentDivine?.denominator}
            </TableCell>
            <TableCell>
              {item.currentChaos?.numerator}/{item.currentChaos?.denominator}
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
    // <div>
    //   {items
    //     .filter((item) => {
    //       if (!item) {
    //         return false;
    //       }
    //       return item.name.toLowerCase().includes(query.toLowerCase());
    //     })
    //     .map((item, index, array) => {
    //       return <ListItem key={item?.name} item={item} />;
    //     })}
    // </div>
  );
};

export default StashList;
