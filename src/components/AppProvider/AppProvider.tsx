import { ChakraProvider } from "@chakra-ui/react";
import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { queryClient } from "../../config";
import { composeWrappers } from "../../utils";
import { Page } from "../Page";

export const AppProvider = composeWrappers([
  ({ children }) => <React.StrictMode>{children}</React.StrictMode>,
  ({ children }) => <ChakraProvider>{children}</ChakraProvider>,
  ({ children }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  ),
  ({ children }) => <Page>{children}</Page>,
]);
