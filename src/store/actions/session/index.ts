// constants
import {SET_TOKEN, CLEAR_TOKEN} from '../constants';

// action types
export interface SetTokenAction {
  type: SET_TOKEN;
  token: string;
}
export interface ClearTokenAction {
  type: CLEAR_TOKEN;
}

// type merge
export type SessionAction = SetTokenAction | ClearTokenAction;

// function tool
export const setToken = (token: string): SetTokenAction => ({
  type: SET_TOKEN,
  token,
});
export const clearToken = (): ClearTokenAction => ({
  type: CLEAR_TOKEN,
});
