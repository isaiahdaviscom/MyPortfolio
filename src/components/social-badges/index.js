import React from "react";
import { Col } from "react-bootstrap";

function Social(prop) {
  return (
    <Col lg={2} className="d-flex justify-content-end">
      <a
        href="https://www.linkedin.com/in/isaiahdavis/"
        target="_blank"
        rel="noopener noreferrer"
        className="col"
      >
        <img
          height={28}
          width={28}
          src="/vendors/fontawesome/linkedin-brands.svg"
          alt="My Linkedin profile"
        />
      </a>
      <a
        href="https://github.com/isaiahdaviscom"
        target="_blank"
        rel="noopener noreferrer"
        className="col"
      >
        <img
          height={28}
          width={28}
          src="/vendors/fontawesome/github-square-brands.svg"
          alt="My GitHub profile"
        />
      </a>
      <a
        href="https://codepen.io/isaiahdaviscom"
        target="_blank"
        rel="noopener noreferrer"
        className="col"
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
      >
        <img
          height={28}
          width={28}
          src="/vendors/fontawesome/file-word-regular.svg"
          alt="My Résumé"
        />
      </a>
    </Col>
  )
}

export default Social;