import { Navbar } from "../store/Navbar";
import { Outlet } from "react-router-dom";

/** Root layout component */
export function Root() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
