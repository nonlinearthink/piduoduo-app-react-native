// actions
import {UserAction} from '../actions';
// types
import {IUser} from '../../types';
import {SET_TOKEN, SET_USER_DETAIL} from '../constants';

const initState: IUser = {
  username: '',
  token: '',
  email: '',
  isMale: false,
  signature: '',
  nickname: '',
  frozen: false,
  phone: '',
  defrostingTime: new Date().getTime(),
  isLogin: false,
};

const userReducer = (state: IUser = initState, action: UserAction): IUser => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case SET_USER_DETAIL:
      return {
        ...state,
        ...action.user,
      };
    default:
      return state;
  }
};

export default userReducer;
