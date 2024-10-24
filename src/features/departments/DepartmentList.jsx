import { useGetDepartmentsQuery } from "./departmentSlice";
import { useGetDepartmentQuery } from "./departmentSlice";
import { AddDepartmentForm } from "./AddDepartmentForm";
import { UpdateDepartmentForm } from "./UpdateDepartmentForm.jsx";
import { DeleteDepartmentForm } from "./DeleteDepartment.jsx";
import { useSelector } from "react-redux";
import { selectToken } from "../account/authSlice";
import { useNavigate } from "react-router-dom"; //exported as an object(not default)
import { useState } from "react";
import "./Department.css";

export default function DepartmentList() {
  const token = useSelector(selectToken);
  const navigate = useNavigate();
  const { data: departments = [], isLoading, error } = useGetDepartmentsQuery();
  const [selectedDepartmentId, setSelectedDepartmentId] = useState("");

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
      <table>
        <tbody>
          <tr>
            <th scope="col">
              <h1> Our Departments</h1>
              <form>
                <input
                  type="text"
                  placeholder="Search..."
                  onChange={(e) => setFilter(e.target.value)}
                />
              </form>

              {departments.map((d) => (
                <li key={d.id} className="blue-green">
                  <h2>
                    {d.name} #{d.id}
                  </h2>

                  <address>Address: {d.address}</address>
                  <address>Phone #: {d.phone}</address>
                  <br />
                  <img src={d.Banner} className="image" />
                </li>
              ))}
            </th>
            <th scope="col">
              {token && <AddDepartmentForm />}

              {token && <UpdateDepartmentForm />}
            </th>
          </tr>
        </tbody>
      </table>
    </>
  );
}

// #{d.id} might need to add this next to d.name
