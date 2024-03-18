import style from './style.module.css';
import { Col, Row, Container, Nav, Image, NavItem, Form, InputGroup } from "react-bootstrap";
import { Link } from 'react-router-dom';
import OnlineStatusIndicator from "../onlineStatusIndicator";
import Social from "../socialBadges";

type Props = {
  className?: string;
};

const Header = (props: Props) => (
  <Container fluid as="header" className={`${props.className} sticky-top`}>
    <a className="btn btn-primary jumplink position-absolute z-1" href="#main-content"><small>Skip to Main</small></a>
    <Container as="section" >
      <Row className="align-items-center">
        <Col as="nav" role="navigation" aria-label="main navigation list" className='col-sm-3'>
          <Nav variant="pills"  as="ul" className="align-items-center">
            <NavItem as="li" className={style.logo} aria-label="My homepage" onClick={() => { console.log('clicked on image') }}>
              {/* <Nav.Link as={Link} to="/"> */}
                <div className={style.image_inner_container}>
                  <Image className='align-top skeleton' src="/images/profile-branded.png"
                    alt="Profile picture of Isaiah Davis"
                    height={64}
                    width={64}
                  ></Image>
                  <div className={style.green_icon}></div>
                  <OnlineStatusIndicator></OnlineStatusIndicator>
                </div>
              {/* </Nav.Link> */}
            </NavItem>
            <Nav.Item as="li" className='screen-only mx-1'>
              <Nav.Link className="text" as={Link} to="/" aria-label="Homepage" >Home</Nav.Link>
            </Nav.Item>
            {/* <Nav.Item as="li" className='screen-only mx-1'>
              <Nav.Link className="text"  as={Link} to="/blogs" aria-label="Read some of my blog articles" >Blogs</Nav.Link>
            </Nav.Item> */}
          </Nav>
        </Col>
        {/* <div className="my-3 px-0 vr"></div> */}
        {/* <Col className={`${style.search_container} screen-only`} as="section">
          // <Form>
          //   <InputGroup>
          //     <Form.Control
          //       type="search"
          //       placeholder="Search"
          //       aria-label="Search"
          //       aria-describedby="search-icon"
          //     />
          //     <InputGroup.Text id="search-icon">
          //       <img aria-label="Search" width={24} height={24} src='public/vendors/fontawesome/search-solid.svg'/>
          //     </InputGroup.Text>
          //   </InputGroup>
          // </Form>
        </Col> */}
        {/* <div className="my-3 px-0 vr"></div> */}
        <Social></Social>
      </Row>
    </Container>
  </Container>
);
export default Header;