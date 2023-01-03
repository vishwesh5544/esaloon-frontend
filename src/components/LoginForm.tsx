import {Button, Form} from "react-bootstrap";
import React, {useState} from "react";
import {User} from "../models/User";
import {useNavigate} from "react-router-dom";
import {UserApi} from "../api/user";

function LoginForm() {
    // variables
    const [loginDetails, setLoginDetails] = useState({} as User);
    const navigate = useNavigate();
    const userApi = new UserApi();

    // methods
    const onSubmit = () => {
        console.log(`userDetails -> ${loginDetails.fullName}`);

        navigate("/dashboard");

        // userApi.signUp(loginDetails).then().catch();
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        let _data = event.target.value;
        console.log(`${event.target.name} : ${_data}`);
        setLoginDetails({...loginDetails, [event.target.name]: _data ?? ""})
    }

    return (
        <>
            <Form>
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


export default LoginForm;