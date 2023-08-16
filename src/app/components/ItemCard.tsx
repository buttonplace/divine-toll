import { ItemWithPrices } from "../types/Item";
import Image from "next/image";

export default function ItemCard({
  item,
}: // onHover,
{
  item: ItemWithPrices;
  // onHover: (name: string | undefined) => void;
}) {
  return (
    <>
      <div
        // onClick={() => onHover(item?.name)}
        className="col-span-2 m-1 h-[150px] cursor-pointer flex-col items-center justify-around overflow-auto rounded border-2 border-stone-900 bg-stone-600 selection:bg-none hover:bg-stone-500 hover:outline hover:outline-stone-900"
      >
        <div className="flex h-1/4 justify-center">
          <div className="md:text-m m-1 text-center text-s font-semibold">
            {item?.name}
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            width={64}
            height={64}
            alt={item.name}
            src={item.icon}
            className="h-1/4 "
          />
        </div>
        <div className="h-1/4 overflow-hidden">
          <div className="flex h-1/2 items-center justify-center">
            {/* <span className="hidden whitespace-pre-wrap lg:inline">
              Chaos Rate:{" "}
            </span> */}
            <p className="h-4 leading-snug text-s">
              {item?.currentChaos?.numerator}
            </p>
            <Image
              width={16}
              height={16}
              src={"/chaos.png"}
              alt="Chaos Orb"
              className="h-4"
            />
            <p className="mr-1 ml-1">:</p>
            <p className="h-4 leading-snug text-s">
              {item?.currentChaos?.denominator}
            </p>
            <Image
              width={16}
              height={16}
              src={item?.icon}
              alt={item.name}
              className="h-4"
            />
          </div>
          <div className="flex h-1/2 items-center justify-center ">
            {/* <span className="hidden whitespace-pre-wrap lg:inline">
              Divine Rate:{" "}
            </span> */}
            <span>{item?.currentDivine?.numerator}</span>
            <Image
              width={16}
              height={16}
              src={"/divine.png"}
              alt="Divine Orb"
              className="h-full w-auto"
            />{" "}
            :<span>{item?.currentDivine?.denominator}</span>
            <Image
              width={16}
              height={16}
              src={item?.icon}
              alt={item.name}
              className="h-full w-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
}
