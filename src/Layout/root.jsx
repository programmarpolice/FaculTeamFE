import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/footer";

/** Root layout component */
function Root() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Root;
