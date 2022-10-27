import React from "react";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";

const VideoImg = ({ thumbnail, Title, channelName, avatar, VideoID }) => {
  const Navigaters = useNavigate();
  const Imgredirect = () => {
    Navigaters("/watch");
  };

  return (
    <div
      className="VideoImg"
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
      }}
    >
      <img
        onClick={Imgredirect}
        className="VideoImg_thumbNail"
        src={thumbnail}
        alt="thumbnail"
      />
      <div className="VideoImg_details">
        <Avatar
          src={avatar}
          style={{
            marginTop: "7px",
          }}
        />
        <div className="VideoImg_channel">
          <h1 className="VideoImg_title">{Title}</h1>
          <div className="VideoImg_texts">
            <p className="VideoImg_text">{channelName}</p>
            <p className="VideoImg_text">123 Views . 10 hours ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoImg;
