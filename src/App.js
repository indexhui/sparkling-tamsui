import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme/theme';

import * as Scroll from 'react-scroll';
import { Element, animateScroll as scroll } from 'react-scroll';

import { Box } from '@chakra-ui/react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Time from './components/Time';
import Wave from './components/Wave';
import Firework from './components/Firework';
import Store from './components/Store';
import Location from './components/Location';
import MainFooter from './components/MainFooter';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Hero />
      <Intro />
      <Box w="100%" overflow="hidden">
        <Element name="time" id="time">
          <Time />
        </Element>
      </Box>
      <Box w="100%" overflow="hidden">
        <Element name="wave" id="wave">
          <Wave />
        </Element>
      </Box>
      <Box>
        <Element name="firework" id="firework">
          <Firework />
        </Element>
      </Box>
      <Box>
        <Element name="store" id="store">
          <Store />
        </Element>
      </Box>
      <Box>
        <Element name="location" id="location">
          <Location />
        </Element>
      </Box>
      <MainFooter />
    </ChakraProvider>
  );
}

export default App;
