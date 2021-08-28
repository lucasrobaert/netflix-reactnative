import React, {useState} from 'react';
import ProfileContext from './context/ProfileContext';
import Routes from './routes';

const App = () => {
  const [user, changeUser] = useState('José');

  return (
    <ProfileContext.Provider value={{user, changeUser}}>
      <Routes />
    </ProfileContext.Provider>
  );
};

export default App;
