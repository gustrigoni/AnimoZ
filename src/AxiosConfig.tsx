import axios from 'axios';
import { toast } from 'react-toastify';

export function AxiosConfig() {

  // add axios config bases
  axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
  axios.defaults.headers.common['Authorization'] = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODZjMjFmYTQ3MDQyNTFhOGM0ZWIzNGZjNTY0OGEwMCIsInN1YiI6IjYxOTJjZjFiYzk5ODI2MDA2MjJjNWM0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yMmc5y-5Xu5MyZbTuLvT0hAFeqhussolo9z556xisNM`;
  axios.defaults.headers.post['Content-Type'] = 'application/json';

  // check request
  axios.interceptors.request.use(request => {
    return request;
  }, error => {
    toast('Error request.', {
      type: 'error'
    });
    return Promise.reject(error);
  });

  // check response
  axios.interceptors.response.use(response => {
    return response;
  }, error => {
    toast('No data found in TMDB!', {
      type: 'warning'
    });
    return Promise.reject(error);
  });

  // return null ever
  return null;

}