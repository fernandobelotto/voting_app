import { SimpleGrid, Text } from "@chakra-ui/react";
import { useGetAllPollsQuery } from "../store/api";
import PollItemCard from "./PollItemCard";

function PollsList() {
  const { data, isLoading, error } = useGetAllPollsQuery();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error {JSON.stringify(error)}</Text>;
  }

  return (
    <>
      <SimpleGrid spacing={2} minChildWidth={200} columns={4} w="full">
        {data?.map((poll: any) => (
          <PollItemCard key={poll.id} poll={poll} />
        ))}
      </SimpleGrid>
    </>
  );
}

export default PollsList;
