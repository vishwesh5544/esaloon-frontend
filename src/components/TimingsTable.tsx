import {Table} from "react-bootstrap";

function TimingsTable() {


    return (
        <>
            <Table bordered={true}>
                <thead>
                <tr>
                    <th>Days</th>
                    <th>Timings</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Monday</td>
                    <td rowSpan={5} style={{verticalAlign: "middle", textAlign: "center"}}>9:00am to 5:30pm</td>
                </tr>
                <tr>
                    <td>Tuesday</td>
                </tr>
                <tr>
                    <td>Wednesday</td>
                </tr>
                <tr>
                    <td>Thursday</td>
                </tr>
                <tr>
                    <td>Friday</td>
                </tr>
                <tr>
                    <td>Saturday</td>
                    <td>11:00am to 3pm</td>
                </tr>
                <tr>
                    <td>Sunday</td>
                    <td>Closed.</td>
                </tr>
                </tbody>
            </Table>
        </>
    );

}

export default TimingsTable;