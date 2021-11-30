/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {StoreProvider, root} from './src/store/store';
import {Books} from './src/components/Books';

const Root = () => (
  <StoreProvider value={root}>
    <Books />
  </StoreProvider>
);
AppRegistry.registerComponent(appName, () => Root);
