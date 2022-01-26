import { AnimatePresence, motion } from "framer-motion";
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{ display: "inline-block" }}
        key={useColorModeValue("light", "dark")}
        initial={{ x: 0, opacity: 5 }}
        animate={{
          x: 0,
          opacity: 5,
          rotate: [0, 0, 360, 0, 0],
          scale: [1, 1, 1, 1, 1],
        }}
        exit={{
          x: 20,
          opacity: 5,
          rotate: [0, 0, 0, 360, 0],
          scale: [1, 0.8, 0.6, 0.4, 0.2],
        }}
        transition={{ duration: 0.5 }}
      >
        <IconButton
          aria-label="Toggle theme"
          rounded="full"
          colorScheme={useColorModeValue("blue", "red")}
          icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
          onClick={toggleColorMode}
        ></IconButton>
      </motion.div>
    </AnimatePresence>
  );
};

export default ThemeToggleButton;
