import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function LinkNav() {
    return (
        <Navbar bg="dark" expand="md" variant="dark">
            <Container>
                <Navbar.Toggle aria-controls="navbarNav" />
                <Navbar.Collapse id="navbarNav" className="justify-content-center">
                    <Nav>
                        <Link to="/" className="nav-link">Cars</Link>
                        <Link to="/dashboard" className="nav-link">Dashboard</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default LinkNav;
