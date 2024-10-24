import { useNavigate } from "react-router-dom";
import { useDeleteDepartmentMutation } from "./departmentSlice";
import { useState } from "react";

export function DeleteDepartmentForm() {
  const navigate = useNavigate();
  const [deleteDepartment] = useDeleteDepartmentMutation();
  async function postDepartment() {
    try {
      const department = await deleteDepartment().unwrap();
       navigate(`/departments/${department.id}`);
    } catch (e) {
      console.error(e);
    }
  }
  return (
    <button onClick={postDepartment()} className="delete-button">
      <label>Delete this Department</label>
    </button>
  );
}
