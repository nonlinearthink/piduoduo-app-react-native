import axios from 'axios';
import {ILoginForm} from '../types';

export async function login(data: ILoginForm) {
  return await axios.post('/user/session', data);
}
