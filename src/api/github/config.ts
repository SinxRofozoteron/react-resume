import axios from 'axios';

export const axiosGithub = axios.create({
  baseURL: 'https://api.github.com'
});
