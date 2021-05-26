/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import AppStateContainer from './src/components/AppStateContainer';

AppRegistry.registerComponent(appName, () => AppStateContainer);
