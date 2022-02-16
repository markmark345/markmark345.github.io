import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";

const Education = () => {
  return (
    <>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="center">
              EDUCATION
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Table variant="unstyled">
            <Tbody>
              <Tr>
                <Th>
                  <Heading fontSize="md">2016 - 2019</Heading>
                </Th>
                <Td>
                  <Text>Wat Suthiwararam - Senior High School</Text>
                </Td>
              </Tr>
              <Tr>
                <Th>
                  <Heading fontSize="md">2019 - Present</Heading>
                </Th>
                <Td>
                  <Text>
                    Bachelor of Science in Computer Science Thammasat University
                  </Text>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </AccordionPanel>
      </AccordionItem>
    </>
  );
};

export default Education;
