import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/account/authSlice";
/** Main site navigation */
function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const token = useSelector((state) => state.auth.token);
  const attemptLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <nav>
      <NavLink to="/" className="logo">
        <span> Welcome To FacuLink </span>
      </NavLink>
      <menu>
        <li>
          <NavLink to="/departments">Departments</NavLink>
        </li>
        <li>
          <NavLink to="/professors">Professors</NavLink>
        </li>
        <li>
          <a href="#" onClick={attemptLogout}>
            Log Out
          </a>
        </li>
        <li>
          <NavLink to="/login">Log In</NavLink>
        </li>
      </menu>
    </nav>
  );
}
export default Navbar;
