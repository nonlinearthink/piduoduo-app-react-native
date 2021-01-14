import axios from 'axios';

export async function getUserComposition() {
  return await axios.get('/composition');
}

interface AddCompositionProps {
  compositionBody: string;
  status: number;
}

export async function addUserComposition(props: AddCompositionProps) {
  return await axios.post('/composition', props);
}

export async function deleteUserComposition(compositionId: number) {
  return await axios.delete(`/composition/${compositionId}`);
}

interface UpdateCompositionProps {
  compositionId: number;
  title?: string;
  compositionBody?: string;
  status?: number;
  visibility?: number;
  description?: string;
}

export async function updateUserComposition(props: UpdateCompositionProps) {
  return await axios.put(`/composition/${props.compositionId}`, props);
}

export async function getComposition(compositionId: number) {
  return await axios.get(`/composition/${compositionId}`);
}

export async function addSupport(compositionId: number) {
  return await axios.post(`/support/${compositionId}`);
}

export async function deleteSupport(compositionId: number) {
  return await axios.delete(`/support/${compositionId}`);
}

export async function addFavorite(compositionId: number) {
  return await axios.post(`/favorite/${compositionId}`);
}

export async function deleteFavorite(compositionId: number) {
  return await axios.delete(`/favorite/${compositionId}`);
}

export async function addComment(compositionId: number, body: string) {
  return await axios.post(`/comment/${compositionId}`, {commentBody: body});
}
