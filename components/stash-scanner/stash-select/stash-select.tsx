import { Checkbox, CheckboxGroup } from "@nextui-org/react";
import { ScrollShadow } from "@nextui-org/react";
import { Stash } from "@/types";

type StashSelectProps = {
  stashes: Stash[];
  selectedStashes?: string[];
  setSelectedStashes?: (stashes: string[]) => void;
};

export default function StashSelect({
  stashes,
  selectedStashes,
  setSelectedStashes,
}: StashSelectProps) {
  return stashes.length > 0 ? (
    <div>
      <ScrollShadow className="h-[50vh] max-w-fit pr-5">
        <CheckboxGroup
          className=""
          label="Select Stashes"
          value={selectedStashes}
          onValueChange={setSelectedStashes}
        >
          {stashes.map((v) => {
            return (
              <Checkbox
                style={{ backgroundColor: v.color }}
                className="m-.5 border-1 rounded-md border-black px-3 py-1 font-light"
                key={v.id}
                value={JSON.stringify(v)}
              >
                {v.name}
              </Checkbox>
            );
          })}
        </CheckboxGroup>
      </ScrollShadow>
    </div>
  ) : (
    <div>No stashes loaded</div>
  );
}
