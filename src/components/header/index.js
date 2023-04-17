import React from "react";
import style from './style.module.css';
import { Col, Row, Container, Nav, Image, NavItem } from "react-bootstrap";
// import { Link } from 'preact-router/match';
import Social from "../../components/social-badges";
import { Link } from "react-router-dom";


const Header = () => (
  <>
    <Container as="header" className={style.header}>
      <Row className="align-items-center">
        <Col as="nav" role="navigation" aria-label="main navigation list">
          <Nav as="ul" className="align-items-center">
            <NavItem as="li" className={style.logo}>
              <Nav.Link href="/"><Image src="https://isaiahdavis.com/images/profile-branded.png"
                alt="Profile picture of Isaiah Davis"
                height={64}
                width={64}
              ></Image></Nav.Link>
            </NavItem>
            <Nav.Item as="li"><Nav.Link href="/about">About</Nav.Link></Nav.Item>
            <Nav.Item as="li"><Nav.Link href="/blogs">Blogs</Nav.Link></Nav.Item>
            <Nav.Item as="li"><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>
          </Nav>
        </Col>
        <Social></Social>
      </Row>
      <Row>
        <Col>
          <h1 className="display-6">Visual Designer and Frontend Developer.</h1>
          <p>Currently working at <strong>S&amp;C Electric Company</strong> as a <strong>Frontend Developer</strong>.</p>
        </Col>
      </Row>
    </Container>
  </>
);
export default Header;