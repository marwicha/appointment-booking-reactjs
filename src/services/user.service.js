import axios from "axios";

const API_URL = "http://localhost:8082/api";

const updateAccount = async (id, data) => {
  const token = JSON.parse(localStorage.getItem("token"));

  const response = await axios({
    method: "PUT",
    url: `${API_URL}/compte/${id}`,
    headers: {
      authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
    data: data,
  });

  return response.data;
};

const deleteAccount = async (id) => {
  const token = JSON.parse(localStorage.getItem("token"));

  const response = await axios({
    method: "DELETE",
    url: `${API_URL}/compte/${id}`,
    headers: {
      authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
  });

  return response.data;
};

const getAdminProfile = async () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const response = await axios({
    method: "GET",
    url: API_URL + "/test/admin",
    headers: {
      authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
  });
  return response;
};

export default {
  updateAccount,
  deleteAccount,
  getAdminProfile,
};
