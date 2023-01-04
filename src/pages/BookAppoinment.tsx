import NavigationBar from "../components/NavigationBar";
import BookingForm from "../components/BookingForm";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";

function BookAppointment() {

    const isLoggedIn = localStorage.getItem("isLoggedIn") ?? "false"

    if (isLoggedIn === "true") {
        return (
            <>
                <NavigationBar/>
                <Container fluid={"md"} className={"p-5"}>
                    <Row>
                        <Col md="3">
                            <BookingForm/>
                        </Col>
                    </Row>
                </Container>

            </>);
    } else if (isLoggedIn === "false") {
        // alert("Login to access this feature");
        return (<>
            <NavigationBar/>
            <Container fluid={"md"} className={"p-5"}>
                <Row>
                    <Col>
                        Please login to book appointments... <br/>
                        <Link to={"/"}>Back to dashboard</Link>
                    </Col>
                </Row>
            </Container>

        </>);
    } else {
        return (
            <>
                <NavigationBar/>
                <Container fluid={"md"} className={"p-5"}>
                    <Row>
                        <Col md="3">
                            <BookingForm/>
                        </Col>
                    </Row>
                </Container>

            </>);
    }


}

export default BookAppointment;