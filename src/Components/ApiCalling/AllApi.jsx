import axios from "axios";

export const FetchingData = () => {
  return axios.get`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&key=AIzaSyBzcGk_6G2-f7RCNYcmVN4BC7dgoqF56FI&maxResults=50&regionCode=IN`;
};

export const SettingVideoData = () => {};
