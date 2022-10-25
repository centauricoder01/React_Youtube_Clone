import React from "react";
import {
  Home,
  Subscriptions,
  Whatshot,
  VideoLibrary,
  Restore,
  OndemandVideo,
  WatchLater,
} from "@mui/icons-material";
import "./Sidebar.css";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const Navigaters = useNavigate();

  const HomeRedirect = () => {
    console.log("werwerwer");
    Navigaters("/");
  };
  return (
    <div className="Sidebar">
      {/* TOP SIDE BAR OF THE WEBSITE  */}

      <div className="Sidebar_buttons">
        <div className="Sidebar_btn active">
          <Home className="Sidebar_icon" onClick={HomeRedirect} />
          <p>Home</p>
        </div>

        <div className="Sidebar_btn">
          <Whatshot className="Sidebar_icon" />
          <p>Trending</p>
        </div>

        <div className="Sidebar_btn">
          <Subscriptions className="Sidebar_icon" />
          <p>Subscriptions</p>
        </div>
      </div>

      {/* BOTTON SIDEBAR BUTTON OF THE WEBSITE  */}

      <div className="Sidebar_button bottom">
        <div className="Sidebar_btn">
          <VideoLibrary className="Sidebar_icon" />
          <p>Library</p>
        </div>

        <div className="Sidebar_btn">
          <Restore className="Sidebar_icon" />
          <p>History</p>
        </div>

        <div className="Sidebar_btn">
          <OndemandVideo className="Sidebar_icon" />
          <p>Your Videos</p>
        </div>

        <div className="Sidebar_btn">
          <WatchLater className="Sidebar_icon" />
          <p>Watch Later</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
