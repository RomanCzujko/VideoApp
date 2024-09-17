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
          } else if (route.name === 'Search') {
            iconName = 'search-outline';
          } else if (route.name === 'Settings') {
            iconName = 'settings-outline';
          }

          
          return <Ionicons name={iconName} size={20} color={color} />;
        },
        tabBarActiveTintColor: '#007BFF', 
        tabBarInactiveTintColor: 'gray', 
        tabBarLabelStyle: {
            fontSize: 10, 
          },
          tabBarIconStyle: {
            marginBottom: -10, // Adjust the margin between icon and label (optional)
          }, 
      })}
    >
      <Tab.Screen
        name="Home"
        component={MainScreen}
        options={{ tabBarLabel: 'Home' }} 
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{ tabBarLabel: 'Search' }}  
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ tabBarLabel: 'Settings' }}  // Optional: customize the label
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
