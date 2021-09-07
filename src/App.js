import React, {useState, useEffect} from 'react';
import ProfileContext from './context/ProfileContext';
import Routes from './routes';
import {configureLanguareToi18N} from './lang/util';

import messaging from '@react-native-firebase/messaging';

const App = () => {
  configureLanguareToi18N();

  const [user, changeUser] = useState('José');

  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  }

  useEffect(() => {
    requestUserPermission();
  });

  return (
    <ProfileContext.Provider value={{user, changeUser}}>
      <Routes />
    </ProfileContext.Provider>
  );
};

export default App;
