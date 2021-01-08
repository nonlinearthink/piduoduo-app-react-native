// actions
import {SessionAction} from '../../actions/index';
import {SET_TOKEN, CLEAR_TOKEN} from '../../actions/constants';

const initState = {
  token: '',
  isLogin: false,
};

const sessionReducer = (state = initState, action: SessionAction) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        token: action.token,
        isLogin: true,
      };
    case CLEAR_TOKEN:
      return {...initState};
    default:
      return state;
  }
};

export default sessionReducer;
