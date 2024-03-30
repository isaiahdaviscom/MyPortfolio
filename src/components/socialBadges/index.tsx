import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Social() {
  return (
    <Col id="social" className="d-flex justify-content-end">
      <div id="linkedin" className="pull-right p-1 d-print-flex">
        <a
          href="https://www.linkedin.com/in/isaiahdavis/"
          target="_blank"
          rel="noopener noreferrer"
          className="col p-1 d-print-flex"
          aria-label="My Linkedin profile"
        >
          <img
            height={28}
            width={28}
            src="/vendors/fontawesome/linkedin-brands.svg"
            alt="My Linkedin profile"
          />
          <p className="print-only"><em className="print-only">linkedin.com/in/isaiahdavis</em></p>
        </a>
      </div>
      <div id="github" className="pull-right p-1 d-print-flex">
        <a
          href="https://github.com/isaiahdaviscom"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="My Github profile"
        >
          <img
            height={28}
            width={28}
            src="/vendors/fontawesome/github-square-brands.svg"
            alt="My GitHub profile"
          />
          <p className="print-only"><em>github.com/isaiahdaviscom</em></p>
        </a>
      </div>
      <div id="email" className="pull-right p-1 d-print-flex">
        <Link
          to="/contact"
          aria-label="Contact Me"
        >
          <img
            height={24}
            width={24}
            src="/vendors/fontawesome/paper-plane-solid.svg"
            alt="Contact Me"
          />
          <p className="print-only"><em>isaiah.davisx@gmail.com</em></p>
        </Link>
      </div>
      {/* <a
          href="https://codepen.io/isaiahdaviscom"
          target="_blank"
          rel="noopener noreferrer"
          className="col"
          aria-label="My Codepen profile"
        >
          <img
            height={28}
            width={28}
            src="/vendors/fontawesome/codepen-square-brands.svg"
            alt="My Codepen profile"
          />
        </a>
        <a
          href="https://www.behance.net/isaiahdavism"
          target="_blank"
          rel="noopener noreferrer"
          className="col"
          aria-label="My Adobe Behance profile"
        >
          <img
            height={28}
            width={28}
            src="/vendors/fontawesome/behance-square-brands.svg"
            alt="My Adobe Behance profile"
          />
        </a>
        <a
          href="https://drive.google.com/file/d/1S7ECDIgC9sbxiVAXiDCN8XdaxfYVfkFO/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="col"
          aria-label="My Résumé"
        >
          <img
            height={28}
            width={28}
            src="/vendors/fontawesome/file-word-regular.svg"
            alt="My Résumé"
          />
        </a> */}
    </Col>
  )
}

export default Social;