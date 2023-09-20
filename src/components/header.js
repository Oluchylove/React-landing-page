import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {HousesFill} from 'react-bootstrap-icons';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import './main.css';

function Header(){
    return(
        <Navbar expand="lg" className="bg-body mb-4">
      <Container >
        <Navbar.Brand href="#home" className='logo'> <HousesFill/> HELLO-HOME</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto headerSub">
            <Nav.Link href="#home" className='navCont'>Rent</Nav.Link>
            <Nav.Link href="#link" className='navCont'>Blog</Nav.Link>
            <Nav.Link href="#link" className='navCont'>About</Nav.Link>
            <Nav.Link href="#link" className='navCont'>Contact</Nav.Link>
            <Button variant="primary" className='signup'>Sign Up</Button>{' '}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}
export default Header;