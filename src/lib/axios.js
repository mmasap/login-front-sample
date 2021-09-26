import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.slowter.work', // バックエンドB のURL:port を指定する
  headers: {
    'Content-Type': 'application/json',
  },
  responseType: 'json',
});
