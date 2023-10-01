import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '39623809-18572be41db055d96eae29e15';

const fetchImages = async (query, page = 1, perPage = 32) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: query,
        page,
        key: API_KEY,
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: perPage,
      },
    });
    return response.data.hits;
  } catch (error) {
    throw error;
  }
};

export default fetchImages;
