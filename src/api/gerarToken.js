import api from "../api/api";

async function gerarToken() {
  await api
    .post("/token")
    .then((response) => {
      console.log(response.data);
      localStorage.setItem("@tokenJuno", response.data);
    })
    .catch((erro) => {
      console.log(erro);
    });
}

export default gerarToken;
