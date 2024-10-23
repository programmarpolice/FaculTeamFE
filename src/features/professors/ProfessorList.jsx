import { useGetProfessorsQuery } from "./professorSlice";
import { useNavigate } from "react-router-dom"; //exported as an object(not default)
import { ProfessorDetails } from "./ProfessorDetails";

// import { Navbar } from "../../Layout/Navbar";
// import { Footer } from "../../components/Footer";

function ProfessorList() {
  const navigate = useNavigate();
  const { data: professors = [], isLoading, error } = useGetProfessorsQuery();

  if (isLoading) {
    return <p>Loading Professors...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  if (!professors.length) {
    return <p>There are no professors.</p>;
  }

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
      <ul className="prof-list">
        {professors.map((prof) => (
          <li key={prof.id}>
            <h2>{prof.name}</h2>
            <img src={prof.profile}></img>
            <p> About: {prof.bio} </p>
            <p> Email: {prof.email} </p>
            <p> Phone: {prof.phone} </p>
          </li>
        ))}
      </ul>
    </>
  );
}
export default ProfessorList;
