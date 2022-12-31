import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const pollTag = "Poll";
export const pollApi = createApi({
  reducerPath: "polls",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://192.168.15.30:4000",
  }),
  tagTypes: [pollTag],
  endpoints: (builder) => ({
    getAllPolls: builder.query<void, void>({
      query: () => "polls",
      providesTags: [pollTag],
    }),
    getPollById: builder.query({
      query: (id) => `polls/${id}`,
    }),
    createPoll: builder.mutation<any, any>({
      query: (body) => ({
        url: "polls",
        method: "POST",
        body,
      }),
      invalidatesTags: [pollTag],
    }),
    updatePollById: builder.mutation<any, { id: number; body: any }>({
      query: ({ id, body }) => ({
        url: `polls/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: [pollTag],
    }),
    upvote: builder.mutation({
      query: (id) => ({
        url: `polls/${id}/upvote`,
        method: "PATCH",
      }),
      invalidatesTags: [pollTag],
    }),
    downvote: builder.mutation({
      query: (id) => ({
        url: `polls/${id}/downvote`,
        method: "PATCH",
      }),
      invalidatesTags: [pollTag],
    }),

    deletePollById: builder.mutation({
      query: (id) => ({
        url: `polls/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [pollTag],
    }),
  }),
});

export const {
  useCreatePollMutation,
  useDownvoteMutation,
  useUpvoteMutation,
  useGetPollByIdQuery,
  useDeletePollByIdMutation,
  useGetAllPollsQuery,
  useUpdatePollByIdMutation,
} = pollApi;
