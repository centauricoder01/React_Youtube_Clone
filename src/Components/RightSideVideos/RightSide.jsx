import React from "react";
import "./RightSide.css";
import { useNavigate } from "react-router-dom";

const RightSide = () => {
  const Navigaters = useNavigate();
  const Imgredirect = () => {
    Navigaters("/watch");
  };

  return (
    <div className="RightSide">
      <div className="Rightside_left">
        <img
          onClick={Imgredirect}
          src="https://images.livemint.com/img/2022/10/22/600x338/LVM3-MII_1666469421488_1666469808603_1666469808603.jpg"
          alt="Rocket"
          className="RightSide_thumbnail"
        />
      </div>
      <div className="RightSide_right">
        <p className="RightSide_title">Space Rocket websire has to done.</p>
        <div className="RightSide_texts">
          <p className="RightSide_text">Raju Patel videos</p>
          <p className="RightSide_text">110k views . 3days ago</p>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
