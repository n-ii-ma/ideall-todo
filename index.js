/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { PaperProvider } from 'react-native-paper';

import { store, persistor } from './src/redux/store';
import { name as appName } from './app.json';

import App from './src/app/App';

const root = () => (
  <StoreProvider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <PaperProvider>
        <App />
      </PaperProvider>
    </PersistGate>
  </StoreProvider>
);

AppRegistry.registerComponent(appName, () => root);
