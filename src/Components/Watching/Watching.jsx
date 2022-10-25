import React from "react";
import "./Watching.css";
import VideoURL from "../../assets/videos/video.mp4";
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

const Watching = () => {
  return (
    <div className="watch">
      <div className="watch_wrap">
        <div className="watch_left">
          <video className="watch_video" autoPlay controls>
            <source src={VideoURL} type="video/mp4" />
          </video>

          <div className="watch_leftBtn">
            <h1 className="watch_title">Amazon Prime Video trailer</h1>
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
                <Avatar />
                <div className="VideoImg_channel">
                  <h1 className="VideoImg_title">Prime Videos</h1>

                  <p className="VideoImg_text watch_subCount">10M Subl</p>
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
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
                veniam quae enim veritatis, suscipit temporibus et beatae hic,
                nulla repudiandae nam nobis autem, voluptatem omnis eveniet
                excepturi animi tenetur quaerat!
              </p>
              <p className="watch_showMore">SHOW MORE</p>
            </div>
          </div>
        </div>
        <div className="watch_right">
          {/* Here we will add side bar of the website  */}
          <RightSide />
          <RightSide />
          <RightSide />
          <RightSide />
          <RightSide />
          <RightSide />
          <RightSide />
          <RightSide />
          <RightSide />
          <RightSide />
          <RightSide />
          <RightSide />
          <RightSide />
          <RightSide />
          <RightSide />
          <RightSide />
          <RightSide />
        </div>
      </div>
    </div>
  );
};

export default Watching;
