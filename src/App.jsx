import React from 'react';
import NavigationBar from './containers/NavigationBar';
import { Outlet } from 'react-router-dom';
import Footer from './containers/Footer';
import './App.css';
import { ChakraProvider,Box } from '@chakra-ui/react';
import './i18n';


function App() {
  return (
    <ChakraProvider >
      <Box maxW="container.xl" mx="auto" >
        <NavigationBar />
          <Outlet />
        <Footer />
        </Box>
    </ChakraProvider>
  );
}
export default App;

