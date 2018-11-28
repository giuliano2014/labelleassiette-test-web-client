import axios from 'axios';

import { apiUrl } from 'utils/constants';

const getIngredients = () => {
  return axios.get(`${apiUrl}/api/ingredients/`)
    .then(res => res.data)
    .catch(err => console.error(err));
};

const getCurrentIngredient = (id) => {
  return axios.get(`${apiUrl}/api/ingredients/${id}`)
    .then(res => res.data)
    .catch(err => console.error(err));
};

const addIngredient = (data) => {
  return axios.post(`${apiUrl}/api/ingredients/`, data)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

const updateIngredient = (id, data) => {
  return axios.put(`${apiUrl}/api/ingredients/${id}`, data)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

const deleteIngredient = (id) => {
  return axios.delete(`${apiUrl}/api/ingredients/${id}`)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export { getIngredients, getCurrentIngredient, addIngredient, updateIngredient, deleteIngredient };
