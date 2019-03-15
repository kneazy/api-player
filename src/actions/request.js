import axios from "axios"

// Для выполнения запросов
export default () => {
  const url = 'http://api.dirble.com/v2/'

  const headers = {
    'Accept': "application/json, text/plain, */*"
  }
  
  const params = {
    'token': 'e248cfcccd1e56711c878a2199',
  }
  const instance = axios.create({
    baseURL: url,
    timeout: 2000,
    headers: headers,
    params: params,
  });
  return instance;
};
