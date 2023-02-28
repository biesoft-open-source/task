import { ChakraProvider } from "@chakra-ui/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { queryClient } from "../../config";
import { composeWrappers } from "../../utils";

export const AppProvider = composeWrappers([
  ({ children }) => <ChakraProvider>{children}</ChakraProvider>,
  ({ children }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  ),
  ({ children }) => <BrowserRouter>{children}</BrowserRouter>,
]);
