/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import Avatar from '../../components/Avatar';

import {Screen, GoBackButton, RowContainer} from './styles';

const twoBytwo = profiles => {
  const result = [];
  profiles.map((item, index) => {
    if (index % 2 === 0) {
      result.push([]);
    }
    result[Math.floor(index / 2)].push(item);
  });
  return result;
};

const ProfileToEdit = props => {
  useEffect(() => {
    props.navigation.setOptions({
      title: 'Gerenciar perfis',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontSize: 16,
      },
      headerStyle: {
        backgroundColor: 'black',
        borderBottomColor: '#ffffff',
      },
      headerTintColor: 'white',
      headerLeft: () => (
        <GoBackButton
          onPress={() => props.navigation.goBack()}
          title="Concluído"
          color="#fff"
        />
      ),
    });
  }, []);

  const items = twoBytwo(props?.route?.params?.profiles);

  return (
    <Screen>
      {items.map((row, rowIndex) => (
        <Row key={rowIndex} items={row} {...props} />
      ))}
    </Screen>
  );
};

const Row = props => {
  return (
    <RowContainer style={{flexDirection: 'row', justifyContent: 'center'}}>
      {props.items.map((column, colIndex) => (
        <Avatar
          key={column.name}
          big={true}
          onPress={() => {
            props.navigation.navigate('ChooseIcon', {name: column.name});
          }}
          edit
          image={column.icon}
          uri={column.uri}
          name={column.name}
        />
      ))}
    </RowContainer>
  );
};

export default ProfileToEdit;
