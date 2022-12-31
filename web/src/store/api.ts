import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const pollTag = "Poll";
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000",
  }),
  tagTypes: [pollTag],
  endpoints: (builder) => ({
    getAllPolls: builder.query<any, void>({
      query: () => "polls",
      providesTags: [pollTag],
    }),
    getPollById: builder.query({
      query: (id) => `polls/${id}`,
    }),

    createPoll: builder.mutation({
      query: (body) => ({
        url: "polls",
        method: "POST",
        body,
      }),
      invalidatesTags: [pollTag],
    }),
    updatePollById: builder.mutation({
      query: ({ id, body }) => ({
        url: `polls/${id}`,
        method: "PUT",
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
} = api;
