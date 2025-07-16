import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/img/Logos/White-Logo-T.png";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // To open and close the hamburger menu with "X" or link click
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // To close the navbar upon clicking outside of it
  const ref = useRef();
  useEffect(() => {
    const handler = (event) => {
      if (isOpen && ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [isOpen]);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={Logo} alt="Logo" className="navbar-logo-icon" />
          <p className="navbar-logo-text">&nbsp;&nbsp;Andrew Martinez</p>
        </div>

        <ul className="desktop-links">
          <li className="navbar-list-item">
            <NavLink to="/">
              <img src="src/assets/img/Icons/Home.svg" alt="home" />
              <p> &nbsp; Home</p>
            </NavLink>
          </li>
          <li className="navbar-list-item">
            <NavLink to="/about">
              <img src="src/assets/img/Icons/About.svg" alt="about" />{" "}
              <p> &nbsp; About</p>
            </NavLink>
          </li>
          <li className="navbar-list-item">
            <NavLink to="/education">
              <img src="src/assets/img/Icons/Education.svg" alt="education" />{" "}
              <p> &nbsp; Education</p>
            </NavLink>
          </li>
          <li className="navbar-list-item">
            <NavLink to="/projects">
              <img src="src/assets/img/Icons/Projects.svg" alt="projects" />{" "}
              <p> &nbsp; Projects</p>
            </NavLink>
          </li>
        </ul>

        <div>
          <button className="toggle-menu" onClick={toggleNavbar}>
            {isOpen ? <X size={48} /> : <Menu size={48} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <ul className="mobile-links" ref={ref}>
          <li className="navbar-list-item">
            <NavLink to="/" onClick={() => setIsOpen(false)}>
              <img src="src/assets/img/Icons/Home.svg" alt="home" />{" "}
              <p> &nbsp; Home</p>
            </NavLink>
          </li>
          <li className="navbar-list-item">
            <NavLink to="/about" onClick={() => setIsOpen(false)}>
              <img src="src/assets/img/Icons/About.svg" alt="about" />{" "}
              <p> &nbsp; About</p>
            </NavLink>
          </li>
          <li className="navbar-list-item">
            <NavLink to="/education" onClick={() => setIsOpen(false)}>
              <img src="src/assets/img/Icons/Education.svg" alt="education" />{" "}
              <p> &nbsp; Education</p>
            </NavLink>
          </li>
          <li className="navbar-list-item">
            <NavLink to="/projects" onClick={() => setIsOpen(false)}>
              <img src="src/assets/img/Icons/Projects.svg" alt="projects" />{" "}
              <p> &nbsp; Projects</p>
            </NavLink>
          </li>
        </ul>
      )}
    </>
  );
}
