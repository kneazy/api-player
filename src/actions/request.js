import axios from "axios"

// Для выполнения запросов
export default () => {
  const url = 'http://api.dirble.com/v2/'

  const headers = {
    'Accept': "application/json, text/plain, */*"
  }
  
  const params = {
    'token': 'ba403b14614f6cedfe58bba8b4',
  }
  const instance = axios.create({
    baseURL: url,
    timeout: 2000,
    headers: headers,
    params: params,
  });
  return instance;
};
