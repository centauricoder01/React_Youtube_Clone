import React from "react";
import "./Main.css";
import VideoImg from "./VideoImg";
import axios from "axios";
import { useState } from "react";
const Main = () => {
  const myApi = "AIzaSyCB2mNrCGdF_dGHVIMqz6C0ROLxic_dOr8";

  const [videos, setVideos] = useState([]);

  const FetchingData = () => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&key=AIzaSyBWuaDNXvXZisZwd5oSqrY4fJQvLM2T05k&maxResults=50&regionCode=IN`
      )
      .then((res) => {
        setVideos(res.data.items);
        console.log(res.data.items[0].snippet.title);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  FetchingData();

  return (
    <div className="Main">
      {videos.length > 0
        ? videos.map((elem) => (
            <VideoImg
              key={elem.id}
              thumbnail={elem.snippet.thumbnails.high.url}
              Title={elem.snippet.title}
              channelName={elem.snippet.channelTitle}
              avatar={elem.snippet.thumbnails.high.url}
            />
          ))
        : null}
    </div>
  );
};

export default Main;
