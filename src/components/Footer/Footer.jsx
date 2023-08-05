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
          <img src={Github} alt="" />
          <img src={Insta} alt="" />
          <img src={Linkedin} alt="" />
        </div>
        <Link to="Home" smooth={true} duration={1000}>
          <div className="logo-f">
            <img src={Logo} alt="" style={{ cursor: "pointer" }} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
