import React from 'react';

import {StatusBar, Dimensions} from 'react-native';
import {useSpring, animated} from '@react-spring/native';

import styled from 'styled-components/native';

import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Movies from '../../components/Movies';

const api = [
  require('../../assets/movies/movie1.jpg'),
  require('../../assets/movies/movie2.jpg'),
  require('../../assets/movies/movie3.jpg'),
  require('../../assets/movies/movie4.jpg'),
];

const Container = styled.ScrollView`
  flex: 1;
  background-color: #000;
`;

const Poster = styled.ImageBackground`
  width: 100%;
  height: ${(Dimensions.get('window').height * 81) / 100}px;
`;

const AnimatedPost = animated(Poster);

const Home = () => {
  const props = useSpring({
    to: {opacity: 1},
    from: {opacity: 0},
    config: {duration: 5000},
  });
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Container>
        <AnimatedPost style={props} source={require('../../assets/poster.jpg')}>
          <Header />
          <Hero />
        </AnimatedPost>
        <Movies label="Recomendados" item={api} />
        <Movies label="Top 10" item={api} />
      </Container>
    </>
  );
};

export default Home;
