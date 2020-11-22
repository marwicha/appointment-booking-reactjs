import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8082/api/appointment/create";

const createAppointment =  (data) => {

  const response =  axios({
    method: 'POST',
    url: API_URL,
    headers: authHeader(),
    data: data });

   console.log(data)
   return response
  };

export default {
  createAppointment,
};