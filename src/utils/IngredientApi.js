import axios from 'axios';

import { DOMAIN } from 'utils/constants';

const getIngredients = () => {
  return axios.get(`${DOMAIN}/api/ingredients/`)
    .then(res => res.data)
    .catch(err => console.error(err));
};

const getIngredientsWithPagination = (page, limit) => {
  return axios.get(`${DOMAIN}/api/ingredients/${page}/${limit}`)
    .then(res => res.data)
    .catch(err => console.error(err));
};

const getCurrentIngredient = (id) => {
  return axios.get(`${DOMAIN}/api/ingredients/${id}`)
    .then(res => res.data)
    .catch(err => console.error(err));
};

const addIngredient = (data) => {
  return axios.post(`${DOMAIN}/api/ingredients/`, data)
    .then(res => res.data)
    .catch(err => console.error(err));
};

const updateIngredient = (id, data) => {
  return axios.put(`${DOMAIN}/api/ingredients/${id}`, data)
  .then(res => res.data)
  .catch(err => console.error(err));
};

const deleteIngredient = (id) => {
  return axios.delete(`${DOMAIN}/api/ingredients/${id}`)
  .then(res => res.data)
  .catch(err => console.error(err));
};

export {
  getIngredients,
  getIngredientsWithPagination,
  getCurrentIngredient,
  addIngredient,
  updateIngredient,
  deleteIngredient,
};
