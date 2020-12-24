import axios from "axios";

const API_URL = "http://localhost:8082/api/appointment/create";

const createAppointment =  (data) => {

  const token = JSON.parse(localStorage.getItem('user'));

  const response =  axios({
    method: 'POST',
    url: API_URL,
     headers : 
       {'authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
       }, 
    data: data });

   return response
  };

export default {
  createAppointment,
};