import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react";

import Header from "./components/header";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Header></Header>
  </ChakraProvider>
)
