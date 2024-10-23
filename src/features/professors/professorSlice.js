import api from "../../store/api";

const professorApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProfessors: build.query({
      query: () => "/professors",
      transformResponse: (response) => response,
      // transformErrorResponse: (response) => response.data.error,
      providesTags: ["professor"],
    }),
    getProfessor: build.query({
      query: (id) => "/professors/" + id,
      transformResponse: (response) => response.data,
      transformErrorResponse: (response) => response.data.error,
      providesTags: ["professor"],
    }),
    updateProfessor: build.mutation({
      query: (professor) => ({
        url: "/professors",
        method: "PUT",
        body: professor,
      }),
      invalidatesTags: ["professor"],
    }),
    addProfessor: build.mutation({
      query: (professor) => ({
        url: "professors",
        method: "POST",
        body: professor,
      }),
      invalidatesTags: ["professor"],
    }),
    deleteProfessor: build.mutation({
      query: (id) => ({
        url: "professors/" + id,
        method: "DELETE",
      }),
      invalidatesTags: ["professor"],
    }),
  }),
});
// When exporting queries, you put the words "use" and "query"
// around whatever name you chose above when injecting endpoints
export const {
  useGetProfessorsQuery,
  useGetProfessorQuery,
  useAddProfessorMutation,
  useDeleteProfessorMutation,
} = professorApi;
