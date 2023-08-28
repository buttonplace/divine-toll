import { revalidate } from "../page";
import Stash from "./Stash";
import { ItemWithPrices } from "@/types/Item";


type Props = {
  params: { type: string };
};

export default async function StashPage({ params }: Props) {
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
        <Stash type={params.type} items={items} width={width}/>
    </div>
  );
}
