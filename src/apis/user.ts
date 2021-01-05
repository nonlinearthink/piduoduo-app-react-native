import axios from 'axios';
import {LoginForm} from './types';

export async function login(data: LoginForm) {
  return await axios.post('/user/session', data);
}
