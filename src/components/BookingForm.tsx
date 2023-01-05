import {Button, Form} from "react-bootstrap";
import React, {useState} from "react";
import {User} from "../models/User";
import {useNavigate} from "react-router-dom";
import {UserApi} from "../api/user";
import {toast} from "react-toastify";
import BookingApi from "../api/booking";
import {Appointment} from "../models/Appointment";

function getDates(startDate: any, endDate: any) {
    const dates = []
    let currentDate = startDate
    const addDays = function (days: any) {
        // @ts-ignore
        const date = new Date(this.valueOf())
        date.setDate(date.getDate() + days)
        return date
    }
    while (currentDate <= endDate) {
        dates.push(currentDate)
        currentDate = addDays.call(currentDate, 1)
    }
    return dates
}

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
    const dateNow = new Date();
    const dateAfterSeven = new Date().setDate(dateNow.getDate() + 7)
    const dates = getDates(dateNow, dateAfterSeven)
    const services = ["Hair-cutting", "Hair Colouring", "Hair Styling", "Waxing", "Nail Treatments", "Facial and Skin care treatments",
        "Tanning", "Massage", "Aromatherapy"];

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
                                  type="text" placeholder="Enter time." name={"time_from"} onChange={handleChange}
                                  defaultValue={"09:00"}>
                        {timeSlots.map((slot, index) => {
                                return <option value={slot}>{slot}
                                    <input type={"hidden"} name={"time_from"} value={slot}/>
                                </option>

                            }
                        )}
                    </Form.Control>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDatePicker">
                    {/*<Form.Control type="email" placeholder="Enter email" name={"time_from"} onChange={handleChange}/>*/}
                    <Form.Control as="select"
                                  type="text" placeholder="Enter date." name={"date"} onChange={handleChange}>
                        {dates.map((date, index) => {
                                return <option value={date.toDateString()}>{date.toDateString()}
                                    <input type={"hidden"} name={"date"} value={date.toDateString()}/>
                                </option>

                            }
                        )}
                    </Form.Control>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className={"mb-3"} controlId={"formService"}>
                    <Form.Control as={"select"} type={"Select service"} name={"service"} onChange={handleChange}>
                        {
                            services.map((service, map) => {
                                return <option value={service}>{service}
                                    <input type={"hidden"} name={"service"} value={service}/>
                                </option>
                            })
                        }
                    </Form.Control>
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