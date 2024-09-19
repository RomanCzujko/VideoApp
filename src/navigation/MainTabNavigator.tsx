import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from '../screens/MainScreen';
import SearchScreen from '../screens/SearchScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: string = '';

          // Determine which icon to show based on the route name
          if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'SearchScreen') {
            iconName = 'search-outline';
          } else if (route.name === 'Settings') {
            iconName = 'settings-outline';
          }

          
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007BFF', 
        tabBarInactiveTintColor: 'gray', 
        tabBarLabelStyle: {
            fontSize: 12, 
          },
          tabBarIconStyle: {
            marginBottom: -5,
            paddingTop: 5 
          }, 
      })}
    >
      <Tab.Screen
        name="Home"
        component={MainScreen}
        options={{ tabBarLabel: 'Home', headerShown: false }} 
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{ tabBarLabel: 'Search', headerShown: false  }}
        initialParams={{ title: '' }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
