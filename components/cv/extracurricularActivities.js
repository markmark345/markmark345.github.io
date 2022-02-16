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

const ExActivities = () => {
  return (
    <>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="center">
              EXTRACURRICULAR ACTIVITIES
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Table variant="unstyled">
            <Tbody>
              <Tr>
                <Th><Heading fontSize="md">November 2019</Heading></Th>
                <Td><Text>
                  CSR Social Activities He is a tutor for grade 6 children. and
                  open for donations to school
                </Text></Td>
              </Tr>
            </Tbody>
          </Table>
        </AccordionPanel>
      </AccordionItem>
    </>
  );
};

export default ExActivities;
