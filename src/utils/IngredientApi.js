import axios from 'axios';

import { apiUrl } from 'utils/constants';

const getIngredients = () => {
  return axios.get(`${apiUrl}/api/ingredients/`)
    .then(res => res.data)
    .catch(err => console.error(err));
};

export { getIngredients };
