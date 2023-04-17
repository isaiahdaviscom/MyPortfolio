// React
import React, { useEffect } from "react";
// import style from "./style.module.css";
// Bootstrap
import { Container } from "react-bootstrap";
import Flashcards from "../../components/flashcards";
import projects from "../../helpers/projectlist";


// Custom
// import Slides from "../../components/slides";
// import Projects from "../../components/projects";
const Home = () => {
  /**
   * Netlify CMS's accept invite link land on home page.
   * This redirection takes it to the right place(/admin).
   */
  useEffect(() => {
    if (
      window !== undefined &&
      window.location.href.includes("#invite_token")
    ) {
      const { href } = window.location;
      window.location.href = `${href.substring(
        0,
        href.indexOf("#")
      )}admin${href.substring(href.indexOf("#"))}`;
    }
  }, []);

  return (
    <>
      <Container id="banner" fluid as="section" className="jumbotron py-3">
        <Container className="px-md-4 px-sm-4">
          <p>
            <span className="badge me-1 bg-primary">HTML</span>
            <span className="badge me-1 bg-primary">CSS</span>
            <span className="badge me-1 bg-primary">JavaScript</span>
            <span className="badge me-1 bg-primary">Python</span>
            <span className="badge me-1 bg-primary">C#</span>
            <span className="badge me-1 bg-primary">.NET</span>
            <span className="badge bg-primary">Optimizely CMS</span>
          </p>
        </Container>
      </Container>
      <Flashcards dataset={projects}></Flashcards>
    </>
  );
};

export default Home;
