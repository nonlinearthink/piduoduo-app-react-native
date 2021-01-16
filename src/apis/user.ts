import axios from 'axios';
import {UserInfo} from '../types';

interface LoginForm {
  username: string;
  password: string;
}

export async function login(data: LoginForm) {
  return await axios.post('/user/session', data);
}

export async function updateUserDetail(user: UserInfo) {
  return await axios.put('/user/account/details', user);
}

interface PasswordChange {
  newPassword: string;
  oldPassword: string;
  passwordConfirm: string;
}

export async function updateUserPassword(form: PasswordChange) {
  return await axios.put('/user/account/password', form);
}

export async function getHelp() {
  return await axios.get('/help');
}

export async function addFeedback(body: string, type: number) {
  return await axios.post('/feedback', {
    feedbackBody: body,
    feedbackType: type,
  });
}

export async function getHistory() {
  return await axios.get('/history');
}

export async function getCommentList() {
  return await axios.get('/comment/all');
}

export async function getSupportList() {
  return await axios.get('/support/all');
}

export async function getFavorite() {
  return await axios.get('/favorite');
}

export async function getFollow(username: string) {
  return await axios.get(`/follow/${username}`);
}

export async function getFollower(username: string) {
  return await axios.get(`/follow/${username}/follower`);
}
