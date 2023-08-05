import React from "react";
import "./Footer.css";
import Github from "../../assets/github.png";
import Insta from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";
import Logo from "../../assets/logo.svg";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="social">
          <a href="https://github.com/ManuBhardwaj001">
            <img className="git" src={Github} alt="" />
          </a>
          <img src={Insta} alt="" />
          <a href="https://www.linkedin.com/in/manu-bhardwaj-467290282">
            <img className="linkedin" src={Linkedin} alt="" />
          </a>
        </div>
        <Link to="Home" smooth={true} duration={1000}>
          <div className="logo-f">
            <img src={Logo} alt="" style={{ cursor: "pointer" }} />
          </div>
        </Link>
        <div className="copyright">
          <a href="/">
            <span className="term">Terms and Conditions </span>
          </a>
          <span className="pipe">|</span>
          <a href="/">
            <span className="copy" style={{ marginLeft: "4px" }}>
              © 2023, Fitness Freaks, by Manu Bhardwaj
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
