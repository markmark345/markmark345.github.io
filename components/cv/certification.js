import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  UnorderedList,
  HStack,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";

const Certification = () => {
  return (
    <>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="center">
              CERTIFICATION
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Table variant="unstyled">
            <Tbody>
              <Tr>
                <Th>
                  <Heading fontSize="md">February 2022</Heading>
                </Th>
                <Td>
                  <Text>
                    Data Camp: "Introduction to SQL"
                  </Text>
                </Td>
              </Tr>
              <Tr>
                <Th>
                  <Heading fontSize="md">October 2021</Heading>
                </Th>
                <Td>
                  <Text>
                    Sololearn: "React + Redux course"
                  </Text>
                </Td>
              </Tr>
              <Tr>
                <Th>
                  <Heading fontSize="md">April 2021</Heading>
                </Th>
                <Td>
                  <Text>
                  Sololearn: "python core"
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

export default Certification;
