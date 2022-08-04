import React from "react";
/*
Goal is to create separate components that have flexibility in adding attributes to HTML tags
*/
function Image(prop) {
  return (
    <img className="img-responsive" src="/vendors/fontawesome/linkedin-brands.svg" alt="Linkedin" rel="noopener noreferrer" />
  )
}

function LinkImage(prop) {
  // let { x } = prop
  return (
    <a href="/" target="_blank"><Image className="" src=""></Image></a>
  )
}

function BadgeLink(prop) {
  return (
    <LinkImage className="badge-link">
    </LinkImage>
  )
}

function BadgeLinks(prop) {
  return (
    <div className="badge-links">
      <BadgeLink icon="linkedin-brands.svg"></BadgeLink>
    </div>
  )
}

function Social(prop) {
  console.log(prop);
  return (
    <div style={{ display: "flex" }}>
      <BadgeLinks >
        <BadgeLink></BadgeLink>
        <BadgeLink></BadgeLink>
        <BadgeLink></BadgeLink>
        <BadgeLink></BadgeLink>
      </BadgeLinks>
      <a
        href="https://www.linkedin.com/in/isaiahdavis/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          style={{ height: "36px" }}
          src="/vendors/fontawesome/linkedin-brands.svg"
          alt="My Linkedin profile"
        />
        <p>
          <small>Linkedin</small>
        </p>
      </a>
      <a
        href="https://github.com/isaiahdaviscom"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          style={{ height: "36px" }}
          src="/vendors/fontawesome/github-square-brands.svg"
          alt="My GitHub profile"
        />
        <p>
          <small>Github</small>
        </p>
      </a>
      <a
        href="https://www.behance.net/isaiahdavism"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          style={{ height: "36px" }}
          src="/vendors/fontawesome/behance-square-brands.svg"
          alt="My Adobe Behance profile"
        />
        <p>
          <small>Behance</small>
        </p>
      </a>
      <a
        href="https://drive.google.com/file/d/1S7ECDIgC9sbxiVAXiDCN8XdaxfYVfkFO/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          style={{ height: "36px" }}
          src="/vendors/fontawesome/file-word-regular.svg"
          alt="My Résumé"
        />
        <p>
          <small>R&eacute;sum&eacute;</small>
        </p>
      </a>
    </div>
  )
}

export default Social;