import React from 'react';
import {Text} from 'react-native';

import {Wrapper, Empty} from './styles';

const ToBeDone = () => {
  return (
    <Wrapper>
      <Empty source={require('../../assets/empty.png')} />
      <Text>Ops! parece que essa tela ainda não está pronta</Text>
    </Wrapper>
  );
};

export default ToBeDone;
