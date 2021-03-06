import React from 'react';
import Tabs from './Tabs';
import Camera from '../screens/Camera';
import ChooseIcon from '../screens/ChooseIcon';
import ProfileToEdit from '../screens/ProfileToEdit';
import Notification from '../screens/Notification';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{headerShown: false}}
        />
        <Stack.Screen name="ProfileToEdit" component={ProfileToEdit} />
        <Stack.Screen name="ChooseIcon" component={ChooseIcon} />
        <Stack.Screen
          name="Camera"
          component={Camera}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Notification" component={Notification} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
