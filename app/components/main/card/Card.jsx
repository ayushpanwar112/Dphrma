"use client";
import React, { useEffect } from "react";
import Typed from "typed.js";
import "./card.css";

const Card = () => {
  useEffect(() => {
    const options = {
      strings: ["Great design is invisible"],
      typeSpeed: 20,
      backSpeed: 30,
      loop: true,
    };

    const typed = new Typed(".element", options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="card_area">
      <div className="card_left">
        <div className="card_left_cont">
          <h2 className="heading">
            <span className="element" />{" "}
            {/* This span will display the typing effect */}
          </h2>
          <h2 className="sub_heading_txt">
            Lorem ipsum dolor sit amet consectetur
          </h2>
          <button className="card_btn">Button</button>
        </div>
      </div>
      <div className="card_right">Card Right</div>
    </div>
  );
};

export default Card;
