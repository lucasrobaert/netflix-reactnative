import React from 'react';

import Avatar from '../../components/Avatar';
import Icon from 'react-native-vector-icons/FontAwesome';

import ProfileContext from '../../context/ProfileContext';

import {
  Row,
  Screen,
  AvantarsContainer,
  NetflixButton,
  ButtonLabel,
} from './styles';

let profilesAvailables = [
  {
    icon: require('../../assets/avatars/avatar1.png'),
    name: 'José',
    uri: null,
  },
  {
    icon: require('../../assets/avatars/avatar2.png'),
    name: 'Luiz',
    uri: null,
  },
  {
    icon: require('../../assets/avatars/avatar3.png'),
    name: 'João',
    uri: null,
  },
  {
    icon: require('../../assets/avatars/avatar4.png'),
    name: 'Maria',
    uri: null,
  },
  {
    icon: require('../../assets/avatars/avatar5.png'),
    name: 'Pedro',
    uri: null,
  },
];

const replaceAvatarsWithImage = (props, profilesAvailables) => {
  if (props.route?.params?.name) {
    profilesAvailables.map(item => {
      if (item.name === props.route.params.name) {
        if (props.route?.params?.image) {
          item.uri = props.route.params.image;
          item.image = null;
        }
        if (props.route?.params?.icon) {
          item.icon = props.route.params.icon;
          item.uri = null;
        }
      }
      return item;
    });
  }
};

const selectProfile = (navigation, item) => {
  navigation.navigate('Home', {name: item.name});
};

const editProfile = (navigation, profiles) => {
  navigation.navigate('ProfileToEdit', {profiles: profiles});
};

const More = props => {
  replaceAvatarsWithImage(props, profilesAvailables);

  return (
    <ProfileContext.Consumer>
      {({user, changeUser}) => {
        return (
          <Screen>
            <AvantarsContainer>
              <Row horizontal>
                {profilesAvailables.map(item => {
                  return (
                    <Avatar
                      key={item.name}
                      image={item.icon}
                      uri={item.uri}
                      name={item.name}
                      onPress={() => {
                        changeUser(item.name);
                        selectProfile(props.navigation, item);
                      }}
                    />
                  );
                })}
              </Row>
            </AvantarsContainer>
            <NetflixButton
              onPress={() => editProfile(props.navigation, profilesAvailables)}>
              <Icon name="edit" size={24} color="gray" />
              <ButtonLabel>Gerenciar perfis</ButtonLabel>
            </NetflixButton>
          </Screen>
        );
      }}
    </ProfileContext.Consumer>
  );
};

export default More;
