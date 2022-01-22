// eslint-disable-next-line no-unused-vars
import Head from "next/head";
import { Box, Container, Flex, VStack } from "@chakra-ui/react";
// import Container from './Container'

import Navbar from "../components/Navbar";
import Footer from "../components/footer";

const Layout = ({ children, router }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Natapatchara Anuroje</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container
        display="flex"
        maxW="container.md"
        minH={{ base: "auto", md: "100vh" }}
        px={{ base: 4, lg: 0 }}
        centerContent
      >
          <VStack flex={1} spacing={16} alignItems='stretch' w='full'>
              <VStack spacing={16} flex={1} w='full' as='main'>
              {children}
              </VStack>
              <Footer />
          </VStack>
      </Container>
    </>
  );
};

export default Layout;
