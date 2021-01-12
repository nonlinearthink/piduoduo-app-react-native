import axios from 'axios';

export async function getArticleList() {
  return await axios.get('/home/article');
}

export async function getHotList() {
  return await axios.get('/home/hot');
}

export async function getFreshList() {
  return await axios.get('/home/new');
}

export async function getFollowList(username: string) {
  return await axios.get(`/follow/${username}`);
}

export async function getFollowCompositionList() {
  return await axios.get('home/follow');
}
