import { createBrowserRouter } from "react-router-dom";
import { Root } from "../components/root";
import { DepartmentList } from "../components/DepartmentList";
import { DepartmentDetails } from "../components/DepartmentDetails";
import { ProfessorList } from "../components/ProfessorList";
import { ProfessorDetails } from "../components/ProfessorDetails";
import { LoginPage } from "../components/LoginPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <DepartmentList /> },
      { path: "/departments", element: <DepartmentList /> },
      { path: "/departments/:id", element: <DepartmentDetails /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/professors", element: <ProfessorList /> },
      { path: "/professors/:id", element: <ProfessorDetails /> },
    ],
  },
]);

export default router;
