import { useParams, useNavigate } from "react-router-dom";
import {
  useAddProfessorMutation,
  useGetProfessorQuery,
  useUpdateProfessorMutation,
} from "./professorSlice";
import { useEffect, useState } from "react";

export default function professorForm() {
  const { id } = useParams(); // Get the professor id from the URL
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    profile: "",
    phone: "",
    bio: "",
    DepartmentId: null, //has to start as null due to the schema defining it as either a int or null(int?)
  });

  const { data: professor } = useGetProfessorQuery(id, {
    skip: !id, // Skip fetching if no id
  });

  const [addProfessor] = useAddProfessorMutation();
  const [updateProfessor] = useUpdateProfessorMutation();

  useEffect(() => {
    if (professor) {
      setFormData({
        name: professor.name,
        email: professor.email,
        profile: professor.profile,
        phone: professor.phone,
        bio: professor.bio,
        DepartmentId: professor.DepartmentId,
      });
    }
  }, [professor]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Ensuring DepartmentId is an integer or null
      const submissionData = {
        ...formData,
        DepartmentId: formData.DepartmentId
          ? parseInt(formData.DepartmentId)
          : null,
      };
      if (id) {
        // If editing, update the existing professor
        await updateProfessor({ ...submissionData, id }).unwrap();
      } else {
        // If adding a new professor
        await addProfessor(submissionData).unwrap();
      }
      navigate("/professors");
    } catch (e) {
      console.error("Failed to save professor: ", e);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{id ? "Edit Professor" : "Add a Professor"}</h2>
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
          type="email" // Changed to email type for validation
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
        Department ID
        <input
          type="number"
          name="DepartmentId"
          value={formData.DepartmentId || ""}
          onChange={(e) =>
            setFormData({ ...formData, DepartmentId: e.target.value })
          }
        />
      </label>
      <button>{id ? "Update" : "Add"} Professor</button>
    </form>
  );
}
