import NextLink from "next/link";
import {
  Container,
  Heading,
  VStack,
  Text,
  Center,
  Button,
} from "@chakra-ui/react";

const NotFound = () => {
  return (
    <Container>
      <Center>
        <VStack>
          <Heading size="3xl">404 !!</Heading>
          <Text mb={8}>Page not found</Text>
          <NextLink href="/">
            <Button bg="green.300">Return to home</Button>
          </NextLink>
        </VStack>
      </Center>
    </Container>
  );
};

export default NotFound;
