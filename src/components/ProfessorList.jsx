import { useGetProfessorsQuery } from "./professorSlice";
import { useNavigate } from "react-router-dom"; //exported as an object(not default)
import { ProfessorDetails } from "./ProfessorDetails";

import { NavBar } from "./NavBar";
import { Footer } from "./Footer";

export default function ProfessorList() {
  const navigate = useNavigate();
  const { data: professors = [], isLoading, error } = useGetProfessorsQuery();

  if (isLoading) {
    return <p>Loading Professors...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  if (!professors.length) {
    return <p>There are no professors in this department.</p>;
  }

  return (
    <>
      <NavBar />
      <ul>
        {professors.map((prof) => (
          <li
            onClick={() => {
              navigate(`/Professor-details/${prof.id}`);
            }}
            key={prof.id}
          >
            <ProfessorDetails professor={prof} />
          </li>
        ))}
      </ul>
      <Footer />
    </>
  );
}
