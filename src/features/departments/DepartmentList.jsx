import { useGetDepartmentsQuery } from "./departmentSlice";
import { useNavigate } from "react-router-dom"; //exported as an object(not default)

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
      <h1> Our Departments</h1>
      <form>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setFilter(e.target.value)}
        />
      </form>
      <ul className="dept-list">
        {departments.map((d) => (
          <li key={d.id}>
            <h2>{d.name}</h2>
            <p> About: {d.description} </p>
            <p> Phone: {d.phone} </p>
            <p> Building # {d.address} </p>
            <img src={d.Banner}></img>
          </li>
        ))}
      </ul>
    </>
  );
}

// #{d.id} might need to add this next to d.name
