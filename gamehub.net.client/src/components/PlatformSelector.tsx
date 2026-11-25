import { Button, Menu, MenuTrigger } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";
import usePlatforms, { type Platform } from "../hooks/usePlatforms";
interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}
const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <Menu.Root>
      <MenuTrigger asChild>
        <Button variant="surface">
          {selectedPlatform?.name || "Platforms"}
          <BsChevronBarDown />
        </Button>
      </MenuTrigger>
      <Menu.Positioner>
        <Menu.Content>
          {data.map((p) => (
            <Menu.Item onClick={() => onSelectPlatform(p)} value={p.slug}>
              {p.name}
            </Menu.Item>
          ))}
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};

export default PlatformSelector;
