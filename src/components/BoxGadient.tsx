import { Box, BoxProps } from "@chakra-ui/react";

export function BoxGadient(props: BoxProps) {
  return (
    <Box
      minH="100vh"
      color="beige"
      bgGradient="linear(to-l, orange.700, purple.800)"
      {...props}
    />
  );
}
