import NextLink from "next/link";
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import LinkItem from "./LinkItem";
import ThemeToggleButton from "./theme-toogle";

const Navbar = props => {
  const { path } = props;

  return (
    <Box
      position="sticky"
      p={2}
      top={0}
      mb={16}
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#20202380")}
      style={{ backdropFilter: "blur(10px" }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        maxW="container.md"
        warp="warp"
        alignContent="end"
        justify="space-between"
      >
        <Flex align="center" mr={6}>
          <Heading
            as="h1" 
            align-items= 'start'
            size="md"
            color={useColorModeValue("gray.800", "whiteAlpha.900")}
          >
            Portfolio
          </Heading>
        </Flex>

        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          flexGrow={1}
          align="center"
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/" path={path}>
            About
          </LinkItem>
          <LinkItem href="/projects" path={path}>
            Projects
          </LinkItem>
          <LinkItem href="/education" path={path}>
            Education
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton/>
          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/about" passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <NextLink href="/projects" passHref>
                  <MenuItem as={Link}>Projects</MenuItem>
                </NextLink>
                <NextLink href="/education" passHref>
                  <MenuItem as={Link}>Education</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
