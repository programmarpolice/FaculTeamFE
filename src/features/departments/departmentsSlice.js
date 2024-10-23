import api from "./api";

const departmentApi = api.injectEndpoints({
  endpoints: (build) => ({
    getDepartments: build.query({
      query: () => "departments",
      transformResponse: (response) => response.data,
      transformErrorResponse: (response) => response.data.error,
      providesTags: ["department"],
    }),
    getDepartment: build.query({
      query: (id) => "departments/" + id,
      transformResponse: (response) => response.data,
      transformErrorResponse: (response) => response.data.error,
      providesTags: ["department"],
    }),
    addDepartment: build.mutation({
      query: (department) => ({
        url: "departments",
        method: "POST",
        body: department,
      }),
      invalidatesTags: ["department"],
    }),
    updateDepartment: build.mutation({
      query: (department) => ({
        url: "departments",
        method: "PUT",
        body: department,
      }),
      invalidatesTags: ["department"],
    }),
    deleteDepartment: build.mutation({
      query: (id) => ({
        url: "departments/" + id,
        method: "DELETE",
      }),
      invalidatesTags: ["department"],
    }),
  }),
});

// When exporting queries, you put the words "use" and "query"
// around whatever name you chose above when injecting endpoints
export const {
  useGetDepartmentssQuery,
  useGetDepartmentQuery,
  useAddDepartmentMutation,
  useDeleteDepartmentMutation,
} = departmentApi;
