import SignupForm from "../components/SignupForm";
import NavigationBar from "../components/NavigationBar";
import Container from "react-bootstrap/Container";
import {Button, Col, Form, Row} from "react-bootstrap";
import SaloonImg from "../images/carousel/saloon-2.jpg";

function Signup() {

    return (
        <>
            <NavigationBar/>
            <Container fluid={"md"} className={"p-5"}>
                <Row>
                    <Col md="3">
                        <SignupForm/>
                    </Col>
                    <Col md={"3"}>
                        <img src={SaloonImg} style={{height: 350, width: 700}}/>
                    </Col>
                </Row>
            </Container>
        </>
    );


}

export default Signup;