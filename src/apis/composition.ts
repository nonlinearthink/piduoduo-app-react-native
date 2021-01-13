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
