import axios from "axios";
import { JWT_TOKEN } from "../config/globalVariables";
import { getTokenStorage } from "./session";

let tokenConfig = {
  headers: { Authorization: `Bearer ${sessionStorage.getItem(JWT_TOKEN)}` }
}
const tokenConfigControl = (token) => {
  return token ? tokenConfig : undefined;
}

export const getApi = async (url, token = getTokenStorage()) => {
  return await axios.get(url, tokenConfigControl(token))
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error)
    });
}

export const deleteApi = async (url, token = getTokenStorage()) => {
  return await axios.delete(url, tokenConfigControl(token))
    .then(response => {
      return response.data;
    })
    .catch(
      error => console.log(error)
    );
}

export const formDataPostApi = async (url, data, token = getTokenStorage()) => {
  const formData = new FormData();
  Object.keys(data).forEach(key => {
    formData.append(key, data[key]);
  });

  return await axios.post(url, formData, tokenConfig,
    tokenConfigControl(token))
    .then(response => { 
      return response.data 
    })
    .catch(error => { 
      console.log(error) 
    });
};

export const postApi = async (url, data, token = getTokenStorage()) => {
  return await axios.post(url, data,
    tokenConfigControl(token))
    .then(response => {
      return response.data
    })
    .catch(error => { 
      console.log(error) 
    });
};

