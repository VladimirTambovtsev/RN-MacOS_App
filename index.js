/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import App from './App';
import {name as appName} from './app.json';
import {StoreProvider, root} from './src/store/store';
import {Routes} from './src/Routes';

const Root = () => (
  <StoreProvider value={root}>
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  </StoreProvider>
);
AppRegistry.registerComponent(appName, () => Root);
