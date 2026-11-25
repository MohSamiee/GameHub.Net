import { Button, Menu, MenuTrigger } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <Menu.Root>
      <MenuTrigger asChild>
        <Button>
          Platforms
          <BsChevronBarDown />
        </Button>
      </MenuTrigger>
      <Menu.Positioner>
        <Menu.Content>
          {data.map((p) => (
            <Menu.Item value={p.slug}>{p.name}</Menu.Item>
          ))}
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};

export default PlatformSelector;
