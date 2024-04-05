import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Bike Ride</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link >Home</Nav.Link>
            <Nav.Link >About</Nav.Link>
            <Nav.Link >
              Safety
            </Nav.Link>
            <Nav.Link >
              Contact us
            </Nav.Link>
            <Nav.Link >
              Store
            </Nav.Link>

          </Nav>
          <Form className="d-flex">
           
            <Button variant="outline-success">Login</Button>
            <Button variant="outline-success">SinUp</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;