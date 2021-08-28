import React from 'react';
import Home from '../screens/Home';
import More from '../screens/More';
import ToBeDone from '../screens/ToBeDone';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarStyle: {
          backgroundColor: '#1a1718',
          borderTopColor: 'transparent',
        },
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused, color, size}) => (
            <Icon name="home" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Search"
        component={ToBeDone}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({focused, color, size}) => (
            <Icon name="search" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Soon"
        component={ToBeDone}
        options={{
          tabBarLabel: 'Soon',
          tabBarIcon: ({focused, color, size}) => (
            <Icon name="photo-video" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Downloads"
        component={ToBeDone}
        options={{
          tabBarLabel: 'Downloads',
          tabBarIcon: ({focused, color, size}) => (
            <Icon name="download" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Mais"
        component={More}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused, color, size}) => (
            <Icon name="bars" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
