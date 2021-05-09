import axios from "axios";

const API_URL = "http://localhost:8082/api/prestation";

const user = JSON.parse(localStorage.getItem("user"));
const token = JSON.parse(localStorage.getItem("token"));

const createPrestation = (data) => {
  const response = axios({
    method: "POST",
    url: `${API_URL}/create`,
    headers: {
      authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
    data: data,
  });

  return response;
};

const getAllPrestations = async () => {
  const response = await axios({
    method: "GET",
    url: `${API_URL}/all`,
    headers: {
      authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
  });

  return response.data;
};

export default {
  createPrestation,
  getAllPrestations,
};
