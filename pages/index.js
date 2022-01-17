import { Container, Box, Heading, Image } from "@chakra-ui/react";
// import About from "./about";

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
      <Box >
          <Image
            maxWidth="150px"
            borderColor="Black.800"
            borderWidth={5}
            borderStyle="solid"
            // boxSize="250px"
            src="/profile/PoorinIMG1.jpg"
            borderRadius="full"
            alt="PoorinIMG"
          />
        </Box>
      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Poorin 
          </Heading>
          <p>Student in Thammasat University</p>
        </Box>
        
      </Box>
    </Container>
  );
};

export default Home;
