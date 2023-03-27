import axios from "axios";

export const FetchingData = () => {
  return axios.get`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&key=AIzaSyBWuaDNXvXZisZwd5oSqrY4fJQvLM2T05k&maxResults=40&regionCode=IN`;
};

export const SettingVideoData = () => {};
