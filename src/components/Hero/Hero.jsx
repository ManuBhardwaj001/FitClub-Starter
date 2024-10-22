import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";
import Header from "../Header/Header";

const Hero = () => {
  const [userName, setUserName] = useState(null);
  const history = useNavigate();

  useEffect(() => {
    const name = localStorage.getItem('userName');
    if (name) {
      setUserName(name);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userName'); // Remove user name from local storage
    setUserName(null); // Clear user name state
    history('/login'); // Redirect to the login page
  };

  const transition = { type: "tween", duration: 2 };
  const mobile = window.innerWidth <= 768 ? true : false;

  return (
    <div className="hero" id="Home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "160" : "238" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>the best fitness club in the town</span>
        </div>

        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>

        <div className="figures">
          <div>
            <span>
              <NumberCounter end={120} start={100} delay="2" preFix="+" />
            </span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>
              <NumberCounter end={1800} start={1700} delay="2" preFix="+" />
            </span>
            <span>members joined</span>
          </div>
          <div>
            <span>
              <NumberCounter end={50} start={15} delay="2" preFix="+" />
            </span>
            <span>Fitness programs</span>
          </div>
        </div>

        <div className="hero-buttons">
          {!userName ? (
            <button className="btn">
              <Link to='/login'>Login</Link>
            </button>
          ) : (
            <div>
              <h3>Welcome, {userName}!</h3>
              <button className="btn" onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      </div>
      <div className="right-h">
        <motion.div
          transition={{ ...transition, type: "tween" }}
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          className="heart-rate"
        >
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>110 BPM</span>
        </motion.div>

        <img src={hero_image} alt="" className="hero-image" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src={hero_image_back}
          alt=""
          className="hero-image-back"
        />

        <motion.div
          initial={{ right: "25rem" }}
          whileInView={{ right: "30rem" }}
          transition={{ ...transition, type: "tween", time: 2 }}
          className="calories"
        >
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burnt</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
