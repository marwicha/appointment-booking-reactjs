import axios from "axios";

const API_URL = "http://localhost:5000/api/appointment";
const API_PAY = "https://ikdo-patrick-marwa.herokuapp.com";

const token = JSON.parse(localStorage.getItem("token"));
const user = JSON.parse(localStorage.getItem("user"));

const createAppointment = (data) => {
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

const getAllAppointments = async () => {
  const response = await axios({
    method: "GET",
    url: `${API_URL}/all`,
  });

  return response.data;
};

const getUserAppointments = async () => {
  const response = await axios({
    method: "GET",
    url: `${API_URL}/${user.id}`,
    headers: {
      authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
  });

  return response.data;
};

const deleteAppointment = async (id) => {
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

const payment = async (data) => {
  const response = await axios({
    method: "POST",
    url: `${API_PAY}/create_payment_intent`,
    headers: {
      authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
    data: JSON.stringify(data),
  });

  return response.data;
};

export default {
  createAppointment,
  getUserAppointments,
  getAllAppointments,
  deleteAppointment,
  payment,
};
