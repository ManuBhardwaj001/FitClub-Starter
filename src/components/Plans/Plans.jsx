import React from "react";
import { useEffect } from "react";
import "./Plans.css";
import whiteTick from "../../assets/whiteTick.png";
import { plansData } from "../../data/plansData";
const Plans = () => {
  useEffect(() => {
    const third = document.getElementsByClassName("plan-2")[0];
    const second = document.getElementsByClassName("plan-1")[0];
    third.addEventListener("mouseleave", () => dehighlightThird(second, third));
    third.addEventListener("mouseenter", () => highlightThird(second, third));
  }, []);

  const highlightThird = (second, third) => {
    second.style.background = "#656565";
    second.style.transform = "scale(1)";

    third.style.background =
      "linear-gradient(210.41deg,#fa5042 1.14%,#ffa739 100.75%)";
    third.style.transition = "background-color 0.3s, transform 0.3s";
    third.style.transform = "scale(1.1)";
  };

  const dehighlightThird = (second, third) => {
    second.style.background =
      "linear-gradient(210.41deg,#fa5042 1.14%,#ffa739 100.75%)";
    second.style.transition = "background-color 0.3s, transform 0.3s";
    second.style.transform = "scale(1.1)";

    third.style.background = "#656565";
    third.style.transform = "scale(1)";
  };

  return (
    <div className="plans-container" id="Plans">
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>
      <div className="programs-header" style={{ gap: "2rem" }}>
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">WITH US</span>
      </div>
      <div className="plans">
        {plansData.map((plan, i) => (
          <div className={"plan plan-" + i} key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>₹{plan.price}</span>
            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature" key={i}>
                  <img src={whiteTick} alt="" />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span>Checkout more benefits -{">"}</span>
            </div>
            <button className="btn">Join now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
