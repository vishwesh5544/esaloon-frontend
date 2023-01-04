import Carousel from 'react-bootstrap/Carousel';
import SlideImgZero from '../images/carousel/saloon-0.jpg';
import SlideImgOne from '../images/carousel/saloon-1.jpg';
import SlideImgTwo from '../images/carousel/saloon-2.jpg';
import SlideImgThree from '../images/carousel/saloon-3.jpg';
import {Button, Card} from "react-bootstrap";
import {useNavigate} from "react-router-dom";


function ServicesCarousel() {

    const services = ["Hair-cutting", "Hair Colouring", "Hair Styling", "Waxing", "Nail Treatments", "Facial and Skin care treatments",
        "Tanning", "Massage", "Aromatherapy"];

    const images = [SlideImgZero, SlideImgOne, SlideImgTwo, SlideImgThree];

    const navigate = useNavigate();

    const navigateTo = () => {
        const isLoggedIn = localStorage.getItem("isLoggedIn") ?? "false"
        if (isLoggedIn === "true") {
            navigate('/book-appointment');
        } else if (isLoggedIn === "false") {
            alert("Login to access this feature");
        } else {
            alert("Login to access this feature");
        }
    }

    return (
        <Carousel style={{maxWidth: 1200, maxHeight: 600, margin: "auto"}} variant={"dark"}>
            {
                services.map((service, index) => {
                    return <Carousel.Item>
                        <img src={images[Math.floor(Math.random() * images.length)]}
                             style={{maxWidth: 1400, maxHeight: 580}}
                             className="d-block w-100 h-50g"/>
                        <Carousel.Caption>
                            <Card style={{width: '18rem', height: '10rem'}}>
                                <Card.Body>
                                    <Card.Title>{service}</Card.Title>
                                    <Button variant={"primary"} size={"sm"} onClick={navigateTo}>Book
                                        appointment!</Button>
                                </Card.Body>
                            </Card>
                        </Carousel.Caption>
                    </Carousel.Item>
                })
            }
        </Carousel>
    );
}

export default ServicesCarousel;