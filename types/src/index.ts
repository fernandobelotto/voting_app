import { pollApi } from "./pollApi";

export const {
  useCreatePollMutation,
  useDownvoteMutation,
  useUpvoteMutation,
  useGetPollByIdQuery,
  useDeletePollByIdMutation,
  useGetAllPollsQuery,
  useUpdatePollByIdMutation,
} = pollApi;

export { pollApi } from "./pollApi";

export type Poll = {
  id: number;
  title: string;
  description: string;
  upVotes: number;
  downVotes: number;
};

export type PollFormType = Omit<Poll, "id">;
