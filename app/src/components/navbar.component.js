import logo from '../img/logo.png'

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { LinkContainer } from 'react-router-bootstrap'


function MainNavbar() {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container fluid>
                <Navbar.Brand href="#">
                    <img src={logo} alt="Logo" height="80px" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}

                    >
                        <LinkContainer to="/">
                            <Nav.Link>Meter Reader Potral</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/billdata">
                            <Nav.Link>Check Your Bill</Nav.Link>
                        </LinkContainer>

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MainNavbar;