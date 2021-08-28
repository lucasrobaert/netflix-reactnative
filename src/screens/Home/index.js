import React, {useEffect, useState} from 'react';

import {StatusBar} from 'react-native';
import {useSpring} from '@react-spring/native';

import ProfileContext from '../../context/ProfileContext';

import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Movies from '../../components/Movies';

import {Container, AnimatedPost} from './styles';

const Home = () => {
  const [movies, setMovies] = useState([]);

  const props = useSpring({
    to: {opacity: 1},
    from: {opacity: 0},
    config: {duration: 5000},
  });

  useEffect(() => {
    const data = require('../../assets/Movies.json');

    setMovies(data);
  }, []);

  return (
    <ProfileContext.Consumer>
      {({user, changeUser}) => {
        let moviesToResume = [];
        console.log(user);

        if (user) {
          const data = require('../../assets/moviesToResume.json');
          moviesToResume = data[user];
        }

        return (
          <>
            <StatusBar
              translucent
              backgroundColor="transparent"
              barStyle="light-content"
            />
            <Container>
              <AnimatedPost
                style={props}
                source={require('../../assets/poster.jpg')}>
                <Header />
                <Hero />
              </AnimatedPost>
              <Movies label="Continue assistindo" item={moviesToResume} />
              <Movies label="Recomendados" item={movies} />
              <Movies label="Top 10" item={movies} />
            </Container>
          </>
        );
      }}
    </ProfileContext.Consumer>
  );
};

export default Home;
