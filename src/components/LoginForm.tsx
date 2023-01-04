import {Button, Form} from "react-bootstrap";
import React, {useState} from "react";
import {User} from "../models/User";
import {useNavigate} from "react-router-dom";
import {UserApi} from "../api/user";
import {toast} from "react-toastify";

function LoginForm() {
    // variables
    const [loginDetails, setLoginDetails] = useState({} as User);
    const navigate = useNavigate();
    const userApi = new UserApi();

    // methods
    const onSubmit = () => {

        userApi.login(loginDetails).then((response) => {
            console.log(response.data);
            localStorage.setItem("token", response.data["response"]["token"]);
            localStorage.setItem("email", response.data["response"]["email"]);
            localStorage.setItem("isLoggedIn", "true");
            navigate("/dashboard");
        }).catch((error) => {
            console.log(`Error: ${error}`);
            toast.error(error.message);
        });
    };

    // input value handler
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        let _data = event.target.value;
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
                    <Form.Control type="password" placeholder="Password" name={"password"} onChange={handleChange}/>
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