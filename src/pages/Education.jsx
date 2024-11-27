import FSU from "../assets/img/FSU-Logo.jpeg";
import MWCC from "../assets/img/MWCC-Logo.jpeg";

export default function Education() {
  return (
    <section className="education">
      <h1 className="education-title">My Education</h1>

      <div className="education-list">
        <div className="education-card-1">
          <div className="education-card ">
            <h3 className="education-name">Master&apos;s Degree</h3>
            <p className="education-description">
              A description of my degree...
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
            <h3 className="education-name">Bachelor&apos;s Degree</h3>
            <p className="education-description">
              A description of my degree...
            </p>
          </div>
        </div>

        <div className="education-card-3">
          <div className="education-card">
            <h3 className="education-name">Associate&apos;s Degree</h3>
            <p className="education-description">
              A description of my degree...
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
