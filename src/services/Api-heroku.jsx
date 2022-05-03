import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common['Authorization'] = '';
  },
};

export async function fetchContacts() {
  const { data } = await axios.get(`/contacts`);
  return data;
}

export async function addContacts(createContact) {
  const { data } = await axios.post(`/contacts`, createContact);
  return data;
}

export async function deleteContacts(contactsID) {
  const { data } = await axios.delete(`/contacts/${contactsID}`);

  return data;
}

export async function registerUser(credentials) {
  const data = await axios.post('/users/signup', credentials);
  token.set(data.data.token);

  return data;
}

export async function loginUser(credentials) {
  const data = await axios.post('/users/login', credentials);
  token.set(data.data.token);
  //console.log(data.data.token);
  return data;
}

export async function logOutUser() {
  await axios.post('/users/logout');
  token.unset();
}

export async function currentUser(currentToken) {
  console.log(currentToken);
  token.set(currentToken);
  const data = await axios.get('/users/current');

  return data;
}
