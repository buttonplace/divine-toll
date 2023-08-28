import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";
import NewItemCard from "./NewItemCard";
import { ItemWithPrices } from "../types/Item";

type Props = {
  item: ItemWithPrices;
};

const AccordianItem = ({ item }: Props) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <NewItemCard item={item} />
        </AccordionTrigger>
        <AccordionContent>
          <NewItemCard item={item} />
          Yes. It adheres to the WAI-ARIA design pattern. More item Info!
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordianItem;
