import axios from 'axios';

interface LoginForm {
  username: string;
  password: string;
}

export async function login(data: LoginForm) {
  return await axios.post('/user/session', data);
}
