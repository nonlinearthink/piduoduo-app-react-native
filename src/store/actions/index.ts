// types
import {SET_TOKEN, SET_USER_DETAIL} from '../constants';
import {IUser} from '../../types';

export interface ISetToken {
  type: SET_TOKEN;
  token: string;
}
export interface ISetUserDetail {
  type: SET_USER_DETAIL;
  user: IUser;
}

export type UserAction = ISetToken | ISetUserDetail;

export const addToken = (token: string): ISetToken => ({
  type: SET_TOKEN,
  token,
});
export const setUserDetail = (user: IUser): ISetUserDetail => ({
  type: SET_USER_DETAIL,
  user,
});
