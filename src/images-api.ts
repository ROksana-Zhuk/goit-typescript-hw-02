import axios from 'axios';
import { Image } from './types';


axios.defaults.baseURL = 'https://api.unsplash.com';
const ACCESS_KEY = 'fl5_9dAHAb-Avd2lHQqyobaE_QyTASIed0XsCX9PFmM';

interface ImagesResponse {
    images: Image[],
    totalPages: number
}

export const fetchImages = async (query: string, currentPage: number): Promise<ImagesResponse> => {
  const response = await axios.get(`search/photos`, {
    params: {
      query: query,
      page: currentPage,
      per_page: 15,
      client_id: ACCESS_KEY,
    },
  });
  console.log(response);

  return {
    images: response.data.results,
    //likes: response.data.results.likes,
    //description: response.data.results.description,

    totalPages: response.data.total_pages,
    //response.data,
  };
};

