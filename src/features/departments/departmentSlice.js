import api from "../../store/api";

const departmentApi = api.injectEndpoints({
  endpoints: (build) => ({
    getDepartments: build.query({
      query: () => "/departments",
      transformResponse: (response) => response,
      // transformErrorResponse: (response) => response.data.error,
      providesTags: ["department"],
    }),
    getDepartment: build.query({
      query: (id) => "/departments/" + id,
      transformResponse: (response) => response.departments,
      // transformErrorResponse: (response) => response.data.error,
      providesTags: ["department"],
    }),
    updateDepartment: build.mutation({
      query: ({ id, ...department }) => ({
        url: "/departments/" + id,
        method: "PUT",
        body: department, //body links to the req.body of the department.js file
      }),
      invalidatesTags: ["department"],
    }),
    addDepartment: build.mutation({
      query: (department) => ({
        url: "/departments",
        method: "POST",
        body: department,
      }),
      transformResponse: (response) => response,
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
  useGetDepartmentsQuery,
  useGetDepartmentQuery,
  useAddDepartmentMutation,
  useDeleteDepartmentMutation,
  useUpdateDepartmentMutation,
} = departmentApi;
