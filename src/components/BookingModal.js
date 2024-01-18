import { Modal, Container, Row, Col } from "react-bootstrap";
import "../style.css";

function BookingModal({data}) {
    return (
        <Modal.Body>
            <h3>{data.name}</h3>
            <Container>
                <Row xs={1} md={2} lg={2}>
                    <Col>
                        <p>Booking...</p>
                    </Col>
                    <Col>
                        <img style={{ width: "100%", marginBottom: "20px" }} alt={data.overview} src={data.image} />
                    </Col>
                </Row>
            </Container>
        </Modal.Body>
    );
}


export default BookingModal;