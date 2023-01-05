import React, {useEffect} from "react";
import BookingApi from "../api/booking";
import {Button, Table} from "react-bootstrap";


function AppointmentsTable() {


    const [appointments, setAppointments] = React.useState([]);
    const bookingApi = new BookingApi();
    const email = localStorage.getItem("email") ?? "";

    useEffect(() => {
        const getData = async () => {
            return await bookingApi.getAppointments(email).then((response) => {
                if (response.data["status_code"] != "404") {
                    console.log(response);
                    setAppointments(response.data["response"]);
                } else {
                    console.log("No records");
                }
            }).catch((error) => {
                console.log(error);
            });
        }
        getData().then().catch((error) => console.log(error));
    }, []);


    const removeAppointment = (email: string, id: string) => {
        bookingApi.deleteAppointment(email, id).then((response) => {
            console.log(response.data);
            window.location.reload();
        }).catch((error) => {
            console.log(error);
        })
    }

    if (appointments.length > 0 || appointments == null) {
        return (<>
            <Table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Timing</th>
                    <th>Date</th>
                    <th>Service</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {
                    appointments.map((appointment) => {
                        return <>
                            <tr>
                                <td>{appointment["id"]}</td>
                                <td>{appointment["time_from"]}</td>
                                <td>{appointment["date"]}</td>
                                <td>{appointment["service"]}</td>
                                <td><Button variant={"danger"}
                                            onClick={() => removeAppointment(appointment["email"], appointment["id"])}>Remove
                                    appointment</Button></td>
                            </tr>
                        </>
                    })
                }

                </tbody>
            </Table>


        </>);
    } else {
        return (<>
            <h3>No appointments found!</h3>
        </>);
    }


}

export default AppointmentsTable;