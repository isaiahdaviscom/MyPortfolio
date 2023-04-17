import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
// import ProjectList from '../../helpers/projects';


function Projects() {
  const { id } = useParams();
  console.log(id)
  return (
    <Container as="section">
      <Row>
        <Col>
          <h1>{id}</h1>
          specific project
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>Related Projects</h3>
          <p>Projects that are related to this project</p>
        </Col>
      </Row>
      <Container as="section">
        <Row>
          <Col>
            <Card.Link>
              <Card.Body>
                <Card.Title>Previous</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card.Link>
          </Col>
          <Col>
            <Card.Link>
              <Card.Body>
                <Card.Title>Previous</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card.Link>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects;