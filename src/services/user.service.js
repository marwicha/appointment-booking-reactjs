import axios from "axios";

const API_URL = "http://localhost:8082/api/";

const updateAccount = async (id, data) => {

  const user = JSON.parse(localStorage.getItem('user'));

  const response = await axios({
    method: 'PUT',
    url: `${API_URL}compte/${id}`,
     headers : 
       {'authorization': 'Bearer ' + user.accessToken,
        'Content-Type': 'application/json'
       }, data: data });

  return response.data
}

const deleteAccount = async (id) => {

  const user = JSON.parse(localStorage.getItem('user'));

  const response = await axios({
    method: 'DELETE',
    url: `${API_URL}compte/${id}`,
     headers : 
       {'authorization': 'Bearer ' + user.accessToken,
        'Content-Type': 'application/json'
       } });

  return response.data
}


export default {
  updateAccount,
  deleteAccount
};