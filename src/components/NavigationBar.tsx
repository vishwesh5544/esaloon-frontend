import Container from 'react-bootstrap/Container';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import {useNavigate} from "react-router-dom";

const GuestNavbar = () => {
    return (

        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Mittal's E-Saloon</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link href="/login">Login</Nav.Link>
                            <Nav.Link eventKey={2} href="/signup">
                                Signup
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
}

const UserNavbar = () => {
    const navigate = useNavigate();

    const logoutUser = () => {
        localStorage.clear();

        navigate(0);
    }

    return (

        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Mittal's E-Saloon</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/book-appointment">Book Appointment</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link onClick={logoutUser}>Logout</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
}

const NavigationBar = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") ?? "false"

    if (isLoggedIn === "true") {
        return (<UserNavbar/>);
    } else if (isLoggedIn === "false") {
        return (<GuestNavbar/>);
    } else {
        return (<GuestNavbar/>);
    }
}

export default NavigationBar;

