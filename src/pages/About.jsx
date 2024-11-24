import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <section className="about">
        <h1>About Me</h1>
        <p>
          I&apos;m a results-oriented IT specialist with vast experience in
          software development, system installation, and technical issue
          handling. Proficient in a variety of programming languages, including
          Java, JavaScript, Python, C#, and C++, with a particular emphasis on
          full stack and front end development. Skilled at building and
          implementing REST APIs, as well as using machine learning and data
          analysis to create advanced technological solutions. Experienced with
          network infrastructure management, vulnerability remediation, and
          automation solutions for increased security and efficiency.
          Experienced in SQL and NoSQL databases, cloud platforms (AWS, Azure),
          and Agile processes for efficient project delivery. Proven track
          record of cross-functional cooperation, IT strategy formulation, and
          technical leadership in a variety of situations.
        </p>
      </section>
      <section className="core-competencies">
        <h3 className="core-competencies-title">Core Competencies</h3>
        <ul className="core-competencies-list">
          <li className="core-competencies-item">
            <strong>Full Stack Development:</strong> Java, JavaScript, Node.js,
            C#, C++, REST API Development
          </li>
          <li className="core-competencies-item">
            <strong>Front-End Development:</strong> JavaScript, HTML, CSS
          </li>
          <li className="core-competencies-item">
            <strong>Data Science & Machine Learning:</strong> Python, R, Data
            Analysis
          </li>
          <li className="core-competencies-item">
            <strong>Databases:</strong> SQL/NoSQL (MongoDB, PostgreSQL)
          </li>
          <li className="core-competencies-item">
            <strong>Cloud Computing:</strong> AWS, Azure
          </li>
          <li className="core-competencies-item">
            <strong>Business & IT Tools:</strong> Microsoft Office (Word,
            PowerPoint, Excel, Access), Google Workspace (Docs, Sheets), Power
            BI, Jira, Smartsheet
          </li>
          <li className="core-competencies-item">
            <strong>Development & Automation:</strong> Version Control (Git),
            CI/CD, Agile Methodologies, Automation Tools
          </li>
          <li className="core-competencies-item">
            <strong>Systems & Infrastructure:</strong> Network Infrastructure,
            Vulnerability Remediation, System Implementations
          </li>
          <li className="core-competencies-item">
            <strong>Problem Solving & Collaboration:</strong> Troubleshooting,
            IT Strategy & Solutions, Cross-Functional Collaboration, Technical
            Leadership
          </li>
        </ul>
      </section>
      <div className="resume">
        <Link to="/files/Andrew-Martinez-Resume.pdf">
          <button className="resume-button">
            <p>View my full resume &nbsp;</p>
            <FaChevronRight />
          </button>
        </Link>
      </div>
    </>
  );
}
