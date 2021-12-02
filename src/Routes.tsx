import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useDynamicColor} from './hooks/theme';
import {tw} from './Tailwind';
import {Posts} from './components/Posts';
import {Post} from './components/Post';

export type IRootStackParams = {
  Home: undefined;
  Post: {title: string};
};

const RootStack = createStackNavigator<IRootStackParams>();

export const Routes = () => {
  const dc = useDynamicColor();
  const headerTintBgColor = dc('bg-gray-900', 'bg-white');
  const headerTintColor = dc('text-white', 'text-black');

  return (
    <RootStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: [tw(headerTintBgColor)],
        headerTintColor: tw(headerTintColor).color,
      }}>
      <RootStack.Screen
        name="Home"
        component={Posts}
        options={{headerShown: false}}
      />
      <RootStack.Screen name="Post" component={Post} />
    </RootStack.Navigator>
  );
};
