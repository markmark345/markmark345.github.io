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

const MajorProjects = () => {
  return (
    <>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="center">
              MAJOR SHIPPED PROJECTS
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Table variant="unstyled">
            <Tbody>
              <Tr>
                <Th>
                  <Heading fontSize="md">January 2022</Heading>
                </Th>
                <Td>
                  <Text fontSize="md">
                    Project Mobil Application(Android) Coins Ranking:
                    <br />
                    Coins Ranking system application in Android This
                    Self-improvement project is about coins ranking top
                    Cryptocurrencies for Android application that was developed
                    in Android studio using Java. My responsibility has Develop
                    and Design the project.
                  </Text>
                </Td>
              </Tr>
              <Tr>
                <Th>
                  <Heading fontSize="md">December 2021</Heading>
                </Th>
                <Td>
                  <Text fontSize="md">
                    CI/CD Web ISS Viewer:
                    <br />
                    Class project for Selected Topics in Software Engineering
                    (CS360). This project is about to Continuous Integration and
                    Continuous Deployment Web ISS Viewer on AWS ec2 using Git
                    workflows and docker
                  </Text>
                </Td>
              </Tr>
              <Tr>
                <Th>
                  <Heading fontSize="md">November 2021</Heading>
                </Th>
                <Td>
                  <Text fontSize="md">
                    Project Mobil Application(Android) Queue system for
                    restaurant:
                    <br />
                    Queue management system application in Android that was
                    developed in Android studio using Java. My team has Develop
                    and Design the project.
                  </Text>
                </Td>
              </Tr>
              <Tr>
                <Th>
                  <Heading fontSize="md">May 2021</Heading>
                </Th>
                <Td>
                  <Text fontSize="md">
                    Hotel reservation web application for employee:
                    <br />
                    Class project for Database System1 (CS251). Developed a web
                    application for hotel reservation using PHP, CSS, Java
                    Script and MySQL for the final project of the Database
                    course.
                  </Text>
                </Td>
              </Tr>
              <Tr>
                <Th>
                  <Heading fontSize="md">Apr 2021</Heading>
                </Th>
                <Td>
                  <Text fontSize="md">
                    Tiny DNS:
                    <br />
                    Class project for Computer Network and Security (CS234).
                    This project Develop a server-side program consisting of
                    Authentication Server, Authorize Server, and Data Server
                    which interface with client-side programs provided by
                    teaching assistants. Where the client contacted
                    Authentication Server, Data Server using TCP Protocol (TCP)
                    Authorize Server and Data Server communicate with each other
                    using UDP Protocol (UDP).
                  </Text>
                </Td>
              </Tr>
              <Tr>
                <Th>
                  <Heading fontSize="md">Apr 2021</Heading>
                </Th>
                <Td>
                  <Text fontSize="md">
                    Google Scholar Web scraping:
                    <br />
                    Class project for Data Analytics Programming (DSI200). This
                    project has To collect information about research activity
                    from Thammasat University and to practice the data
                    collection process including; finding, data scraping,
                    transformation and storing.
                  </Text>
                </Td>
              </Tr>
              <Tr>
                <Th>
                  <Heading fontSize="md">December 2020</Heading>
                </Th>
                <Td>
                  <Text fontSize="md">
                    Sex ratio in ASEAN countries, 2011-2018:
                    <br />
                    Class project Principles of Data Science (CS245). This
                    project Able to bring the data set to display statistical
                    results in various formats such as various types of graphs,
                    etc. Able to use the analyzed data for future reference Test
                    the use of machine learning with real datasets for
                    education.
                  </Text>
                </Td>
              </Tr>
              <Tr>
                <Th>
                  <Heading fontSize="md">November 2020</Heading>
                </Th>
                <Td>
                  <Text fontSize="md">
                    Student's late registration website:
                    <br />
                    Class project for Introduction to Software Engineering
                    (CS264). Developed a web application for Student's late
                    registration using HTML, CSS, Java Script and MySQL for the
                    final project of the Software Engineering course
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

export default MajorProjects;
