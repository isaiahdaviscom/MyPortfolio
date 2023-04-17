import React from "react";
import { Badge, Card, Col, Container, Row } from "react-bootstrap";
import style from './style.module.css';


/**
 * 
 * @param {*} prop 
 */
function Flashcard(props: {
  data: {
    id: any;
    uid: any;
    title: any;
    tag: string;
    description: any;
    images: any;
  };
}): JSX.Element {
  const { id, uid, title, tag, description, images } = props.data;
  console.log(`/projects/${uid}`);
  return (
    <Col>
      <a href={`/projects/${uid}`}>
        <Card key={id} id={uid}>
          <picture>
            <source srcSet={images.small} media="(max-width: 310px)"></source>
            <source srcSet={images.medium} media="(max-width: 390px)"></source>
            <source srcSet={images.large} media="(max-width: 768px)"></source>
            <Card.Img
              variant="top"
              src={images.original}
              alt="cat"
              height={311}
              width={622}
              className={style.cardImage}>
            </Card.Img>
          </picture>
          <Card.Body>
            <Badge bg="primary">{tag}</Badge>{" "}
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              {id}{description}
            </Card.Text>
          </Card.Body>
        </Card>
      </a>
    </Col>);
}
/**
 *
 * @param {*} props
 * @type object, array
 * @description - data used to create slideshow
 */
function Flashcards(props: { dataset: { projects: any; }; }): JSX.Element {
  const { projects } = props.dataset;
  return (
    <Container id="flashcards" fluid as="section" className="bg-light">
      <Container>
        <Row xs={1} md={3} className="g-4 m-0">
          {projects.map((project: any, index: any) => {
            return <Flashcard key={index} data={project}></Flashcard>;
          })}
        </Row>
      </Container>
    </Container>
  );
}

export default Flashcards;
