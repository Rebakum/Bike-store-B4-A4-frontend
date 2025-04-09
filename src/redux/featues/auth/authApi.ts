import { baseApi } from "@/redux/api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    //user login
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        body: userInfo,
      }),
    }),

    // user sign-up
    signUp: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/register",
        method: "POST",
        body: userInfo,
      }),
    }),

    //  user logout
    logOut: builder.mutation({
      query: (info) => ({
        url: "/auth/logout",
        method: "POST",
        body: info,
      }),
      // Invalidates cache tags related to authentication
      invalidatesTags: [
        "product",
        "allUser",
        "updateUserPass",
        "order",
        "revenue",
      ],
    }),

    updateProfile: builder.mutation({
      query: (data) => ({
        url: "/auth/update-profile",
        method: "PATCH",
        body: data,
      }),
      // Invalidates updateUserPassafter profile update
      invalidatesTags: ["updateUserPass"],
    }),

    updatePassword: builder.mutation({
      query: (data) => ({
        url: "/auth/update-password",
        method: "PATCH",
        body: data,
      }),
    }),

    // Query to get authenticated user info
    authMe: builder.query({
      query: () => ({
        url: "/auth/me",
        method: "GET",
      }),

      providesTags: ["updateUserPass"],
    }),
  }),
});

// Export hooks for using the mutations and query
export const {
  useLoginMutation,
  useLogOutMutation,
  useSignUpMutation,
  useAuthMeQuery,
  useUpdateProfileMutation,
  useUpdatePasswordMutation,
} = authApi;
