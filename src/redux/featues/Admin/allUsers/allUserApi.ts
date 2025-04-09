import { baseApi } from "@/redux/api/baseApi";
import { IUser, TResponseRedux } from "@/types/types";

// Define all user-related API endpoints
const allUsersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Query to get all users
    allUser: builder.query({
      query: () => ({
        url: "/admin/all-users",
        method: "GET",
      }),
      transformResponse: (response: TResponseRedux<IUser[]>) => ({
        data: response.data,
        meta: response.meta,
      }),
      // Provides cache tag to optimize re-fetching data
      providesTags: ["allUser"],
    }),

    // Mutation to update or block a user
    updateBlockedUser: builder.mutation({
      query: ({ id, data }) => ({
        url: `/admin/users/${id}/block`,
        method: "PATCH",
        body: data,
      }),
      // Invalidates cache of allUser after mutation to trigger refetch
      invalidatesTags: ["allUser"],
    }),
  }),
});

export const { useAllUserQuery, useUpdateBlockedUserMutation } = allUsersApi;
