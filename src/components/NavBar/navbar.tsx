import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const NavBar = () => {
  return (
    <Navbar expand="lg" id='navbar'>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/">       
             <i className='bi bi-apple'></i>
            </Nav.Link>
            <Nav.Link href="/">Store</Nav.Link>
            <Nav.Link href="/">Mac</Nav.Link>
            <Nav.Link href="/">iPad</Nav.Link>
            <Nav.Link href="/">iPhone</Nav.Link>
            <Nav.Link href="/">Watch</Nav.Link>
            <Nav.Link href="/">Airpods</Nav.Link>
            <Nav.Link href="/">TV & Home</Nav.Link>
            <Nav.Link href="/">Only on Apple</Nav.Link>
            <Nav.Link href="/">Accesories</Nav.Link>
            <Nav.Link href="/">Support</Nav.Link>
            <Nav.Link href="/">       
             <i className='bi bi-search'></i>
            </Nav.Link>
            <Nav.Link href="/">       
             <i className='bi bi-bag'></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
