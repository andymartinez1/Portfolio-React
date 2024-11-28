import FSU from "../assets/img/FSU-Logo.jpeg";
import MWCC from "../assets/img/MWCC-Logo.jpeg";

export default function Education() {
  return (
    <section className="education">
      <h1 className="education-title">My Education</h1>

      <div className="education-list">
        <div className="education-card-1">
          <div className="education-card ">
            <h3 className="education-name">
              Master&apos;s Degree, Computer Science
            </h3>
            <h5 className="education-school">Fitchburg State University</h5>
            <p className="education-description">
              Minor: Data Science
              <br />
              <strong>GPA: 3.71</strong>
              <br />
              July 2022 – December 2023
              <br />
            </p>
          </div>
          <div className="education-img">
            <img src={FSU} alt="FSU Logo" />
          </div>
        </div>

        <div className="education-card-2">
          <div className="education-img">
            <img src={FSU} alt="FSU Logo" />
          </div>
          <div className="education-card">
            <h3 className="education-name">
              Bachelor&apos;s Degree, Computer Information Systems
            </h3>
            <h5 className="education-school">Fitchburg State University</h5>
            <p className="education-description">
              Minor: Computer Science
              <br />
              <strong>GPA: 3.6</strong>
              <br />
              <strong>Magna Cum Laude</strong>
              <br />
              Dean&apos;s List: 2018, 2019, 2020
              <br />
              June 2018 – December 2020
              <br />
            </p>
          </div>
        </div>

        <div className="education-card-3">
          <div className="education-card">
            <h3 className="education-name">
              Associate&apos;s Degree, Computer Information Systems
            </h3>
            <h5 className="education-school">
              Mount Wachusett Community College
            </h5>
            <p className="education-description">
              <strong>GPA: 3.61</strong>
              <br />
              <strong>High Honors</strong>
              <br />
              Dean&apos;s List: 2017, 2018
              <br />
              January 2017 – May 2018
              <br />
            </p>
          </div>
          <div className="education-img">
            <img src={MWCC} alt="MWCC-Logo" />
          </div>
        </div>
      </div>
    </section>
  );
}
