import { createBrowserRouter } from "react-router-dom";
import Root from "./Layout/root";
import DepartmentList from "./features/departments/DepartmentList";

import ProfessorList from "./features/professors/ProfessorList";
import { ProfessorDetails } from "./features/professors/ProfessorDetails";
import AuthForm from "./features/account/AuthForm";
import ProfessorForm from "./features/professors/professorForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      // { index: true, element: <DepartmentList /> },
      { path: "/departments", element: <DepartmentList /> },

      { path: "/login", element: <AuthForm /> },
      { path: "/professors", element: <ProfessorList /> },
      { path: "/professors/:id", element: <ProfessorDetails /> },
      { path: "/add-professor", element: <ProfessorForm /> },
      { path: "/edit-professor/:id", element: <ProfessorForm /> },
    ],
  },
]);

export default router;
