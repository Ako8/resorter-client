import { Form, Col, Row, Button, Modal, Container } from "react-bootstrap";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useState } from "react";

function BookingFormModal({ data, handlePage }) {

    const [bookingData, setBookingData] = useState({
        pickupLocation: '',
        pickupTime: '',
        dropOffLocation: '',
        dropOffTime: '',
        firstName: '',
        lastName: '',
        email: '',
        dateOfBirth: '',
        phone: '',
        telegram: false,
        viber: false,
        whatsapp: false,
        adPhone: '',
        adTelegram: false,
        adViber: false,
        adWhatsapp: false,
        comment: '',
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;

        setBookingData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    return (
        <>
            <Modal.Body>
                <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "Arial" }}>
                    <div><h3>{data.name}</h3></div>
                    <div><h4>Total cost: {data.rent_days * data.rent_price}$</h4></div>
                </div>
                <Container style={{ borderTop: "1px solid", padding: "10px" }}>
                    <Form>
                        <Row xs={1} md={2} lg={2} >
                            <Col style={{ paddingBottom: '10px' }}>
                                <Form.Label>Exact pick-up location and time</Form.Label>
                                <Form.Control
                                    name="pickupLocation"
                                    placeholder="Pick-up place *"
                                    value={bookingData.pickupLocation}
                                    onChange={handleInputChange}
                                />
                                <Form.Control
                                    name="pickupTime"
                                    type="time"
                                    placeholder="Drop-off place *"
                                    value={bookingData.pickupTime}
                                    onChange={handleInputChange}
                                />
                            </Col>
                            <Col style={{ paddingBottom: "10px" }}>
                                <Form.Label>Exact Drop-off location and time</Form.Label>
                                <Form.Control
                                    placeholder="Drop-off place *"
                                    name="dropOffLocation"
                                    value={bookingData.dropOffLocation}
                                    onChange={handleInputChange}
                                />
                                <Form.Control
                                    type="time"
                                    name="dropOffTime"
                                    placeholder="Drop-off place *"
                                    value={bookingData.dropOffTime}
                                    onChange={handleInputChange} />

                            </Col>
                            <Col style={{ paddingBottom: "10px" }}>
                                <Form.Label>First name</Form.Label>
                                <Form.Control
                                    name="firstName"
                                    placeholder="Enter your first name *"
                                    value={bookingData.firstName}
                                    onChange={handleInputChange}
                                />
                            </Col>
                            <Col style={{ paddingBottom: "10px" }}>
                                <Form.Label>Last name</Form.Label>
                                <Form.Control
                                    name="lastName"
                                    value={bookingData.lastName}
                                    onChange={handleInputChange}
                                    placeholder="Enter your last name *" 
                                />
                            </Col>
                            <Col style={{ paddingBottom: "10px" }}>
                                <Form.Label>E-mail</Form.Label>
                                <Form.Control
                                    name="email"
                                    type="email" 
                                    placeholder="Enter your e-mail *"
                                    value={bookingData.email}
                                    onChange={handleInputChange}     
                                />
                            </Col>
                            <Col style={{ paddingBottom: "10px" }}>
                                <Form.Label>Date of birth</Form.Label>
                                <Form.Control
                                    name="dateOfBirth"
                                    type="date" 
                                    placeholder="Date of birth *"
                                    value={bookingData.dateOfBirth}
                                    onChange={handleInputChange} />
                            </Col>
                            <Col style={{ paddingBottom: '10px' }}>
                                <Form.Label>Phone number</Form.Label>
                                <PhoneInput
                                    placeholder="Phone *"
                                    value={bookingData.phone}
                                    onChange={(phone) => setBookingData((prevData) => ({ ...prevData, phone }))}
                                    className="form-control"
                                />
                                {bookingData.phone !== '' && (
                                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                                        <div className="form-group" style={{ marginTop: "20px" }}>
                                            <input type="checkbox" id="telegram" disabled={bookingData.phone === ''} />
                                            <label htmlFor="telegram">Telegram</label>
                                        </div>
                                        <div className="form-group" style={{ marginTop: "20px" }}>
                                            <input type="checkbox" id="viber" disabled={bookingData.phone === ''} />
                                            <label htmlFor="viber">Viber</label>
                                        </div>
                                        <div className="form-group" style={{ marginTop: "20px" }}>
                                            <input type="checkbox" id="whatsapp" disabled={bookingData.phone === ''} />
                                            <label htmlFor="whatsapp">Whatsapp</label>
                                        </div>
                                    </div>
                                )}
                            </Col>
                            <Col style={{ paddingBottom: '10px' }}>
                                <Form.Label>Additional phone number</Form.Label>
                                <PhoneInput
                                    placeholder="Additional phone number *"
                                    value={bookingData.adphone}
                                    onChange={(adPhone) => setBookingData((prevData) => ({ ...prevData, adPhone }))}
                                    className="form-control"
                                />
                                {bookingData.adPhone !== '' && (
                                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                                        <div className="form-group" style={{ marginTop: "20px" }}>
                                            <input type="checkbox" id="adtelegram" disabled={bookingData.adPhone === ''} />
                                            <label htmlFor="adtelegram">Telegram</label>
                                        </div>
                                        <div className="form-group" style={{ marginTop: "20px" }}>
                                            <input type="checkbox" id="adviber" disabled={bookingData.adPhone === ''} />
                                            <label htmlFor="adviber">Viber</label>
                                        </div>
                                        <div className="form-group" style={{ marginTop: "20px" }}>
                                            <input type="checkbox" id="adwhatsapp" disabled={bookingData.adPhone === ''} />
                                            <label htmlFor="adwhatsapp">Whatsapp</label>
                                        </div>
                                    </div>
                                )}
                            </Col>
                        </Row>
                        <Form.Label style={{ marginTop: "20px" }}>Comment</Form.Label>
                        <textarea className="form-control" placeholder="Comment *" name="comment" value={bookingData.comment} onChange={handleInputChange} />
                    </Form>
                </Container>
            </Modal.Body>

            <Modal.Footer>
                <p style={{ fontFamily: "Arial" }}>To pay now: {Math.ceil((data.rent_days * data.rent_price) / 100 * 15)}$</p>
                <Button className="continue-to-book-button" variant="primary"  onClick={() => handlePage("payment")}>
                    Continue To Payment
                </Button>
            </Modal.Footer>
        </>
    );
}


export default BookingFormModal;