import React from 'react';
import Home from '../screens/Home';
import More from '../screens/More';
import ToBeDone from '../screens/ToBeDone';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {translate} from '../lang/util';

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
          tabBarLabel: translate('home'),
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
          tabBarLabel: translate('search'),
          tabBarIcon: ({focused, color, size}) => (
            <Icon name="search" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Soon"
        component={ToBeDone}
        options={{
          tabBarLabel: translate('soon'),
          tabBarIcon: ({focused, color, size}) => (
            <Icon name="photo-video" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Downloads"
        component={ToBeDone}
        options={{
          tabBarLabel: translate('download'),
          tabBarIcon: ({focused, color, size}) => (
            <Icon name="download" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={More}
        options={{
          tabBarLabel: translate('more'),
          tabBarIcon: ({focused, color, size}) => (
            <Icon name="bars" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
