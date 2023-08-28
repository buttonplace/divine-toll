import { ItemWithPrices } from "@/types/Item";
import ItemTable from "./ItemTable";


type Props = {
  params: { type: string };
};

export default async function TablePage({ params }: Props) {
  //const items: FactionWithOwner[] = await GET();
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL! + "/api/items/" + params.type,
    { method: "GET", next: {revalidate:10}},
  );
  if (!response) {
    console.log("no ites");
    return;
  }
  const {width, items}: {width: number, items: ItemWithPrices[]} = await response.json();

  return (
    // const = [items, setItems]
    <div>
        <ItemTable type={params.type} itemsss={items} />
        {/* <ItemTable /> */}
    </div>
  );
}
