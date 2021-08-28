import React from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import styled from 'styled-components/native';

// import { Container } from './styles';

const Empty = styled.Image`
  width: 100%;
  height: ${(Dimensions.get('window').height * 81) / 200}px;
`;

const ToBeDone = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}>
      <Empty source={require('../assets/empty.png')} />
      <Text>Ops! parece que essa tela ainda não está pronta</Text>
    </View>
  );
};

export default ToBeDone;
