// React
import React, { useEffect } from "react";
import style from "./style.module.css";
// Bootstrap
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// Custom
import Social from "../../components/social-badges";
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
    <div className={style.home}>
      <main>
        <section>
          <Container>
            <h2 className="display-4">
              Hi, I’m a <a href="">UX/UI Designer</a> and{" "}
              <a href="">Frontend Developer</a>
            </h2>
            <p>Currently living in Chicago, IL</p>
            <p>Available for freelance starting in Q4 2022</p>
            {/* <Slides data={Projects.projects}></Slides> */}
          </Container>
        </section>
        <section className="bg-light">
          <Container>
            <Row xs={1} md={2} className="g-4 m-0">
              <a href="">
                <Col>
                  <Card>
                    <Card.Img variant="top" src=""></Card.Img>
                    <Card.Body>
                      <Card.Title>S&amp;C Electric Company</Card.Title>
                      <Card.Text>
                        A global provider of equipment and services for electric
                        power systems.
                      </Card.Text>
                      <Badge bg="primary">UX/UI Design</Badge>{" "}
                      <Badge bg="primary">Web Design</Badge>{" "}
                      <Badge bg="primary">Frontend Development</Badge>{" "}
                    </Card.Body>
                  </Card>
                </Col>
              </a>
              <a href="">
                <Col>
                  <Card>
                    <Card.Img variant="top" src=""></Card.Img>
                    <Card.Body>
                      <Card.Title>IGA</Card.Title>
                      <Card.Text>This is the card.</Card.Text>
                      <Badge bg="primary">UX/UI Design</Badge>{" "}
                      <Badge bg="primary">Web Design</Badge>{" "}
                      <Badge bg="primary">Frontend Development</Badge>{" "}
                    </Card.Body>
                  </Card>
                </Col>
              </a>
              <a href="">
                <Col>
                  <Card>
                    <Card.Img variant="top" src=""></Card.Img>
                    <Card.Body>
                      <Card.Title>Shopify</Card.Title>
                      <Card.Text>This is the card.</Card.Text>
                      <Badge bg="primary">UX/UI Design</Badge>{" "}
                      <Badge bg="primary">Web Design</Badge>{" "}
                      <Badge bg="primary">Frontend Development</Badge>{" "}
                    </Card.Body>
                  </Card>
                </Col>
              </a>
            </Row>
          </Container>
        </section>
      </main>
      <footer>
        <Container>
          <Row>
            <Col>
              <Social></Social>
            </Col>
          </Row>
          <small>Made with Bootstrap</small>
        </Container>
      </footer>
    </div>
  );
};

export default Home;
