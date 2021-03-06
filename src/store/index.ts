// react native 第三方插件
import {createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
// reducer
import rootReducer from './reducers';

// 数据持久化设置
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user', 'session'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

// react native debugger config
export const store = window.__REDUX_DEVTOOLS_EXTENSION__
  ? createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__())
  : createStore(persistedReducer);
export const persistor = persistStore(store);
