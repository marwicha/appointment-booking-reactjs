import axios from "axios";

const API_URL = "https://ikdo-patrick-marwa.herokuapp.com/api";

const token = JSON.parse(localStorage.getItem("token"));

const updateAccount = async (id, data) => {
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
