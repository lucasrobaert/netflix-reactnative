import React, {useState, useEffect} from 'react';
import ProfileContext from './context/ProfileContext';
import Routes from './routes';

import messaging from '@react-native-firebase/messaging';

const App = () => {
  const [user, changeUser] = useState('José');

  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
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
