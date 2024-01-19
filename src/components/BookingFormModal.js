import { Form, Col, Row } from "react-bootstrap";
import "../style.css";

function BookingFormModal({ data }) {
    return (
        <Form>
            <div style={{ display:"flex" }}>
                <Col>
                    <Form.Control placeholder="First name" />
                </Col>
                <Col>
                    <Form.Control placeholder="Last name" />
                </Col>
            </div>
        </Form>
    );
}


export default BookingFormModal;