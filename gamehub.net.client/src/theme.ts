import { createSystem, defaultConfig } from "@chakra-ui/react";

export const config = {
  initialColorMode: "dark",
};

const theme = createSystem(defaultConfig);

export default theme;