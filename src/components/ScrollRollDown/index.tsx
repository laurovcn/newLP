import { Box } from "@chakra-ui/react";
import { motion, useViewportScroll } from "framer-motion";

export function ScrollRollDown() {
  const { scrollYProgress } = useViewportScroll();
  scrollYProgress.onChange(console.trace);
  return (
    <motion.div
      style={{
        originY: 0,
        position: "fixed",
        top: "25%",
        right: 12,
      }}
    >
      <Box
        as="button"
        borderRadius="md"
        bg="blackAlpha.900"
        shadow={"lg"}
        px={1}
        h={200}
      />
    </motion.div>
  );
}
