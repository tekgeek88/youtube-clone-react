import axios from 'axios';

const KEY = 'AIzaSyBXLeJ09XOa03o7oZkoG2D839Dmokh_DnI';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    key: KEY
  }
});
