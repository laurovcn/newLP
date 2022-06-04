import React from "react";
import { Box, Stack, chakra } from "@chakra-ui/react";
import "@fontsource/krona-one";
import { About } from "./About";

export function AboutMe() {
  return (
    <Stack
      textAlign={"left"}
      spacing={{ base: 8, md: 14 }}
      direction={{ base: "column", md: "row" }}
    >
      <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
        {/** H1_1 */}
        <chakra.h1
          textAlign={"center"}
          fontSize={"4xl"}
          py={16}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          fontFamily={"Krona One"}
        >
          quem sou eu
        </chakra.h1>
        <About />
      </Box>
    </Stack>
  );
}
