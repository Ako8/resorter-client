import { Form, Col, Row, Button, Modal, Container } from "react-bootstrap";
import "../style.css";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useState } from "react";

function BookingFormModal({ data, handlePage }) {
    const [phone, setPhone] = useState('')
    const [adPhone, setAdPhone] = useState('')
    console.log(adPhone);
    return (
        <>
            <Modal.Body>
                <div style={{ display:"flex", justifyContent:"space-between", fontFamily:"Arial" }}>
                    <div><h3>{data.name}</h3></div>
                    <div><h4>Total cost: {data.rent_days * data.rent_price}$</h4></div>
                </div>
                <Container style={{ borderTop: "1px solid", padding: "10px" }}>
                    <Form>
                        <Row xs={1} md={2} lg={2} >
                            <Col style={{ paddingBottom: "10px" }}>
                                <Form.Label>Exact pick-up location and time</Form.Label>
                                <Form.Control placeholder="Pick-up place *" />
                                <Form.Control type="time" placeholder="Drop-off place *" />
                            </Col>
                            <Col style={{ paddingBottom: "10px" }}>
                                <Form.Label>Exact Drop-off location and time</Form.Label>
                                <Form.Control placeholder="Drop-off place *" />
                                <Form.Control type="time" placeholder="Drop-off place *" />

                            </Col>
                            <Col style={{ paddingBottom: "10px" }}>
                                <Form.Label>First name</Form.Label>
                                <Form.Control placeholder="Enter your first name *" />
                            </Col>
                            <Col style={{ paddingBottom: "10px" }}>
                                <Form.Label>Last name</Form.Label>
                                <Form.Control placeholder="Enter your last name *" />
                            </Col>
                            <Col style={{ paddingBottom: "10px" }}>
                                <Form.Label>E-mail</Form.Label>
                                <Form.Control type="email" placeholder="Enter your e-mail *" />
                            </Col>
                            <Col style={{ paddingBottom: "10px" }}>
                                <Form.Label>Date of birth</Form.Label>
                                <Form.Control type="date" placeholder="Date of birth *" />
                            </Col>
                            <Col style={{ paddingBottom: "10px" }}>
                                <Form.Label>Phone number</Form.Label>
                                <PhoneInput
                                placeholder="Phone *"
                                value={phone}
                                onChange={setPhone}
                                className="form-control" />
                                {phone !== '' && <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
                                    <div className="form-group" style={{ marginTop: "20px" }}>
                                        <input type="checkbox" id="telegram" disabled={phone === ''}/>
                                        <label htmlFor="telegram">Telegram</label>
                                    </div>
                                    <div className="form-group" style={{ marginTop: "20px" }}>
                                        <input type="checkbox" id="viber" disabled={phone === ''}/>
                                        <label htmlFor="viber">Viber</label>
                                    </div>
                                    <div className="form-group" style={{ marginTop: "20px" }}>
                                        <input type="checkbox" id="whatsapp" disabled={phone === ''}/>
                                        <label htmlFor="whatsapp">Whatsapp</label>
                                    </div>
                                </div>}
                            </Col>
                            <Col style={{ paddingBottom: "10px" }}>
                                <Form.Label>Additional phone number</Form.Label>
                                <PhoneInput
                                placeholder="Optional Additional Phone *"
                                value={adPhone}
                                onChange={setAdPhone}
                                className="form-control" />
                                {adPhone !== '' && <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
                                    <div className="form-group" style={{ marginTop: "20px" }}>
                                        <input type="checkbox" id="adtelegram" disabled={adPhone === ''}/>
                                        <label htmlFor="adtelegram">Telegram</label>
                                    </div>
                                    <div className="form-group" style={{ marginTop: "20px" }}>
                                        <input type="checkbox" id="adviber" disabled={adPhone === ''}/>
                                        <label htmlFor="adviber">Viber</label>
                                    </div>
                                    <div className="form-group" style={{ marginTop: "20px" }}>
                                        <input type="checkbox" id="adwhatsapp" disabled={adPhone === ''}/>
                                        <label htmlFor="adwhatsapp">Whatsapp</label>
                                    </div>
                                </div>}
                            </Col>
                            
                        </Row>

                        <Form.Label style={{ marginTop: "20px" }}>Comment</Form.Label>
                        <textarea className="form-control" placeholder="Comment *" />

                    </Form>
                </Container>
            </Modal.Body>

            <Modal.Footer>
                <p style={{ fontFamily:"Arial" }}>To pay now: {Math.ceil((data.rent_days * data.rent_price) / 100 * 15)}$</p>
                <Button className="continue-to-book-button" variant="primary" onClick={() => handlePage("booking")}>
                    Continue To Payment
                </Button>
            </Modal.Footer>
        </>
    );
}


export default BookingFormModal;