// // react native 第三方插件
import {combineReducers} from 'redux';
// reducers
import userReducer from './userReducer';

export default combineReducers({
  user: userReducer,
});
