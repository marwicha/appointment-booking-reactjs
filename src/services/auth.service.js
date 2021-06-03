import axios from "axios";

const API_URL = "https://ikdo-patrick-marwa.herokuapp.com/api/auth/";

const register = (name, phone, email, password) => {
  return axios.post(API_URL + "signup", {
    name,
    phone,
    email,
    password,
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "signin", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
        localStorage.setItem(
          "token",
          JSON.stringify(response.data.accessToken)
        );
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
};
