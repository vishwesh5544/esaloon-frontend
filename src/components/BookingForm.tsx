import {Button, Form} from "react-bootstrap";
import React, {useState} from "react";
import {User} from "../models/User";
import {useNavigate} from "react-router-dom";
import {UserApi} from "../api/user";
import {toast} from "react-toastify";
import BookingApi from "../api/booking";
import {Appointment} from "../models/Appointment";

function BookingForm() {

    // variables
    const [appointmentDetails, setAppointmentDetails] = useState({} as Appointment);
    const navigate = useNavigate();
    const bookingApi = new BookingApi();

    // methods
    const onSubmit = () => {
        bookingApi.createBooking(appointmentDetails).then((response) => {
            console.log(response);
            alert("Appointment placed successfully");
            navigate("/dashboard");
        }).catch((error) => {
            console.log(`Error: ${error}`);
            toast.error(error.message);
        });
    };

    // input value handler
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        let _data = event.target.value;
        setAppointmentDetails({...appointmentDetails, [event.target.name]: _data ?? ""})
    }

    const timeSlots = []

    for (let i = 9; i < 18; i++) {
        if (i < 9) {
            timeSlots.push(`0${i}:00`, `0${i}:30`)

        } else {
            timeSlots.push(`${i}:00`, `${i}:30`)

        }
    }
    return (
        <>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicTimePicker">
                    {/*<Form.Control type="email" placeholder="Enter email" name={"time_from"} onChange={handleChange}/>*/}
                    <Form.Control as="select"
                                  type="email" placeholder="Enter email" name={"time_from"} onChange={handleChange}>
                        {timeSlots.map((slot, index) => {
                                return <option value={slot}>{slot}
                                    <input type={"hidden"} name={"time_from"} value={slot} onChange={handleChange}/>
                                </option>

                            }
                        )}
                    </Form.Control>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email" name={"email"} onChange={handleChange}/>
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

export default BookingForm;