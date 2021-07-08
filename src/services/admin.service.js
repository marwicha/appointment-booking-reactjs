import axios from "axios";

const API_URL = "https://ikdo-patrick-marwa.herokuapp.com/api/admin";

const token = JSON.parse(localStorage.getItem("token"));

const createFormation = (data) => {
  const response = axios({
    method: "POST",
    url: `${API_URL}/formation/create`,
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
    url: `${API_URL}/formation/delete/${id}`,
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
    url: `${API_URL}/formation/all`,
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
    url: `${API_URL}/appointment/getAll`,
    headers: {
      authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
  });

  return response.data;
};

//to cancel appointment annule = true
const updateAppointmentByAdmin = async (id, data) => {
  const response = await axios({
    method: "PUT",
    url: `${API_URL}/appointment/cancel/${id}`,
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
  getAllAppointments,
  updateAppointmentByAdmin,
};
