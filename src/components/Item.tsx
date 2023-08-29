import { ItemWithPrices } from "@/types/Item";
import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  CardSection,
  Title,
  Modal,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

type Props = {
  item: ItemWithPrices;
};

function Item({ item }: Props) {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Modal opened={opened} onClose={close} title={item.name} />
      <Card
        component="button"
        onClick={open}
        shadow="sm"
        padding="lg"
        radius="md"
        withBorder
      >
        <Card.Section>
          <Image src={item.icon} alt={item.name} />
          <Title order={3}>{item.name}</Title>
        </Card.Section>

        <CardSection>Hello</CardSection>
      </Card>
    </>
  );
}

export default Item;
