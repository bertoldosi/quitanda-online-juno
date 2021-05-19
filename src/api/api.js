import axios from "axios";

const token = localStorage.getItem("@tokenJuno");

const api = axios.create({
  baseURL: "https://api-juno-integracao.herokuapp.com/juno",
  params: {
    access_token: token,
  },
});

export default api;
