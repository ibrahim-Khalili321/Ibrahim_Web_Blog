import cvPdf from '../assets/Cv.pdf';
import './Cv.css';

export default function Cv() {
  return (
    <div className="cv-page">
      <div className="cv-container">
        <h1 className="cv-title">My CV</h1>
        <iframe
          src={cvPdf}
          className="cv-iframe"
          title="Ibrahim's CV"
        ></iframe>
        <a
          href={cvPdf}
          download
          className="cv-download-btn"
        >
          Download CV
        </a>
      </div>
    </div>
  );
}