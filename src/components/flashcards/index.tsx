import { Badge, Card, Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from './style.module.css';

const calculateTimeDifference = (startTime: string, endTime: string): string => {
  const startDateParts = startTime.split(' ');
  const startDate = new Date(`${startDateParts[0]} 01 ${startDateParts[1]}`);

  let endDate;
  if (endTime.toLowerCase() === 'present') {
    endDate = new Date(); // use the current date if end date is "Present"
  } else {
    const endDateParts = endTime.split(' ');
    endDate = new Date(`${endDateParts[0]} 01 ${endDateParts[1]}`);
  }

  const totalMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12 + endDate.getMonth() - startDate.getMonth();

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  return `${years} years ${months} months`;
};

/**
 * @type object
 * @property {string} props.className - class name of row
 * @property {string} props.children - children of row
 * @returns {JSX.Element} - returns a row
 * @description - creates a row
 * @example
 * <Row className="py-3">
 * <Col className="py-3">
 * <FlashcardTitle>Project 1</FlashcardTitle>
 * </Col>
 * </Row>
*/
interface Props {
  className?: string;
  children: React.ReactNode;
}

const Row = ({ className = '', children, ...otherProps }: Props) => {
  return (
    <div className={`row ${className}`} {...otherProps}>
      {children}
    </div>
  );
}

Row.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

Row.defaultProps = {
  className: ''
};

const Col = ({ className = '', children, ...otherProps }: Props) => {
  return (
    <div className={`${className}`} {...otherProps}>
      {children}
    </div>
  );
}

Col.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

Col.defaultProps = {
  className: ''
};

Col.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

Col.defaultProps = {
  className: ''
};

/**
 * @param {*} props
 * @type string
 * @property {string} props.children - title of flashcard
 * @returns {JSX.Element} - returns a flashcard title
 * @description - creates a flashcard title
 * @example
 * <FlashcardTitle>Project 1</FlashcardTitle>
*/
function FlashcardTitle(props: { children: string; }): JSX.Element {
  return (
    <h3 className="card-title display-6">{props.children}</h3>
  );
}

/**
 *
 * @param {*} props
 * @type object
 * @property {Object} props.data - data used to create flashcard
 * @property {string} props.data.id - id of flashcard
 * @property {string} props.data.uid - uid of flashcard
 * @property {string} props.data.title - title of flashcard
 * @property {string} props.data.tag - tag of flashcard
 * @property {string} props.data.description - description of flashcard
 * @property {Object} props.data.images - images of flashcard
 * @property {string} props.data.link - link of flashcard
 * @property {string} props.data.parentClasses - parentClasses of flashcard
 * @returns {JSX.Element} - returns a flashcard
 * @description - creates a flashcard
 * @example
 * <Flashcard
 * data={{
 * id: '1',
 * uid: '1',
 * title: 'Project 1',
 * tag: 'UX Design',
 * description: 'This is a project',
 * images: {
 * small: 'https://via.placeholder.com/310x310',
 * medium: 'https://via.placeholder.com/390x390',
 * large: 'https://via.placeholder.com/768x768',
 * original: 'https://via.placeholder.com/354x354'
 * },
 * link: 'https://via.placeholder.com/354x354',
 * parentClasses: 'col-md-4 col-sm-6'
 * }}
 * /> 
 */

function Flashcard(props: any): JSX.Element {
  const { id, uid, title, tag, description, images, link, parentClasses, time, viewLive, viewCode }: any = props.data;
  // console.log(props.data);
  return (
    <Col className="cards mb-4">
      {/* <a href={`${link}`}> */}
      <Link
        to={`/projects/${uid}`}
        state={
          {
            id: id,
            uid: uid,
            title: title,
            tag: tag,
            description: description,
            images: images,
            link: link,
            parentClasses: parentClasses,
            time: time,
            viewLive: viewLive,
            viewCode: viewCode
          }
        }
      >
        <Card key={id} id={uid} className={`overflow-hidden ${parentClasses} ${style.skeleton}`}>
          <picture>
            <source srcSet={images.small} media="(max-width: 310px)"></source>
            <source srcSet={images.medium} media="(max-width: 390px)"></source>
            <source srcSet={images.large} media="(max-width: 768px)"></source>
            <source srcSet={images.print} media="print"></source>
            <Card.Img
              variant="top"
              src={images.original}
              alt={`${title} cover image.`}
              height={354}
              width={354}
              className='d-block mw-100 w-100 h-auto card-img'>
            </Card.Img>
          </picture>
          <Card.ImgOverlay>
            <Badge bg="primary">{tag}</Badge>{" "}
            <Card.Title as={FlashcardTitle}>{title}</Card.Title>
            <Card.Text>{time.start} &mdash; {time.end} <span className="print-only">({calculateTimeDifference(time.start, time.end)})</span></Card.Text>
            <Card.Text className="print-only">{description}</Card.Text>
          </Card.ImgOverlay>
        </Card>
      </Link>
      {/* </a> */}
    </Col>);
}
/**
 *
 * @param {*} props
 * @type object, array
 * @property {Object} props.dataset - data used to create slideshow
 * @property {Array} props.dataset.projects - data used to create slideshow
 * @returns {JSX.Element} - returns a slideshow
 * @description - creates a slideshow
 * @example
 * <Flashcards
 * dataset={{
 * projects: [
 * {
 * id: '1',
 * uid: '1',
 * title: 'Project 1',
 * tag: 'UX Design',
 * description: 'This is a project',
 * images: {
 * small: 'https://via.placeholder.com/310x310',
 * medium: 'https://via.placeholder.com/390x390',
 * large: 'https://via.placeholder.com/768x768',
 * original: 'https://via.placeholder.com/354x354'
 * },
 * link: 'https://via.placeholder.com/354x354',
 * parentClasses: 'col-md-4 col-sm-6'
 * }, ...]}} />
 */
function Flashcards(props: { dataset: { projects: any; }; }): JSX.Element {
  const { projects } = props.dataset;
  return (
    <section id="flashcards" aria-label="A list of projects">
      <Container>
        <Row className={`${style["grid-cols-sm-up-3"]}`}>
          {projects.map((project: any, index: any) => {
            return <Flashcard key={index} data={project}></Flashcard>;
          })}
        </Row>
      </Container>
    </section>
  );
}

export default Flashcards;
