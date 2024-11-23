import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          &copy; {new Date().getFullYear()} Andrew Martinez. All Rights
          Reserved.
        </p>
        <div className="footer-links">
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <Link to="https://github.com/andymartinez1">
            <FaGithub /> <p> &nbsp; Github</p>
          </Link>
          <Link to="https://www.linkedin.com/in/andymartinez2/">
            <FaLinkedin /> <p> &nbsp; LinkedIn</p>
          </Link>
        </div>
      </div>
    </footer>
  );
}
