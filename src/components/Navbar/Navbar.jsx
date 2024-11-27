import { FaHome, FaUser } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { SiOpenproject } from "react-icons/si";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/Logo-White-T.png";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={Logo} alt="Logo" className="navbar-logo-icon" />
        <p className="navbar-logo-text">&nbsp;&nbsp;Andrew Martinez</p>
      </div>

      <input type="checkbox" className="toggle-menu" />
      {/* <Hamburger /> */}
      <div className="hamburger"></div>

      <ul className="navbar-list">
        <li className="navbar-list-item">
          <Link to="/">
            <FaHome /> <p> &nbsp; Home</p>
          </Link>
        </li>
        <li className="navbar-list-item">
          <Link to="/about">
            <FaUser /> <p> &nbsp; About</p>
          </Link>
        </li>
        <li className="navbar-list-item">
          <Link to="/education">
            <FaGraduationCap /> <p> &nbsp; Education</p>
          </Link>
        </li>
        <li className="navbar-list-item">
          <Link to="/projects">
            <SiOpenproject /> <p> &nbsp; Projects</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
