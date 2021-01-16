import axios from 'axios';

export async function getSystemMessage() {
  return await axios.get('/system-message');
}
