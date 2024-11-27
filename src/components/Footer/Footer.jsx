import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Handcrafted by Andrew Martinez &copy; {new Date().getFullYear()}</p>
        <div className="footer-links">
          <p>Contact me:</p>
          <Link to="https://www.linkedin.com/in/andymartinez2/">
            <FaLinkedin /> <p> &nbsp; LinkedIn</p>
          </Link>
          <Link to="https://github.com/andymartinez1">
            <FaGithub /> <p> &nbsp; Github</p>
          </Link>
        </div>
      </div>
    </footer>
  );
}
