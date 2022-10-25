import React from "react";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";

const VideoImg = () => {
  const Navigaters = useNavigate();
  const Imgredirect = () => {
    Navigaters("/watch");
  };
  const AvatarRedirct = () => {
    Navigaters("/previewchannel");
  };

  return (
    <div className="VideoImg">
      <img
        onClick={Imgredirect}
        className="VideoImg_thumbNail"
        src="https://parispeaceforum.org/wp-content/uploads/2021/10/NET-ZERO-SPACE-INITIATIVE-1.png"
        alt="thumbnail"
      />
      <div className="VideoImg_details">
        <Avatar onClick={AvatarRedirct} />
        <div className="VideoImg_channel">
          <h1 className="VideoImg_title">
            Create Your own Youtube like website
          </h1>
          <div className="VideoImg_texts">
            <p className="VideoImg_text">Rajendra Patel</p>
            <p className="VideoImg_text">123 Views . 10 hours ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoImg;
