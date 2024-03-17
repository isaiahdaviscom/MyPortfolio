import { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Badge } from 'react-bootstrap';
// import { useParams, useLocation } from 'react-router-dom';
import style from './style.module.css';
// import ProjectList from '../../helpers/projectlist.json';
type Props = {
  id?: string;
  uid?: string;
  title?: string;
  description?: string;
  tag?: string;
  images?: any;
  url?: string;
  code?: string;
  status?: string;
  date?: string;
  link?: string;
  viewLive?: string;
  viewCode?: string;
};
function JumbotronComponent(props: Props) {
  const { title, description, link, images, viewLive, viewCode, tag } = props;
  const [showIframe, setShowIframe] = useState(false);
  const figmaEmbedURL = link; // Replace with your Figma embed URL

  return (
    <div>
      <h1 className='display-4'>{title}</h1>
      <Badge bg="primary">{tag}</Badge>{" "}
      <p>{description}</p>
      <div className={`jumbotron rounded overflow-hidden position-relative ${style.preview}`}>
        <Card>
          {!showIframe ? (
            <>
              <picture>
                <Card.Img variant="top" src={images.landscape} />
              </picture>
              <Card.ImgOverlay>
                <Card.Body className={style.figmaCardBody}>
                  {/* <Card.Title as="h1" className='display-4'></Card.Title> */}
                  {/* <Card.Text></Card.Text> */}
                  {!showIframe && (
                    <button className="btn btn-primary btn-lg" onClick={() => setShowIframe(true)}>
                      View Figma Designs
                    </button>
                  )}
                </Card.Body>
              </Card.ImgOverlay>
            </>
          ) : (
            <>
              <iframe
                title="Figma Embed"
                src={figmaEmbedURL}
                height={1920}
                width={1080}
                className={`${style.preview}`}
                allowFullScreen
              ></iframe>
            </>
          )}
        </Card>
        
      </div>
        {
          viewLive && (
            <a href={viewLive} target='_blank' rel='noopener' className='btn btn-primary btn-lg'>View Live</a>
          )
        }
        {
          viewCode && (
            <a href={viewCode} target='_blank' rel='noopener' className='btn btn-primary btn-lg'>View Code</a>
          )
        }
    </div>
  );
}

function Projects() {
  // const { id } = useParams();

  const location = useLocation();
  const data = location.state;
  console.log(data)
  return (
    <Container as="section">
      <Helmet>
        <title>{`My Portfolio - ${data.title}`}</title>
      </Helmet>
      <Row>
        <Col>
          <JumbotronComponent {...data} />
        </Col>
      </Row>
    </Container>
  )
}

export default Projects;