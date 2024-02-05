import { Modal, Container, Row, Col, Button, Carousel } from "react-bootstrap";
import { useState } from "react";

function CarDetailModal({ data, handlePage }) {
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    const specifications = Object.entries(data.specs);
    const firstHalf = specifications.slice(0, Math.ceil(specifications.length / 2.4));

    const [specs, setSpecs] = useState(firstHalf);
    const [isCollapsed, setCollapsed] = useState(true);

    const handleSpecs = () => {
        setCollapsed(!isCollapsed)
        if (isCollapsed) {
            setSpecs(specifications)
        } else {
            setSpecs(firstHalf)
        }
    };

    const bookingCost = Math.ceil((data.rent_days * data.rent_price) / 100 * 15);

    const formatDateRange = (startDateString, endDateString) => {
        const [startDay, startMonth, startYear] = startDateString.split('/');
        const [endDay, endMonth, endYear] = endDateString.split('/');

        const startDate = new Date(`${startYear}-${startMonth}-${startDay}`);
        const endDate = new Date(`${endYear}-${endMonth}-${endDay}`);

        const startMonthName = startDate.toLocaleDateString('en-US', { month: 'long' });
        const endMonthName = endDate.toLocaleDateString('en-US', { month: 'long' });

        const formattedDateRange = `${startMonthName} ${startDate.getDate()} — ${endMonthName} ${endDate.getDate()}`;

        return formattedDateRange;
    };

    const renderSpecifications = () => {
        return (
            <>
                <tbody>
                    {specs.map(([key, value]) => (
                        <tr key={key}>
                            <td style={{ padding: "10px 0px 10px 0px", fontSize: "15px", borderBottom: "0.1px solid gray" }} ><strong>{capitalizeFirstLetter(key)}</strong></td>
                            <td style={{ paddingRight: "10px", textAlign: "right", fontSize: "15px", fontWeight: "100", borderBottom: "1px solid gray" }} >{value}</td>
                        </tr>
                    ))}
                </tbody>
            </>
        );
    };

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    const renderImagesCarousel = () => {
        return (
            <Carousel activeIndex={index} onSelect={handleSelect}>
                {data.images.images.map((image, idx) => (
                    <Carousel.Item key={idx}>
                        <img
                            className="d-block w-100"
                            src={`data:image/png;base64,${image}`}
                            alt={`Image ${idx + 1}`}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
        );
    };

    return (
        <>
            <Modal.Body>
                <h3>{data.name}</h3>
                <Container style={{ borderTop: "1px solid", padding: "10px" }}>
                    <Row xs={1} md={2} lg={2}>
                        <Col><h3 style={{ fontWeight: "700", fontSize: "20px" }} >Specifications</h3>
                            <table style={{ width: "100%" }}>
                                {renderSpecifications()}
                            </table>
                            <p className="see-more" style={{ paddingTop: "15px", color: "green", cursor: "pointer", textDecoration: "green" }} onClick={handleSpecs} >See More Specifications...</p>
                        </Col>
                        <Col>
                            {renderImagesCarousel()}
                            <h3 style={{ fontWeight: "700", fontSize: "26px", borderBottom: "1px solid", paddingBottom: "10px" }} >Cost</h3>
                            <table style={{ width: "100%" }}>
                                <tbody>
                                    <tr>
                                        <td style={{ fontWeight: "600", fontSize: "18px" }}>Rent for {data.rent_days} days</td>
                                        <td style={{ textAlign: "right", fontSize: "18px" }}>{data.rent_days * data.rent_price}$</td>
                                    </tr>
                                    <tr style={{ borderBottom: "2px solid" }}>
                                        <td>{data.pickup} {formatDateRange(data.startdate, data.enddate)}</td>
                                        <td style={{ paddingBottom: "20px" }}></td>
                                    </tr>
                                    <tr>
                                        <td style={{ fontWeight: "400", fontSize: "18px" }}>TPL</td>
                                        <td style={{ textAlign: "right", fontSize: "18px" }}>0$</td>
                                    </tr>
                                    <tr style={{ borderBottom: "2px solid" }}>
                                        <td style={{ fontWeight: "400", fontSize: "18px" }}>Free cancellation</td>
                                        <td style={{ textAlign: "right", fontSize: "18px" }}>0$</td>
                                    </tr>
                                    <tr>
                                        <td style={{ fontWeight: "400", fontSize: "18px" }}>Total</td>
                                        <td style={{ textAlign: "right", fontSize: "18px" }}>{data.rent_days * data.rent_price}$</td>
                                    </tr>
                                    <tr>
                                        <td style={{ fontWeight: "400", fontSize: "18px" }}>To pay now</td>
                                        <td style={{ textAlign: "right", fontSize: "18px" }}>{(bookingCost.toFixed(1))}$</td>
                                    </tr>
                                </tbody>
                            </table>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button className="continue-to-book-button" variant="primary" onClick={() => handlePage("booking")}>
                    Continue To Booking
                </Button>
            </Modal.Footer>
        </>
    );
}


export default CarDetailModal;