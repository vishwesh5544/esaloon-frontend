import NavigationBar from '../components/NavigationBar';
import ServicesCarousel from "../components/ServicesCarousel";
import {Container, Row} from "react-bootstrap";
import TimingsTable from "../components/TimingsTable";

function Home() {

    return (
        <>
            <NavigationBar/>
            <Container fluid={"md"} className={"p-2"}>
                <ServicesCarousel/>
            </Container>
            <Container fluid={"md"} className={"p-2"}>
                <h3>Our Timings are below!</h3>
                <br/>
                <TimingsTable/>
            </Container>
        </>
    );
}

export default Home;