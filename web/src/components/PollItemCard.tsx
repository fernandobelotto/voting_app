import { DeleteIcon } from "@chakra-ui/icons";
import {
  Flex,
  Heading,
  IconButton,
  HStack,
  Button,
  Text,
} from "@chakra-ui/react";
import { memo } from "react";
import { Poll } from "types";
import {
  useDeletePollByIdMutation,
  useDownvoteMutation,
  useUpvoteMutation,
} from "../store/api";

type Props = {
  poll: Poll;
};

function PollItemCard({ poll }: Props) {
  const [deletePoll, { isLoading: isLoadingDelete }] =
    useDeletePollByIdMutation();

  const [upVotePoll, { isLoading: isLoadingUpvote }] = useUpvoteMutation();
  const [downVotePoll, { isLoading: isLoadingDownvote }] =
    useDownvoteMutation();

  return (
    <Flex
      flexDirection="column"
      justify="space-between"
      p={3}
      gap={2}
      border="1px solid"
      borderColor="grey"
      rounded="lg"
      shadow="md"
    >
      <Flex justify="space-between" w="full" gap={2}>
        <Heading size="md" key={poll.id} noOfLines={2}>
          {poll.title}
        </Heading>
        <IconButton
          aria-label="delete"
          size="xs"
          colorScheme="red"
          onClick={() => deletePoll(poll.id)}
          icon={<DeleteIcon />}
          isLoading={isLoadingDelete}
        >
          delete
        </IconButton>
      </Flex>
      <Text noOfLines={3}>{poll.description}</Text>
      <HStack>
        <Button
          onClick={() => upVotePoll(poll.id)}
          size="xs"
          colorScheme="blue"
          isLoading={isLoadingUpvote}
        >
          {poll.upVotes} upvote
        </Button>
        <Button
          onClick={() => downVotePoll(poll.id)}
          size="xs"
          colorScheme="gray"
          isLoading={isLoadingDownvote}
        >
          {poll.downVotes} downvote
        </Button>
      </HStack>
    </Flex>
  );
}

export default memo(PollItemCard);
