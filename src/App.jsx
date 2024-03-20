import React from 'react';
import NavigationBar from './containers/NavigationBar';
import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container'; // Import Container from react-bootstrap
import Footer from './containers/Footer'
import './App.css'

function App() {
  return (
    <>
    <NavigationBar></NavigationBar>
    <Container>
            <Outlet />
        </Container>
    <Footer></Footer>

    </>
  )
}

export default App
