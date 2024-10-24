import { useNavigate } from "react-router-dom";
import { useAddDepartmentMutation } from "./departmentSlice";
import { useState } from "react";

export function AddDepartmentForm() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    Banner: "",
    address: "",
    phone: "",
  });

  const navigate = useNavigate();
  const [addDepartment] = useAddDepartmentMutation();
  async function postDepartment(event) {
    event.preventDefault();
    try {
      const department = await addDepartment({
        ...formData,
      }).unwrap();
      navigate(`/departments/${department.id}`);
    } catch (e) {
      console.error(e);
    }
  }
  return (
    <form onSubmit={postDepartment} className="add-update-form">
      <h2>Add a Department</h2>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </label>
      <br />
      <label>
        Description
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
      </label>
      <br />
      <label>
        Banner Picture
        <input
          type="text"
          name="Banner"
          value={formData.Banner}
          onChange={(e) => setFormData({ ...formData, Banner: e.target.value })}
        />
      </label>{" "}
      <br />
      <label>
        Phone number
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </label>{" "}
      <br />
      <label>
        Address
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={(e) =>
            setFormData({ ...formData, address: e.target.value })
          }
        />
      </label>{" "}
      <br />
      <button>Add Department</button> <br />
    </form>
  );
}
