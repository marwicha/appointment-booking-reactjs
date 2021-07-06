import axios from "axios";

const API_URL = "https://ikdo-patrick-marwa.herokuapp.com/api/formation";
const API_URL_app = "https://ikdo-patrick-marwa.herokuapp.com/api";
const API_PAY = "https://ikdo-patrick-marwa.herokuapp.com";

const token = JSON.parse(localStorage.getItem("token"));

const createFormation = (data) => {
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

const deleteFormation = async (id) => {
  const response = await axios({
    method: "DELETE",
    url: `${API_URL}/delete/${id}`,
    headers: {
      authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
  });

  return response.data;
};

const getAllFormations = async () => {
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

const getAllAppointments = async () => {
  const response = await axios({
    method: "GET",
    url: `${API_URL_app}/getAll`,
    headers: {
      authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
  });

  return response.data;
};

export default {
  createFormation,
  getAllFormations,
  deleteFormation,
  getAllAppointments,
};
