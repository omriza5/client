import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="d-flex justify-content-center pt-4">
      <ul className="nav">
        <li className="nav-item">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active-link" : ""}`
            }
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/history"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active-link" : ""}`
            }
          >
            History
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
