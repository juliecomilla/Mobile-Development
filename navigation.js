/*import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from './src/Screens/HomePage';
import RestList from './src/Screens/RestList';
import Contact from './src/Screens/Contact';
import Events from './src/Screens/Events';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'blue', // Color of the active tab
          inactiveTintColor: 'gray', // Color of inactive tabs
          style: {
            backgroundColor: 'white', // Background color of the tab bar
          },
          labelStyle: {
            fontSize: 14, // Font size of tab labels
            fontWeight: 'bold', // Font weight of tab labels
          },
          tabStyle: {
            paddingVertical: 8, // Vertical padding of each tab
          },
        }}
        >
        <Tab.Screen
          name="Home"
          component={HomePage}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Restaurant List"
          component={RestList}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-restaurant" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Contact"
          component={Contact}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-information-circle" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Events"
          component={Events}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="calendar" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation; */