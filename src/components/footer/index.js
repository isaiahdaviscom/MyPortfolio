import React from "react";
import { Col, Container } from "react-bootstrap";
import style from './style.module.css';

const Footer = () => (
  <footer className={style.footer}>
    <Container as="section" className="copyright">
      <Col>
      <p><small>Copyright &copy; 2022 Isaiah Davis Designs, LLC</small></p>
      </Col>
      <Col>
      <small>Made with React &amp; Bootstrap</small>
      </Col>
    </Container>
  </footer>
);

export default Footer;