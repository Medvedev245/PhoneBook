import axios from 'axios';

// axios.defaults.baseURL = `https://connections-api.herokuapp.com`;
// /users/signup

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const signUp = async body => {
  return await instance.post('/users/signup', body);
};

export const logIn = async body => {
  const { data } = await instance.post('/users/login', body);
  return data;
};
