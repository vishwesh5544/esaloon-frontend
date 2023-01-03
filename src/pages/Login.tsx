import NavigationBar from "../components/NavigationBar";
import {Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import LoginForm from "../components/LoginForm";

function Login() {
    return (
        <>
            <NavigationBar/>
            <Container fluid={"md"} className={"p-5"}>
                <Row>
                    <Col md="3">
                        <LoginForm/>
                    </Col>
                    <Col>
                        Some image here
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Login;