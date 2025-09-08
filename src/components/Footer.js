import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo1.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.png";
import navIcon5 from "../assets/img/nav-icon5.svg";
import navIcon6 from "../assets/img/nav-icon6.svg";

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
              <a href="https://www.linkedin.com/in/aadityahq/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/Aadityahq"><img src={navIcon6} alt="Icon" /></a>
              <a href="mailto:aadityahq@gmail.com"><img src={navIcon5} alt="Icon" /></a>
              {/* <a href="https://www.facebook.com/profile.php?id=100010220108216"><img src={navIcon2} alt="Icon" /></a> */}
              <a href="https://www.instagram.com/thisisadityathakur/?hl=en"><img src={navIcon3} alt="Icon" /></a>
              {/* <a href="https://x.com/AdityaTkr07"><img src={navIcon4} alt="Icon" /></a> */}

            </div>
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
