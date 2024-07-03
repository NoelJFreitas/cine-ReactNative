import React from 'react';

import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import {
  HomeScreen,
  BookmarkScreen,
  NewsScreen,
  ProfileScreen,
  SearchScreen,
} from '@screens';

import {AppTabBar} from './components/AppTabBar';

export type AppTabBottomTabParamList = {
  HomeScreen: undefined;
  BookmarkScreen: undefined;
  SearchScreen: undefined;
  NewsScreen: undefined;
  ProfileScreen: undefined;
};

const Tab = createBottomTabNavigator<AppTabBottomTabParamList>();

export function AppTab() {
  function renderTabBar(props: BottomTabBarProps) {
    return <AppTabBar {...props} />;
  }

  return (
    <Tab.Navigator screenOptions={{headerShown: false}} tabBar={renderTabBar}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="SearchScreen" component={SearchScreen} />
      <Tab.Screen name="NewsScreen" component={NewsScreen} />
      <Tab.Screen name="BookmarkScreen" component={BookmarkScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
