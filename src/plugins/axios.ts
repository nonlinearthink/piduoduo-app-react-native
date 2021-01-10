// axios
import axios from 'axios';
// react native extensions
import {Actions} from 'react-native-router-flux';
// redux tools
import {store} from '../store/index';
import {clearToken, initUserInfo} from '../store/actions';

axios.defaults.baseURL = 'http://47.98.219.27:8000/api';

axios.interceptors.request.use(
  (config) => {
    const token = store.getState().session.token;
    token && (config.headers.Authorization = token);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    switch (error.response.data.code) {
      // token 错误跳转到登录界面
      case 13:
      case 14:
        store.dispatch(clearToken());
        store.dispatch(initUserInfo());
        Actions.replace('Login');
        break;
    }
    return Promise.reject(error);
  },
);
