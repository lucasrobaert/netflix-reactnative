import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

export const Empty = styled.Image`
  width: 100%;
  height: ${(Dimensions.get('window').height * 81) / 200}px;
`;

export const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: white;
`;
