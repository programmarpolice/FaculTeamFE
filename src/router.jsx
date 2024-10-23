import { createBrowserRouter } from "react-router-dom";
import Root from "./Layout/root";
import DepartmentList from "./features/departments/DepartmentList";
import { DepartmentDetails } from "./features/departments/DepartmentDetails";
import ProfessorList from "./features/professors/ProfessorList";
import { ProfessorDetails } from "./features/professors/ProfessorDetails";
import AuthForm from "./features/account/AuthForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      // { index: true, element: <DepartmentList /> },
      { path: "/departments", element: <DepartmentList /> },
      { path: "/departments/:id", element: <DepartmentDetails /> },
      { path: "/login", element: <AuthForm /> },
      { path: "/professors", element: <ProfessorList /> },
      { path: "/professors/:id", element: <ProfessorDetails /> },
    ],
  },
]);

export default router;
