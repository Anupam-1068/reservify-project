import React from 'react';
import NavigationBar from './containers/NavigationBar';
import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container'; // Import Container from react-bootstrap
import Footer from './containers/Footer'
import './App.css'
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; // assuming this is your i18n setup file
import { ChakraProvider } from '@chakra-ui/react'



function App() {

  return (
    <ChakraProvider>
      <I18nextProvider i18n={i18n}>
    <NavigationBar></NavigationBar>
    <Container>
            <Outlet />
        </Container>
    <Footer></Footer>

    </I18nextProvider >
    </ChakraProvider>
  )
}

export default App
