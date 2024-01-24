import { Form, Col, Row, Button, Modal, Container } from "react-bootstrap";


function PaymentFormModal( {data, handlePage }){
    return(
        <>
            <Modal.Body>
                <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "Arial" }}>
                    <div><h3>{data.name}</h3></div>
                    <div><h4>Total cost: {data.rent_days * data.rent_price}$</h4></div>
                </div>
                <Container style={{ borderTop: "1px solid", padding: "10px" }}>
                    <Form>
                        <Row xs={1} md={2} lg={2} >

                            <Col style={{ paddingBottom: "10px" }}>
                                <Form.Label>Rame</Form.Label>
                                <Form.Control placeholder="Rame *" />
                            </Col>
                            <Col style={{ paddingBottom: "10px" }}>
                                <Form.Label>ID</Form.Label>
                                <Form.Control placeholder="ID *" />
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </Modal.Body>

            <Modal.Footer>
                <p style={{ fontFamily: "Arial" }}>To pay now: {Math.ceil((data.rent_days * data.rent_price) / 100 * 15)}$</p>
                <Button className="continue-to-book-button" variant="primary" onClick={() => handlePage("booking")}>
                    Pay
                </Button>
            </Modal.Footer>
        </>
    );
}


export default PaymentFormModal;