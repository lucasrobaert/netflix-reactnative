import React, {useEffect} from 'react';

import {Wrapper, Title, Body} from './styles';

const Notification = props => {
  useEffect(() => {
    props.navigation.setOptions({
      title: 'Notificação',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontSize: 16,
      },
      headerStyle: {
        backgroundColor: 'black',
        borderBottomColor: '#ffffff',
      },
      headerTintColor: 'white',
    });
  }, []);

  const notification = props.route.params;
  console.log(notification);
  return (
    <Wrapper>
      <Title>{notification.notification.title}</Title>
      <Body>{notification.notification.body}</Body>
    </Wrapper>
  );
};

export default Notification;
