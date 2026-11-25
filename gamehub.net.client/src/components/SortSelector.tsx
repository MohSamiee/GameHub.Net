import { Button, Menu, MenuTrigger } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (sort: string) => void;
  selectedSortOrder: string;
}
const SortSelector = ({ onSelectSortOrder, selectedSortOrder }: Props) => {
  const sorts = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];
  const currentSortOrder = sorts.find(
    (order) => order.value == selectedSortOrder,
  );
  return (
    <Menu.Root>
      <MenuTrigger asChild>
        <Button variant="surface">
          Order By: {currentSortOrder?.label || "Relevance"}
          <BsChevronBarDown />
        </Button>
      </MenuTrigger>
      <Menu.Positioner>
        <Menu.Content>
          {sorts.map((s) => (
            <Menu.Item
              onClick={() => onSelectSortOrder(s.value)}
              key={s.value}
              value={s.value}
            >
              {s.label}
            </Menu.Item>
          ))}
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};

export default SortSelector;
