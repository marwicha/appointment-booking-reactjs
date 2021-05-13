import axios from "axios";

const API_URL = "http://localhost:8082/api/formation";

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

const updateFormation = async (id, data) => {
  const response = await axios({
    method: "PUT",
    url: `${API_URL}/formation/update/${id}`,
    headers: {
      authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
    data: data,
  });

  return response.data;
};

export default {
  createFormation,
  getAllFormations,
  deleteFormation,
  updateFormation,
};
