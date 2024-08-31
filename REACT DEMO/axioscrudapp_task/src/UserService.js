import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

const getUsers = () => {
  return axios.get(API_URL);
};

const addUser = (newUser) => {
  return axios.post(API_URL, newUser);
};

const updateUser = (id, updatedUser) => {
  return axios.put(`${API_URL}/${id}`, updatedUser);
};

const deleteUser = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};

export default {
  getUsers,
  addUser,
  updateUser,
  deleteUser,
};
