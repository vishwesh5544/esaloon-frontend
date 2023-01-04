import {Container} from "react-bootstrap";
import AppointmentsTable from "../components/AppointmentsTable";
import NavigationBar from "../components/NavigationBar";


function Dashboard() {
    return (<>
        <NavigationBar/>
        <Container fluid={"md"} className={"p-5"}>

            <AppointmentsTable/>
        </Container>

    </>);
}

export default Dashboard;