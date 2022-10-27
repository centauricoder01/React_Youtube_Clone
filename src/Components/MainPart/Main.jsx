import React, { useEffect } from "react";
import "./Main.css";
import VideoImg from "./VideoImg";
import { useState } from "react";
import Sidebar from "../SideBar/Sidebar";
import { FetchingData } from "../ApiCalling/AllApi";

const Main = () => {
  const [videos, setVideos] = useState([]);

  const getttingData = () => {
    FetchingData()
      .then((res) => {
        setVideos(res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getttingData();
  }, []);

  return (
    <div className="Main">
      <div className="firstMain">
        <Sidebar />
      </div>
      <div className="secondMain">
        {videos.length > 0
          ? videos.map((elem) => (
              <VideoImg
                key={elem.id}
                thumbnail={elem.snippet.thumbnails.high.url}
                Title={elem.snippet.title}
                channelName={elem.snippet.channelTitle}
                avatar={elem.snippet.thumbnails.high.url}
                VideoID={elem.id}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default Main;
