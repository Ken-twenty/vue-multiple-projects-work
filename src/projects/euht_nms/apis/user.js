import axios from './axios';

export const demo = () => axios.request({
  url: 'demo',
  method: 'get',
});
