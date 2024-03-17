import { Col, Container, Row } from "react-bootstrap";
import style from './style.module.css';
import reactLogo from '/react.svg';
import viteLogo from '/vite.svg';
import bootstrapLogo from '/bootstrap.svg';
const Footer = () => {
  return (
    <footer className={style.footer}>
      <a className="btn btn-primary jumplink" href="#main-content">Skip to Top</a>
      <Container as="section" className="copyright">
        <Row>
          <Col>
            <p><small>Copyright &copy; 2023 Isaiah Davis Designs, LLC <br />Version 2.0.0</small></p>
          </Col>
          <Col className="align-items-center overflow-hidden d-flex justify-content-end">
            <small>Made with</small>
            <div>
              <a rel='noopener' href="https://vitejs.dev" target="_blank">
                <img src={viteLogo} className="logo" width={96} height={96} alt="Vite logo" />
              </a>
              <a rel='noopener' href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo" width={96} height={96} alt="React logo" />
              </a>
              <a rel='noopener' href="https://react.dev" target="_blank">
                <img src={bootstrapLogo} className="logo" width={96} height={96} alt="React logo" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;