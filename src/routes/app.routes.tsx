import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { Page } from '../screens/Page';

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
  return(
    <Navigator
     screenOptions={{headerShown: false}}
    >     
      <Screen 
        name="Home"
        component={Home}
      />
      <Screen 
        name="Page"
        component={Page}
      />     
    </Navigator>
  )
}