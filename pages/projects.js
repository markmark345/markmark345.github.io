import {
  Heading,
  List,
  VStack,
  ListItem,
  Text,
  InputGroup,
  Input,
  InputLeftElement,
  Icon,
} from "@chakra-ui/react";
import { jsproject } from "../data/jsprojects";
import ProjectCard from "../components/projects/projectsCard";

import { IoSearchSharp } from "react-icons/io5";

const Projects = () => {

  const onSearch = (event) => {
    
  };
  
  return (
    <>
      <VStack w="100%" alignItems="flex-start" spacing={4} as="section">
        <Heading size="lg">Projects</Heading>
        <Text>
          Open Source Projects on Github. I've a total of {jsproject.length}{" "}
          projects
        </Text>
        <InputGroup >
          <InputLeftElement pointerEvents="none">
            <Icon as={IoSearchSharp} color="gray.500" />
          </InputLeftElement>
          <Input
            onChange={onSearch}
            placeholder="Search Project"
            variant="flushed"
            mb={12}
          />
        </InputGroup>
        <List spacing={6} w="100%">
          {jsproject.map((data, key) => (
            <ListItem key={key} github={data.github}>
              <ProjectCard
                title={data.title}
                description={data.description}
                github={data.github}
                tag={data.type}
              />
            </ListItem>
          ))}
        </List>
      </VStack>
    </>
  );
};

export default Projects;
