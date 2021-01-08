// actions
import {UserAction} from '../../actions/index';
import {UPDATE_USER_INFO, INIT_USER_INFO} from '../../actions/constants';
// types
import {UserInfo} from '../../../types';

const initState: UserInfo = {
  username: '',
  nickname: '',
  isMale: false,
  signature: '',
  email: '',
  phone: '',
  frozen: false,
  defrostingTime: new Date().getTime(),
};

const userReducer = (
  state: UserInfo = initState,
  action: UserAction,
): UserInfo => {
  switch (action.type) {
    case UPDATE_USER_INFO:
      return {
        ...state,
        ...action.user,
      };
    case INIT_USER_INFO:
      return {...initState};
    default:
      return state;
  }
};

export default userReducer;
