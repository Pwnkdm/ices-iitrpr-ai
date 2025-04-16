import { api } from "../api";
import { setCredentials } from "../slices/authSlice";

interface User {
  _id: string;
  name: string;
  email: string;
  role: "pending" | "admin" | "superadmin";
}

interface LoginRequest {
  email: string;
  password: string;
}

interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

interface AuthResponse {
  user: User;
  token: string;
}

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<AuthResponse, LoginRequest>({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setCredentials(data));
        } catch (err) {
          // Handle error if needed
        }
      },
    }),
    register: builder.mutation<AuthResponse, RegisterRequest>({
      query: (userData) => ({
        url: "/auth/register",
        method: "POST",
        body: userData,
      }),
    }),
    getProfile: builder.query<User, void>({
      query: () => "/auth/profile",
      providesTags: ["Profile"], // Correctly providing a tag for profile data
    }),
    getAllUsers: builder.query<User[], void>({
      query: () => "/auth/users",
      providesTags: [{ type: "Users", id: "LIST" }], // Correctly providing tags for user list
    }),
    getPendingUsers: builder.query<User[], void>({
      query: () => "/auth/pending",
      providesTags: [{ type: "Users", id: "LIST" }],
    }),
    approveUser: builder.mutation<User, string>({
      query: (id) => ({
        url: `/auth/approve/${id}`,
        method: "PUT",
      }),
      invalidatesTags: [{ type: "Users", id: "LIST" }], // Invalidating the user list after approval
    }),
    revokeUser: builder.mutation<User, string>({
      query: (id) => ({
        url: `/auth/revoke/${id}`,
        method: "PUT",
      }),
      invalidatesTags: [{ type: "Users", id: "LIST" }], // Invalidating the user list after revocation
    }),
    promoteUser: builder.mutation<User, string>({
      query: (id) => ({
        url: `/auth/promote/${id}`,
        method: "PUT",
      }),
      invalidatesTags: [{ type: "Users", id: "LIST" }], // Invalidating the user list after promotion
    }),
    demoteUser: builder.mutation<User, string>({
      query: (id) => ({
        url: `/auth/demote/${id}`,
        method: "PUT",
      }),
      invalidatesTags: [{ type: "Users", id: "LIST" }], // Invalidating the user list after demotion
    }),
  }),
  overrideExisting: false,
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useGetProfileQuery,
  useGetAllUsersQuery,
  useGetPendingUsersQuery,
  useApproveUserMutation,
  useRevokeUserMutation,
  usePromoteUserMutation,
  useDemoteUserMutation,
} = authApi;
