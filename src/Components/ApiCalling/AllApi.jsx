import axios from "axios";

export const FetchingData = () => {
  return axios.get`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&key=AIzaSyB9XbyPZGtnp09wESePbsQ2lAvrUEMM_t4&maxResults=50&regionCode=IN`;
};

export const SettingVideoData = () => {};
