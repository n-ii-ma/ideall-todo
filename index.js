/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { Provider as StoreProvider } from 'react-redux';
import { PaperProvider } from 'react-native-paper';

import { name as appName } from './app.json';
import { store } from '@/redux/store';

import App from '@/app/App';

const root = () => (
  <StoreProvider store={store}>
    <PaperProvider>
      <App />
    </PaperProvider>
  </StoreProvider>
);

AppRegistry.registerComponent(appName, () => root);
