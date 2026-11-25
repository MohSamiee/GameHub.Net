import { Switch, HStack } from "@chakra-ui/react";
import { useTheme } from "next-themes";

const ColorModeSwitch = () => {
  const { resolvedTheme: colorMode, setTheme } = useTheme();

  const toggleColorMode = () => {
    setTheme(colorMode === "dark" ? "light" : "dark");
  };

  return (
    <HStack>
      <Switch.Root
        checked={colorMode === "dark"}
        onCheckedChange={toggleColorMode}
        colorPalette="green"
      >
        <Switch.HiddenInput />
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
        <Switch.Label>Dark Mode</Switch.Label>
      </Switch.Root>
    </HStack>
  );
};

export default ColorModeSwitch;
