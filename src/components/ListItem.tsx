import { ItemWithPrices } from "@/types/Item";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

type Props = {
  item: ItemWithPrices;
};

function ListItem() {
  return (
    <Card>
      <CardContent>
        <Image
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          height={160}
          width={160}
          alt="Norway"
        />
      </CardContent>
    </Card>
  );
}

export default ListItem;
