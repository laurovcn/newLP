import { Icon } from "@chakra-ui/icons";
import { FaArrowsAltV } from "react-icons/fa";
import React from "react";
import ScrollToTop from "react-scroll-to-top";

export function ScrollReact() {
  return (
    <ScrollToTop
      smooth
      top={20}
      style={{
        backgroundColor: "black",
        borderColor: "orange.500",
        borderRadius: "50%",
      }}
      component={<Icon as={FaArrowsAltV} color="whiteAlpha.900" />}
    />
  );
}
