import * as toolkitRaw from "@reduxjs/toolkit/query/react";
const { createApi, fetchBaseQuery } = ((toolkitRaw as any).default ??
  toolkitRaw) as typeof toolkitRaw;

const pollTag = "Poll";
export const pollApi = createApi({
  reducerPath: "polls",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://192.168.15.30:4000",
  }),
  tagTypes: [pollTag],
  endpoints: (builder) => ({
    getAllPolls: builder.query({
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
