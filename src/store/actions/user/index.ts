// constants
import {UPDATE_USER_INFO, INIT_USER_INFO} from '../constants';
// types
import {UserInfo} from '../../../types';

// action types
export interface UpdateUserInfoAction {
  type: UPDATE_USER_INFO;
  user: UserInfo;
}
export interface InitUserInfoAction {
  type: INIT_USER_INFO;
}

// type merge
export type UserAction = UpdateUserInfoAction | InitUserInfoAction;

// function tool
export const updateUserInfo = (user: UserInfo): UpdateUserInfoAction => ({
  type: UPDATE_USER_INFO,
  user,
});
export const initUserInfo = (): InitUserInfoAction => ({
  type: INIT_USER_INFO,
});
