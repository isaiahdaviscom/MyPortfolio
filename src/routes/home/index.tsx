// React
import { useEffect } from "react";
// import style from "./style.module.css";
// Bootstrap
import { Container, Row, Col } from "react-bootstrap";
import Flashcards from "../../components/flashcards";
import projects from "../../helpers/projectlist.json";

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
      <Container id="introduction">
        <Row style={{
          padding: "2rem 0"
        }}>
          <Col>
            <h1 className="display-6 col-9">Hi, I'm Isaiah Davis, a <em className="border-bottom border-2">designer</em>, <em className="border-bottom border-2">developer</em>, and <em className="border-bottom border-2">craftsman</em>.</h1>
            <h2><small>Currently based in Chicago, IL</small></h2>
            <div id="summary" className="d-none d-print-block">
              <h3 className="h6">Summary</h3>
              <p>I am a Frontend Developer at S&C Electric Company, a global leader in power generation and distribution. I haveover eight years of experience in graphic design and web development, creating compelling and consistent brandidentities for diverse clients across various industries. I am certified in React.js, a modern web framework thatenables me to build dynamic and responsive web applications with high performance and scalability.</p>
              <p>My core competencies include HTML5, CSS3, JavaScript, jQuery, and Adobe Suite. I collaborate with cross-functional teams to develop web pages, landing pages, and social media campaigns that align with the company'svision and goals. I also conduct generative research, create multimedia content, and implement projectmanagement tools to ensure quality and efficiency. I am passionate about staying abreast of new marketingtechnologies and sharing tools and knowledge to help companies reach their marketing potential.</p>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="d-none d-print-block">
        <h3 className="h6">Experience </h3>
      </div>
      <Flashcards dataset={projects}></Flashcards>
    </>
  );
};

export default Home;
