import axios from 'axios';

axios.defaults.baseURL = 'https://624b3ec871e21eebbcef8fb0.mockapi.io/api/v1/';

export async function fetchContacts() {
  const { data } = await axios.get(`contacts`);
  return data;
}

export async function addContacts(createContact) {
  const { data } = await axios.post(`contacts`, createContact);
  return data;
}

export async function deleteContacts(contactsID) {
  const { data } = await axios.delete(`contacts/${contactsID}`);
  return data;
}
