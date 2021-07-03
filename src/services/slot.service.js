import axios from "axios";

const API_URL = "https://ikdo-patrick-marwa.herokuapp.com/api/slots";

const token = JSON.parse(localStorage.getItem("token"));

const getAllTimeSlots = async () => {
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
  getAllTimeSlots,
};
