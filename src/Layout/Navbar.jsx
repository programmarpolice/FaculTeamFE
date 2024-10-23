import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/account/authSlice";
import "./Navbar.css";
/** Main site navigation */
function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const attemptLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <header>
      {" "}
      <nav>
        <NavLink to="/" className="Navbar1">
          <>Welcome To FacuLink</>
        </NavLink>

        <NavLink to="/departments" className="Navbar2">
          Departments
        </NavLink>

        <NavLink to="/professors" className="Navbar3">
          Professors
        </NavLink>

        <NavLink to="/login" className="Navbar4">
          Log In/Register
        </NavLink>
      </nav>
    </header>
  );
}
export default Navbar;
