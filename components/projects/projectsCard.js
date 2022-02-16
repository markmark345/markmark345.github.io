import {
  VStack,
  Box,
  Button,
  HStack,
  Stack,
  AspectRatio,
  Heading,
  Tag,
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
import LinkCard from "../LinkExternal";
import { jsproject } from "../../data/jsprojects";

const ProjectCard = ({ title, description, github, tag }) => {
  const getTypeColor = (type) => {
    if (type === "Web App") {
      return "teal";
    } else if (type === "Mobile(Android)") {
      return "blue";
    } else if (type === "Collect Information") {
      return "orange";
    } else if (type === "CI/CD") {
      return "red";
    }
  };

  return (
    <LinkBox href={github}>
      <HStack
        p={4}
        bg={mode("gray.100", "gray.700")}
        rounded="lg"
        borderWidth="1px"
        borderColor={mode("neutral.400", "neutralD.400")}
        w="100%"
        textAlign="left"
        align="start"
        spacing={4}
        transitionProperty="transform"
        transitionDuration="slow"
        transition-timing-function="ease-out"
        _hover={{ transform: "translateY(-4px)", shadow: "lg" }}
      >
        <Box
          rounded="lg"
          p={2}
          position="relative"
          overflow="hidden"
          lineHeight={0}
          boxShadow="inset 0 0 1px 1px rgba(0, 0, 0, 0.04)"
        >
          <Box
            bg="gray.100"
            position="absolute"
            top={0}
            bottom={0}
            left={0}
            right={0}
            opacity={0.25}
          ></Box>
          {/* <Image
            src={logo ? logo[0].thumbnails.large.url : "/"}
            height={36}
            width={36}
            layout="fixed"
            rounded="md"
          ></Image> */}
        </Box>

        <VStack align="start" justify="flex-start" spacing={1}>
          <VStack spacing={0} align="start">
            <HStack>
              <Text fontWeight="bold" fontSize="md" noOfLines={2}>
                {title}
              </Text>
              <LinkOverlay as={LinkCard} href={github} >
                <Text color="inherit" fontSize="sm">
                  Source
                </Text>
              </LinkOverlay>
            </HStack>

            <Text fontSize="sm" color={mode("neutral.1000", "neutralD.1000")}>
              {description}
            </Text>
          </VStack>
          <Tag size="sm" colorScheme={getTypeColor(tag)}>
            {tag}
          </Tag>
        </VStack>
      </HStack>
    </LinkBox>
  );
};

export default ProjectCard;
