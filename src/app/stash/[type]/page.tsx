import Stash from "./Stash";

type Props = {
  params: { type: string };
};

export default function StashPage({ params }: Props) {
  //const items: FactionWithOwner[] = await GET();

  return (
    // const = [items, setItems]
    <div className="flex h-full w-full flex-col items-center bg-transparent">
      <div className="box-content grid h-screen w-full auto-rows-[1fr] grid-cols-4 p-3 pl-0 xl:grid-cols-10">
        <p>qqq{params.type}</p>
        <Stash />
      </div>
    </div>
  );
}
