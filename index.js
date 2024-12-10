/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';

import App from './App';

const root = () => (
  <PaperProvider>
    <App />
  </PaperProvider>
);

AppRegistry.registerComponent(appName, () => root);
