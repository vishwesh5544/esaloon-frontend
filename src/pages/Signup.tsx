import SignupForm from "../components/SignupForm";
import NavigationBar from "../components/NavigationBar";
import Container from "react-bootstrap/Container";
import {Button, Col, Form, Row} from "react-bootstrap";

function Signup() {

    return (
        <>
            <NavigationBar/>
            <Container fluid={"md"} className={"p-5"}>
                <Row>
                    <Col md="3">
                        <SignupForm/>
                    </Col>
                    <Col>
                        Some image here
                    </Col>
                </Row>
            </Container>
        </>
    );


}

export default Signup;