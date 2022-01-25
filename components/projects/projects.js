import { VStack, Heading, List, ListItem, Box } from "@chakra-ui/react";
import ProjectCard from "./projectsCard";
import { jsproject } from "../../data/jsprojects";

const Project = () => {
  return (
    <VStack w="full" alignItems="flex-start" spacing={4} as="section">
      <Heading size="lg">Projects</Heading>
      {/* <SimpleGrid columns={1} spacing={4} mt={8} w="100%">
        {jsproject.map((data, key) => (
          <ProjectCard
            key={key}
            title={data.title}
            github={data.github}
            description={data.description}
          />
        ))}
      </SimpleGrid> */}
      <List spacing={6}>
        {jsproject.map((data, key) => (
          <ListItem key={key} github={data.github}>
            <ProjectCard title={data.title} description={data.description} />
          </ListItem>
        ))}
      </List>
    </VStack>
  );
};

export default Project;
