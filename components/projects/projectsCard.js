import {
  VStack,
  Button,
  HStack,
  Stack,
  AspectRatio,
  Heading,
  Text,
  LinkBox,
  Link,
  LinkOverlay,
  Icon,
  CircularProgress,
  CircularProgressLabel,
  useBreakpointValue,
  useColorModeValue as mode,
} from "@chakra-ui/react";

import LinkItem from "../LinkItem";
import LinkCard from "../LinkCard";
import { jsproject } from "../../data/jsprojects";

const ProjectCard = ({ title, description, github }) => {
  return (
    <LinkBox  as="article" >
      <Stack
        direction={{ base: "colum", md: "row" }}
        p={6}
        spacing={{ base: 8, md: 5 }}
        bg={mode("gray.100", "gray.700")}
        rounded="md"
        alignItems="center"
        transitionProperty="transform"
        transitionDuration="slow"
        transitionTimingFunction="ease-out"
        _hover={{ transform: "scale(1.025, 1.025)" }}
      >
        <VStack spacing={3}>
          <VStack w="full" spacing={1}>
            <Stack
              w="full"
              direction={{ base: "column", md: "row" }}
              justifyContent={{ base: "flex-start", md: "space-between" }}
              alignItems={{ base: "flex-start", md: "center" }}
            >
              <Heading size="md" weight="semibold">
                {title}
              </Heading>
              <LinkOverlay as={LinkCard} href={github}>
                <Text color="inherit" fontSize="sm">
                  source
                </Text>
              </LinkOverlay>
            </Stack>
          </VStack>
          <Text fontSize="sm">{description}</Text>
        </VStack>
      </Stack>
    </LinkBox>
  );
};

export default ProjectCard;
