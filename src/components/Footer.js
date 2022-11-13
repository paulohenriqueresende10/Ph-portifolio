import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/paulo-henrique-santos-resende-4b9726202/" target="_blank"><img src={navIcon1} alt="linkedin" /></a>
              <a href="https://www.facebook.com/paulohenrique.santosresende" target="_blank"><img src={navIcon2} alt="facebook" /></a>
              <a href="https://www.instagram.com/paulohsresende/" target="_blank"><img src={navIcon3} alt="Instagram" /></a>
            </div>
            <p>Copyright 2022. Todos direitos reservados a Paulo Henrique®</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
