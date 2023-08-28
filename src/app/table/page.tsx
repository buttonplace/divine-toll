import { ItemWithPrices } from "@/types/Item";
import ItemTable from "./ItemTable";


export default async function TablePage() {
  //const items: FactionWithOwner[] = await GET();
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL! + "/api/items/",
    { method: "GET", next: {revalidate:60}},
  );
  if (!response) {
    console.log("no ites");
    return;
  }

  const items: ItemWithPrices[] = await response.json();


  return (
    // const = [items, setItems]
    <div>
        <ItemTable  itemsss={items} />
        {/* <ItemTable /> */}
    </div>
  );
}
