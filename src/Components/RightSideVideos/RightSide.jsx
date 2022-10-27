import React from "react";
import "./RightSide.css";
import { useNavigate } from "react-router-dom";

const RightSide = ({ thumbnail, Title, channelName, avatar, VideoID }) => {
  const Navigaters = useNavigate();
  const Imgredirect = () => {
    Navigaters("/watch");
  };

  return (
    <div className="RightSide">
      <div
        className="Rightside_left"
        onClick={() => {
          let obj = {
            thumbnail,
            Title,
            channelName,
            avatar,
            VideoID,
          };

          console.log(VideoID);
          localStorage.setItem("showmovie", JSON.stringify(obj));
          Navigaters("/watch");
        }}
      >
        <img
          onClick={Imgredirect}
          src={thumbnail}
          alt="Rocket"
          className="RightSide_thumbnail"
        />
      </div>
      <div className="RightSide_right">
        <p className="RightSide_title">{Title}</p>
        <div className="RightSide_texts">
          <p className="RightSide_text">{channelName}</p>
          <p className="RightSide_text">110k views . 3 days ago</p>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
