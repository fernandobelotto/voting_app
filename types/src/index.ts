export type Poll = {
  id: number;
  title: string;
  description: string;
  upVotes: number;
  downVotes: number;
};

export type PollFormType = Omit<Poll, "id">;
