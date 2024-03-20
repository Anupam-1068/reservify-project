import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavigationBar.css';
import logo from '../assets/logo.png'

function NavigationBar() {
  return (
    <Navbar className="navbar navbar-light">
    <Nav variant="tabs" defaultActiveKey="/home">
    <Navbar.Brand href="/">
        <img src={logo} alt="Logo" className="logo" />
        </Navbar.Brand>
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/bookSpot">Book Spot</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/history">History</Nav.Link>
        </Nav.Item>
      </Nav>
  </Navbar>
);
}

export default NavigationBar;