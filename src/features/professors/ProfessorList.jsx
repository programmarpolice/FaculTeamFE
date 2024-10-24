import {
  useGetProfessorsQuery,
  useDeleteProfessorMutation,
} from "./professorSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../account/authSlice";
import { useState } from "react";

function ProfessorList() {
  const navigate = useNavigate();
  const { data: professors = [], isLoading, error } = useGetProfessorsQuery();
  const isLoggedIn = useSelector(selectIsLoggedIn); // Get the login state
  const [filter, setFilter] = useState("");
  const [deleteProfessor] = useDeleteProfessorMutation(); // Hook for deleting professors

  if (isLoading) {
    return <p>Loading Professors...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  if (!professors.length) {
    return <p>There are no professors.</p>;
  }

  const filteredProfessors = professors.filter((prof) =>
    prof.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this professor?")) {
      try {
        await deleteProfessor(id).unwrap();
        // Optionally refresh or show a success message
      } catch (error) {
        console.error("Failed to delete professor: ", error);
      }
    }
  };

  return (
    <>
      <h1> Our Faculty</h1>
      <form>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setFilter(e.target.value)}
        />
      </form>

      {isLoggedIn && (
        <button onClick={() => navigate("/add-professor")}>
          Add Professor
        </button>
      )}

      <ul className="prof-list">
        {filteredProfessors.map((prof) => (
          <li key={prof.id}>
            <h2>{prof.name}</h2>
            {prof.profile && (
              <img src={prof.profile} alt={`${prof.name}'s profile`} />
            )}
            <p> About: {prof.bio} </p>
            <p> Email: {prof.email} </p>
            <p> Phone: {prof.phone} </p>
            {isLoggedIn && (
              <>
                <button onClick={() => navigate(`/edit-professor/${prof.id}`)}>
                  Edit
                </button>
                <button onClick={() => handleDelete(prof.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ProfessorList;
