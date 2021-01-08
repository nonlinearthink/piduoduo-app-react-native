// redux tool
import {combineReducers} from 'redux';
// reducers
import user from './user';
import session from './session';

export default combineReducers({
  user,
  session,
});
