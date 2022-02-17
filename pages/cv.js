import {
  VStack,
  Heading,
  Text,
  Box,
  HStack,
  Icon,
  Button,
  Accordion,
} from "@chakra-ui/react";

import { HiDocumentDownload } from "react-icons/hi";
import LinkItem from "../components/LinkItem";
// import CVFile from "../public/pdf/CV.pdf";
import Summary from "../components/cv/summary";
import Education from "../components/cv/eduaction";
import ExActivities from "../components/cv/extracurricularActivities";
import MajorProjects from "../components/cv/majorProjects";
import Technologies from "../components/cv/technologies";
import Certification from "../components/cv/certification";
import Interests from "../components/cv/interests";

const CV = () => {
  return (
    <>
      <VStack w="100%" alignItems="flex-start" as="section" spacing={1}>
        <HStack spacing={4} mb={6}>
          <Heading size="lg">CV</Heading>
          <a
            href="/pdf/CV.pdf"
            alt="alt text"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="ghost"
              target="_blank"
              px={4}
              justifyContent={{ base: "flex-start", md: "center" }}
              rightIcon={<Icon as={HiDocumentDownload} />}
            >
              Download CV
            </Button>
          </a>
        </HStack>

        <Text fontSize="2xl">Mr.Natapatchara Anuroje</Text>
        <HStack spacing={4} alignItems="center">
          <Box>
            <Text fontSize="md">Tel: 083-776-7928</Text>
          </Box>
          <Box>
            <Text fontSize="md">Email: natapatchara.anuroje@gmail.com</Text>
          </Box>
        </HStack>
        <Text fontSize="md">
          Adress: 347/135, Chaeng Watthana Road, Talat Bang Khen, Lak Si,
          Bangkok, 10210
        </Text>
        <br />
        <Accordion defaultIndex={[0]} allowMultiple w="100%">
          <Summary />
          <Education />
          <ExActivities />
          <MajorProjects />
          <Technologies />
          <Certification />
          <Interests />
        </Accordion>
      </VStack>
    </>
  );
};

export default CV;
