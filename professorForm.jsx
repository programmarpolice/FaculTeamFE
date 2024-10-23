import { useNavigate } from "react-router-dom";
import { useAddProfessorMutation } from "./professorSlice";
import { useState } from "react";

export default function professorForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    profile: "",
    phone: "",
    bio: "",
    DepartmentId: "",
  });

  const navigate = useNavigate();
  const [addProfessor] = useAddProfessorMutation();
  async function postProfessor(event) {
    event.preventDefault();
    try {
      const professor = await addProfessor({
        ...formData,
      }).unwrap();
      navigate(`/professors/${professor.id}`);
    } catch (e) {
      console.error(e);
    }
  }
  return (
    <form onSubmit={postProfessor}>
      <h2>Add a Professor</h2>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </label>
      <label>
        Email
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </label>
      <label>
        Profile Picture
        <input
          type="text"
          name="profile"
          value={formData.profile}
          onChange={(e) =>
            setFormData({ ...formData, profile: e.target.value })
          }
        />
      </label>
      <label>
        Phone number
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </label>
      <label>
        Bio
        <input
          type="text"
          name="bio"
          value={formData.bio}
          onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
        />
      </label>
      <label>
        Department
        <input
          type="text"
          name="department"
          value={formData.department}
          onChange={(e) =>
            setFormData({ ...formData, department: e.target.value })
          }
        />
      </label>
      <button>Add Professor</button>
    </form>
  );
}
