import { Button, Container, Heading, Text, VStack } from "@chakra-ui/react";
import CreatePollModal from "../components/CreatePollModal";
import PollsList from "../components/PollsList";

type Props = {};

export const Home = (props: Props) => {
  return (
    <Container maxW="container.md">
      <VStack mt={10} spacing={2} align="flex-start" w="full">
        <Heading>Voting App</Heading>
        <Text>Voting web app with React and Nestjs</Text>
        <CreatePollModal />
        <PollsList />
      </VStack>
    </Container>
  );
};
