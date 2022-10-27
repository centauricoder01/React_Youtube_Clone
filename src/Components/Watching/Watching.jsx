import React, { useEffect } from "react";
import "./Watching.css";
import {
  ContentCut,
  Download,
  MoreHoriz,
  Reply,
  ThumbDownAlt,
  ThumbUpAlt,
} from "@mui/icons-material";
import { Avatar, Button } from "@mui/material";
import { RightSide } from "..";
import { useState } from "react";
import { FetchingData } from "../ApiCalling/AllApi";

const Watching = () => {
  const [showmore, setShowmore] = useState(false);

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

  let valueofLocalstorage = JSON.parse(localStorage.getItem("showmovie"));

  useEffect(() => {
    getttingData();
  }, []);

  return (
    <div className="watch">
      <div className="watch_wrap">
        <div className="watch_left">
          <iframe
            width="1000"
            height="600"
            src={`https://www.youtube.com/embed/${valueofLocalstorage.VideoID}`}
            title="YouTube video player"
            frameBorder="0"
            // allow="autoplay;"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>

          <div className="watch_leftBtn">
            <h1 className="watch_title">{valueofLocalstorage.Title}</h1>
            <div className="watch_videoInfo">
              {/* VIDEO INFO OF THE PAGE  */}
              <div className="watch_videoInfoLeft">
                <p className="videothumb_text">123vides . 1 Oct 2022</p>
              </div>
              <div className="watch_videoInfoRight">
                <div className="watch_likeContainer">
                  <div className="watch_LikeWrap">
                    {/* LIKE BUTTON OF THE PAGE  */}
                    <div className="watch_likeBtnContainer color__gray">
                      <ThumbUpAlt className="watch_icon" />
                      <p>15k</p>
                    </div>
                    {/* DISLIKE BUTTON  */}
                    <div className="watch_likeBtnContainer color__gray">
                      <ThumbDownAlt className="watch_icon" />
                      <p>15</p>
                    </div>
                  </div>
                  {/* UNDERLINE UNDER LIKE AND DISLIKE  */}
                  <div className="watch_likeDislikes" />
                </div>
                {/* SHARE BUTTON OF THE WEBSITE  */}
                <div className="watch_likeBtnContainer color__gray">
                  <Reply className="watch_icon share_icon" />
                  <p>SHARE</p>
                </div>

                {/* DOWNLOAD BUTTON OF THE WEBSITE  */}
                <div className="watch_likeBtnContainer color__gray">
                  <Download className="watch_icon share_icon play_addIcon" />
                  <p>Download</p>
                </div>

                {/* CONTENT CUT BUTTON OF THE WEBSITE  */}

                <div className="watch_likeBtnContainer color__gray">
                  <ContentCut className="watch_icon share_icon play_addIcon" />
                  <p>Clip</p>
                </div>

                {/* MORE ICON OF THE WEBSITE  */}

                <div className="watch_likeBtnContainer color__gray">
                  <MoreHoriz className="watch_icon share_icon play_addIcon" />
                </div>
              </div>
            </div>
          </div>
          {/* VIDEO DESCRIPTION OF THE WEBSITE  */}

          <div className="watch_Details">
            <div className="watch_detailsContainer">
              <div className="VideoImg_details watch_avatarwrap">
                <Avatar src={valueofLocalstorage.avatar} />
                <div className="VideoImg_channel">
                  <h1 className="VideoImg_title">
                    {valueofLocalstorage.channelName}
                  </h1>

                  <p className="VideoImg_text watch_subCount">
                    10M Subscribers
                  </p>
                </div>
              </div>
              {/* SUBSCRIBER BUTTON OF THE WEBPAGE  */}
              <Button
                className="watch_subBtn"
                color="primary"
                variant="contained"
              >
                SUBSCRIBE
              </Button>
            </div>
            {/* DESCRIPTION PART OF THE WEBSITE  */}
            <div className="watch_description">
              <p
                style={{
                  maxHeight: showmore && "100%",
                }}
              >
                Get free 100$ from Digital Ocean Using This Link -
                https://m.do.co/c/2f2aa100b7ee <br />
                ►TimeStamps: 00:00 <br /> - Introduction to this one video
                course 01:00 <br />
                <br /> - Final Website Demo 05:29 <br /> - Downloading &
                Installing XAMPP 08:40
                <br /> <br /> - Downloading & Installing WordPress 15:36 <br />{" "}
                - Creating Database for our WordPress Site 16:30 <br /> -
                Configuring WordPress 20:46 <br /> - WordPress Dashboard 22:25{" "}
                <br /> - Posts in WordPress 34:29 <br /> - General Settings of
                Wordpress 35:44 <br /> - Themes: Appearance of WordPress Site
                38:05 <br /> - Plugins in WordPress 41:45 <br /> - Downloading
                themes for Wordpress Site 43:25 <br /> - Pages in WordPress
                53:11 <br /> - WordPress Menus 01:03:35 <br /> - Customizing
                WordPress Site 01:13:41 <br /> - Installing new plugins to
                WordPress 01:25:53 <br /> - Creation of Pro Looking Website
                01:30:23 <br /> - Customizing Astra Theme 01:34:43 <br /> -
                Editing Site With Elementor 02:35:47 <br /> - Hosting for site
                02:40:14
                <br /> - Hosting Website Using DigitalOcean 02:47:57 <br /> -
                Domain of Website 02:52:00 <br /> - Configuring WordPress
                Website 03:00:23 <br /> - Why VPS Hosting and Digital Ocean
                03:07:09 <br /> - Final Look of Website 03:07:45 <br /> - Free
                SSL Certificate 03:10:44 <br /> - Where to go from here
                ►Checkout my English channel here:
                https://www.youtube.com/ProgrammingWi... <br /> ►Click here to
                subscribe - https://www.youtube.com/channel/UCeVM... Best Hindi
                Videos For Learning Programming: ►Learn Python In One Video -
                https://www.youtube.com/watch?v=ihk_X... <br />
                ►Python Complete Course In Hindi -
                https://www.youtube.com/playlist?list...
                <br /> ►C Language Complete Course In Hindi -
                https://www.youtube.com/playlist?list...
                <br /> ►JavaScript Complete Course In Hindi -
                https://www.youtube.com/playlist?list...
                <br /> ►Learn JavaScript in One Video -
                https://www.youtube.com/watch?v=onbBV...
                <br /> ►Learn PHP In One Video -
                https://www.youtube.com/watch?v=xW7ro...
                <br /> ►Django Complete Course In Hindi -
                https://www.youtube.com/playlist?list...
                <br /> ►Machine Learning Using Python -
                https://www.youtube.com/playlist?list...
                <br /> ►Creating & Hosting A Website (Tech Blog) Using Python -
                https://www.youtube.com/playlist?list...
                <br /> ►Advanced Python Tutorials -
                https://www.youtube.com/playlist?list...
                <br /> ►Object Oriented Programming In Python -
                https://www.youtube.com/playlist?list...
                <br /> ►Python Data Science and Big Data Tutorials -
                https://www.youtube.com/playlist?list...
                <br /> Follow Me On Social Media ►Website (created using Flask)
                - http://www.nouser.com ►Facebook -
                https://www.facebook.com/nouser <br />
                ►Instagram - https://www.instagram.com/nouser/
                <br /> ►Personal Facebook A/c -
                https://www.facebook.com/geekyharis Twitter -
                https://twitter.com/Haris_Is_Here
              </p>
              <p
                className="watch_showMore"
                onClick={() => setShowmore(!showmore)}
              >
                SHOW {showmore ? "LESS" : "MORE"}
              </p>
            </div>
          </div>
        </div>
        <div className="watch_right">
          {/* Here we will add side bar of the website  */}
          {videos.length > 0
            ? videos.map((elem) => (
                <RightSide
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
    </div>
  );
};

export default Watching;
