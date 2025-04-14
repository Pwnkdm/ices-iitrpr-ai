// src/store/services/authApi.ts
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
    }),
    getAllUsers: builder.query<User[], void>({
      query: () => "/auth/users",
    }),
    getPendingUsers: builder.query<User[], void>({
      query: () => "/auth/pending",
    }),
    approveUser: builder.mutation<User, string>({
      query: (id) => ({
        url: `/auth/approve/${id}`,
        method: "PUT",
      }),
      // Invalidate relevant queries to refetch data after this mutation
      invalidatesTags: [{ type: "Users", id: "LIST" }],
    }),
    revokeUser: builder.mutation<User, string>({
      query: (id) => ({
        url: `/auth/revoke/${id}`,
        method: "PUT",
      }),
      invalidatesTags: [{ type: "Users", id: "LIST" }],
    }),
    promoteUser: builder.mutation<User, string>({
      query: (id) => ({
        url: `/auth/promote/${id}`,
        method: "PUT",
      }),
      invalidatesTags: [{ type: "Users", id: "LIST" }],
    }),
    demoteUser: builder.mutation<User, string>({
      query: (id) => ({
        url: `/auth/demote/${id}`,
        method: "PUT",
      }),
      invalidatesTags: [{ type: "Users", id: "LIST" }],
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
