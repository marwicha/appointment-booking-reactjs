import axios from "axios";

const API_URL = "http://localhost:8082/api/appointment";

const createAppointment =  (data) => {

  const user = JSON.parse(localStorage.getItem('user'));

  const response =  axios({
    method: 'POST',
    url: `${API_URL}/create`,
     headers : 
       {'authorization': 'Bearer ' + user.accessToken,
        'Content-Type': 'application/json'
       }, 
    data: data });

   return response
  };

  const getUserAppointments =  () => {

  const user = JSON.parse(localStorage.getItem('user'));

  const response =  axios({
    method: 'GET',
    url: `${API_URL}/${user.id}`,
     headers : 
       {'authorization': 'Bearer ' + user.accessToken,
        'Content-Type': 'application/json'
       }});

   return response
  };

export default {
  createAppointment,
  getUserAppointments
};