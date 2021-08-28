/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import Avatar from '../../components/Avatar';

import {Screen, Label, Row, Button, Container} from './styles';

let iconsAvailables = [
  require('../../assets/avatars/avatar6.png'),
  require('../../assets/avatars/avatar5.png'),
  require('../../assets/avatars/avatar4.png'),
  require('../../assets/avatars/avatar3.png'),
  require('../../assets/avatars/avatar2.png'),
  require('../../assets/avatars/avatar1.png'),
];

const ChooseIcon = props => {
  useEffect(() => {
    props.navigation.setOptions({
      title: 'Choose your Avatar',
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

  return (
    <Screen>
      <Label>Classic</Label>
      <Container>
        <Row horizontal>
          {iconsAvailables.map((item, index) => (
            <Avatar
              key={index}
              image={item}
              onPress={() => {
                props.navigation.navigate('More', {
                  icon: item,
                  name: props?.route?.params?.name,
                  image: null,
                });
              }}
            />
          ))}
        </Row>
      </Container>
      <Label>Create your avatar</Label>
      <Button
        color="#fff"
        title="CAMERA"
        onPress={() => {
          props.navigation.navigate('Camera', {
            name: props?.route?.params?.name,
          });
        }}
      />
    </Screen>
  );
};

export default ChooseIcon;
