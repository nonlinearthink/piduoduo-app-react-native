import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import './src/utils/axios';
import './src/store';

AppRegistry.registerComponent(appName, () => App);
