import axios from 'axios';

export async function getArticleList() {
  return await axios.get('/home/article');
}

export async function getHotList() {
  return await axios.get('/home/hot');
}

export async function getNewList() {
  return await axios.get('/home/new');
}
