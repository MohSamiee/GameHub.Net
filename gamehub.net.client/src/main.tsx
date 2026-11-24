import react from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";
import App from "./App";
import theme, { config } from "./theme";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <react.StrictMode>
    <ChakraProvider value={theme}>
      <ThemeProvider
        attribute="class"
        defaultTheme={config.initialColorMode}
      >
        <App />
      </ThemeProvider>
    </ChakraProvider>
  </react.StrictMode>
);