import axios from "axios"
import qs from 'qs';

const url = 'https://accounts.spotify.com/api/token'
const dataString = 'refresh_token=NgCXRK...MzYjw';
const options = {
  method: 'POST',
  headers: { 'content-type': 'application/x-www-form-urlencoded' },
  body: qs.stringify(dataString),
  url,
};
axios(options);

export default () => {
  const url = 'https://api.spotify.com/v1/'

  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'Bearer BQA56Zoq-qXG2oBwVLizWNF1ygLrM0eJVyhFxbhByCTYjuanHwsYM0VJ5ogPCRfEEZNhOc1W51pdZdbbdHqekKfX27ma22PTHyjGpN8VbwFkYfYg0o3uzxWPyastY5l-7DC4Uv-9gNTn0FgZClG-KdeGSWY_6KK4bfaJKtft2oiIGc7XfndIOROPihRCjgNBPsoCMA'
};

  const instance = axios.create({
    baseURL: url,
    timeout: 2000,
    headers: headers,
  });
  return instance;
};
