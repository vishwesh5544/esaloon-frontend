import {Button, Col, Form, Row} from "react-bootstrap";
import React, {useState} from "react";
import {User} from "../models/User";
import {useNavigate} from "react-router-dom";
import {UserApi} from "../api/user";

function SignupForm() {

    // variables
    const [userDetails, setUserDetails] = useState({} as User);
    const navigate = useNavigate();
    const userApi = new UserApi();

    // methods
    const onSubmit = () => {
        console.log(`userDetails -> ${userDetails.fullName}`);

        navigate("/login");

        // userApi.signUp(userDetails).then().catch();
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        let _data = event.target.value;
        console.log(`${event.target.name} : ${_data}`);
        setUserDetails({...userDetails, [event.target.name]: _data ?? ""})
    }


    // return template
    return (
        <>
            <Form>
                <Form.Group className={"mb-3"} controlId={"formFullName"}>
                    <Form.Control type={"text"} placeholder={"Enter full name"}
                                  name={"fullName"}
                                  onChange={handleChange}></Form.Control>
                </Form.Group>

                <Form.Group className={"mb-3"} controlId={"formPhoneNumber"}>
                    <Form.Control type={"text"} placeholder={"Enter phone number"} name={"phoneNumber"}
                                  onChange={handleChange}></Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" name={"email"} onChange={handleChange}/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" name={"name"} onChange={handleChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out"/>
                </Form.Group>
                <Button variant="primary" onClick={onSubmit}>
                    Submit
                </Button>
            </Form>
        </>

    );


}

export default SignupForm;


