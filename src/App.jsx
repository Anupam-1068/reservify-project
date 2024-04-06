import React from 'react';
import NavigationBar from './containers/NavigationBar';
import { Outlet } from 'react-router-dom';
import Footer from './containers/Footer';
import './App.css';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; // assuming this is your i18n setup file
import { ChakraProvider,Box } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider >
      <I18nextProvider i18n={i18n}>
      <Box maxW="container.xl" mx="auto" >
        <NavigationBar />
          <Outlet />
        <Footer />
        </Box>
      </I18nextProvider>
    </ChakraProvider>
  );
}

export default App;

