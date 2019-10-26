import axios from "axios";

const KEY = "AIzaSyC63Hllk-VuOGhScb44WRHLC5aQisct6LE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
