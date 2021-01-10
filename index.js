import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import './src/plugins/axios';
import './src/store';

AppRegistry.registerComponent(appName, () => App);
