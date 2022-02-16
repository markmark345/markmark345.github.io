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

const Technologies = () => {
  return (
    <>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="center">
              TECHNOLOGIES
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Table variant="unstyled">
            <Tbody>
              <Tr>
                <Th>
                  <Heading fontSize="md">Programming languages</Heading>
                </Th>
                <Td>
                  <Text>
                    Python, C/C++, JavaScript, TypeScript, HTML, CSS, PHP, Java, golang
                    SQL, shell scripts and NodeJS.
                  </Text>
                </Td>
              </Tr>
              <Tr>
                <Th>
                  <Heading fontSize="md">Framwork & library</Heading>
                </Th>
                <Td>
                  <Text>
                    Next.js, ReactJS, Material-UI, Protractor(E2E), Bootstrap,
                    Google firebase, TailwindCSS, Chakra-ui
                  </Text>
                </Td>
              </Tr>
              <Tr>
                <Th>
                  <Heading fontSize="md">IDEs</Heading>
                </Th>
                <Td>
                  <Text>
                    VSCode, Android Studio, Eclipse, Visual Studio, Google
                    Colab, Xampp, Tableau, Anaconda
                  </Text>
                </Td>
              </Tr>
              <Tr>
                <Th>
                  <Heading fontSize="md">Source control</Heading>
                </Th>
                <Td>
                  <Text>Git</Text>
                </Td>
              </Tr>
              <Tr>
                <Th>
                  <Heading fontSize="md">Databases</Heading>
                </Th>
                <Td>
                  <Text>MySQL, MongoDB</Text>
                </Td>
              </Tr>
              <Tr>
                <Th>
                  <Heading fontSize="md">OS</Heading>
                </Th>
                <Td>
                  <Text>Windows, Linux</Text>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </AccordionPanel>
      </AccordionItem>
    </>
  );
};

export default Technologies;
