// src/store/services/dataApi.ts
import { api } from "../api";

interface DataItem {
  _id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

interface CreateDataRequest {
  title: string;
  description: string;
}

export const dataApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllData: builder.query<DataItem[], void>({
      query: () => "/data",
      // providesTags: (result) =>
      //   result
      //     ? [
      //         ...result.map(({ _id }) => ({ type: "Data" as const, id: _id })),
      //         { type: "Data", id: "LIST" },
      //       ]
      //     : [{ type: "Data", id: "LIST" }],
    }),
    getDataById: builder.query<DataItem, string>({
      query: (id) => `/data/${id}`,
      // providesTags: (result, error, id) => [{ type: "Data", id }],
    }),
    createData: builder.mutation<DataItem, CreateDataRequest>({
      query: (data) => ({
        url: "/data",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [{ type: "Data", id: "LIST" }],
    }),
    updateData: builder.mutation<
      DataItem,
      { id: string; data: Partial<CreateDataRequest> }
    >({
      query: ({ id, data }) => ({
        url: `/data/${id}`,
        method: "PUT",
        body: data,
      }),
      // invalidatesTags: (result, error, { id }) => [
      //   { type: "Data", id },
      //   { type: "Data", id: "LIST" },
      // ],
    }),
    deleteData: builder.mutation<{ message: string }, string>({
      query: (id) => ({
        url: `/data/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Data", id: "LIST" }],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetAllDataQuery,
  useGetDataByIdQuery, // not in use
  useCreateDataMutation, // not in use
  useUpdateDataMutation, // not in use
  useDeleteDataMutation,
} = dataApi;
