import Stash from "./Stash";

type Props = {
  params: { type: string };
};

export default function StashPage({ params }: Props) {
  //const items: FactionWithOwner[] = await GET();

  return (
    // const = [items, setItems]
    <div>
        <Stash type={params.type}/>
    </div>
  );
}
