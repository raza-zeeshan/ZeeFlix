import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-info navbar-expand-sm">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand mx-3">
          <img src={logo} alt="" className="img-size" />
        </NavLink>

        <div className="collapse navbar-collapse d-flex justify-content-between">
          <ul className="navbar-nav">
            <li className="navbar-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>

            <li className="navbar-item">
              <NavLink className="nav-link" to="/movies">
                Movies
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="collapse navbar-collapse d-flex justify-content-between mx-3">
        <ul className="navbar-nav">
          <li className="navbar-item">
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink className="nav-link" to="/help">
              Help?
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
