import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { StackParamList } from './types';  // Import the types
import LoginScreen from '../screens/LoginScreen';
import SearchScreen from '../screens/SearchScreen';
import SettingsScreen from '../screens/SettingsScreen';
import MainTabNavigator from './MainTabNavigator';
import VideoDetailScreen from '../screens/VideoDetailScreen';

const Stack = createStackNavigator<StackParamList>();  // Use StackParamList for typing

const AppNavigator: React.FC = () => {
  const isLoggedIn = true;  // Replace this with your actual authentication logic

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!isLoggedIn ? (
        <>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="MainTabs" component={MainTabNavigator} />
        </>
      ) : (
        <>
          <Stack.Screen name="MainTabs" component={MainTabNavigator} />
          <Stack.Screen name="SearchScreen" component={SearchScreen} />
          <Stack.Screen name="SettingsScreen" component={SettingsScreen} options={{headerShown: true, headerTitle:''}} />
          <Stack.Screen name="VideoDetail" component={VideoDetailScreen} initialParams={{ videoId: 'default' }} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;
