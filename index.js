/** @format */

import {AppRegistry} from 'react-native';
//import App from 'App';
import Stack from './src/helper/navigation/Stack';
import {name as appName} from './app.json';
console.disableYellowBox = true;
AppRegistry.registerComponent(appName, () => Stack);
