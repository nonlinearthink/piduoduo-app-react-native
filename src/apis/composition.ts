import axios from 'axios';

export async function getUserComposition() {
  return await axios.get('/composition');
}
