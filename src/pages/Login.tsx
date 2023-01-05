import NavigationBar from "../components/NavigationBar";
import {Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import LoginForm from "../components/LoginForm";
import SaloonImg from "../images/carousel/saloon-0.jpg";

function Login() {
    return (
        <>
            <NavigationBar/>
            <Container fluid={"md"} className={"p-5"}>
                <Row>
                    <Col md="3">
                        <LoginForm/>
                    </Col>
                    <Col md={"5"}>
                        <img src={SaloonImg} style={{height: 250, width: 600}}/>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Login;