import { FaHome, FaProjectDiagram, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <img src="img/Logo-White-T.png" alt="Logo" className="navbar-logo" />
        </li>
        <li>
          <Link to="/">
            <FaHome /> <p> &nbsp; Home</p>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <FaUser /> <p> &nbsp; About</p>
          </Link>
        </li>
        <li>
          <Link to="/projects">
            <FaProjectDiagram /> <p> &nbsp; Projects</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
