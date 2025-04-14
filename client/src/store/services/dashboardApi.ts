// src/store/services/dashboardApi.ts
import { api } from "../api";

interface DashboardData {
  user: {
    _id: string;
    name: string;
    email: string;
    role: string;
  };
  actions: string[];
}

export const dashboardApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getDashboard: builder.query<DashboardData, void>({
      query: () => "/dashboard",
    }),
  }),
  overrideExisting: false,
});

export const { useGetDashboardQuery } = dashboardApi;
