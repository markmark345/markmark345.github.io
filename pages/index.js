import { Container, Box, Heading, Image } from "@chakra-ui/react";
import About from "./about";

const Home = () => {
  return (
    <Container >
      <Box
        borderRadius="lg"
        bg="#FFEEAD"
        p={3}
        mb={100}
        align="center"
        boxShadow="lg"
      >
        Hi, I&apos;m studying computer science
      </Box>
      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Poorin 
          </Heading>
          <p>Student in Thammasat University</p>
        </Box>
        <Box >
          <Image
            borderColor="whiteAlpha.800"
            boxSize="250px"
            src="/profile/PoorinIMG1.jpg"
            borderRadius="full"
            alt="PoorinIMG"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
