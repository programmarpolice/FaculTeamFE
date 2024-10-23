import { useGetDepartmentsQuery } from "./departmentSlice";
import { useNavigate } from "react-router-dom"; //exported as an object(not default)
import { DepartmentDetails } from "./DepartmentDetails";

import { NavBar } from "./NavBar";
import { Footer } from "./Footer";

export default function DepartmentList() {
  const navigate = useNavigate();
  const { data: departments = [], isLoading, error } = useGetDepartmentsQuery();

  if (isLoading) {
    return <p>Loading Departments...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  if (!departments.length) {
    return <p>There are no departments.</p>;
  }

  return (
    <>
      <NavBar />
      <ul>
        {departments.map((dept) => (
          <li
            onClick={() => {
              navigate(`/Department-details/${dept.id}`);
            }}
            key={dept.id}
          >
            <DepartmentDetails department={dept} />
          </li>
        ))}
      </ul>
      <Footer />
    </>
  );
}
