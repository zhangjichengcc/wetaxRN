import React from 'react';
import { NavigationContainer, EventMapBase } from '@react-navigation/native';

import type { RouteConfig, StackNavigationState } from '@react-navigation/core';

import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import HomeScreen from '../pages/HomeScreen';
import DetailsScreen from '../pages/DetailsScreen';
import ProfileScreen from '../pages/ProfileScreen';
import TabScreen from '../components/BaseTab';

export type AppRouteConfig = RouteConfig<
  AppParamList,
  keyof AppParamList,
  // NavigationState,
  StackNavigationState<AppParamList>,
  NativeStackNavigationOptions,
  EventMapBase
>;

const routes: AppRouteConfig[] = [
  {
    name: 'Home',
    component: HomeScreen,
  },
  {
    name: 'Details',
    component: DetailsScreen,
  },
  {
    name: 'Tab',
    component: TabScreen,
    options: {
      headerShown: false,
    },
  },
  {
    name: 'Profile',
    component: ProfileScreen,
  },
];

const Stack = createNativeStackNavigator<AppParamList>();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {routes.map((stackRoute) => (
          <Stack.Screen key={stackRoute.name} {...stackRoute} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
