import { useNavigate } from "react-router-dom";
import { useDeleteDepartmentMutation } from "./departmentSlice";
import { useState } from "react";

export function DeleteDepartmentForm({ id }) {
  const navigate = useNavigate();
  const [deleteDepartment] = useDeleteDepartmentMutation();
  async function postDepartment() {
    try {
      await deleteDepartment(id).unwrap();
      navigate("/departments");
    } catch (e) {
      console.error(e);
    }
  }
  return (
    <button onClick={postDepartment} className="delete-button">
      <label>Delete this Department</label>
    </button>
  );
}
