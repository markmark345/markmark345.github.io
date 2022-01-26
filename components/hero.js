import {
  Button,
  Icon,
  Box,
  Heading,
  Image,
  Text,
  AspectRatio,
  Flex,
  VStack,
  Stack,
} from "@chakra-ui/react";
import { getDayOfWeek } from "../utils/getDayOfWeek";
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import LinkItem from "../components/LinkItem";

const now = new Date();
const dayOfWeek = getDayOfWeek(
  now.getDate(),
  now.getMonth(),
  now.getFullYear()
);

const Hero = (props) => {
  const { path } = props;
  return (
    <Stack
      alignItems="center"
      spacing={12}
      w="full"
      direction={{ base: "column-reverse", md: "row" }}
      as="section"
      mt={12}
    >
      <VStack spacing={3} alignItems="flex-start" w="full">
        <Stack
          spacing={3}
          w="full"
          direction={{ base: "column", md: "row" }}
          justifyContent={{ base: "center", md: "flex-start" }}
          alignItems="center"
        >
          <Heading
            size="lg"
            as="h1"
            bgColor="purple.700"
            bgClip="text"
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            className="jumbotron-name-heading"
          >
            Hi, I’m Natapatchara Anuroje
          </Heading>
        </Stack>
        <Text>
          I'm studying computer science who interested in everything in a
          computer especially Web & Application development, machine learning,
          and IT Security. I want to learn things to develop further
        </Text>
        <Stack spacing={3} direction={{ base: "column", md: "row" }}>
          <LinkItem
            _target="_blank"
            href="https://github.com/markmark345"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            sx={{ p: 0 }}
          >
            <Button
              variant="ghost"
              target="_blank"
              px={4}
              justifyContent={{ base: "flex-start", md: "center" }}
              rightIcon={<Icon as={IoLogoGithub} />}
            >
              Github
            </Button>
          </LinkItem>
          <LinkItem
            _target="_blank"
            href="https://www.linkedin.com/in/natapatchara-anuroje-6956b7223/"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            sx={{ p: 0 }}
          >
            <Button
              variant="ghost"
              target="_blank"
              px={4}
              justifyContent={{ base: "flex-start", md: "center" }}
              rightIcon={<Icon as={IoLogoLinkedin} />}
            >
              linkedin
            </Button>
          </LinkItem>
        </Stack>
      </VStack>
      <Flex position="relative" pb={4} justifyContent="center">
        <AspectRatio flexShrink={0} ratio={1} w={56} h={56} as="figure">
          <Box
            rounded="full"
            overflow="hidden"
            bgGradient="linear(to-l, #7928CA, #FF0080)"
          >
            <Image
              maxWidth="95%"
              src="/profile/—Pngtree—little tiger yellow cartoon avatar_6991473.png"
              borderRadius="full"
              alt="PoorinIMG"
            />
          </Box>
        </AspectRatio>
      </Flex>
    </Stack>
  );
};

export default Hero;
