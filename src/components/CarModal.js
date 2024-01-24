import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import CarDetailModal from "./CarDetailModal";
import BookingFormModal from "./BookingFormModal";
import PaymentFormModal from "./PaymentFormModal";
import "../style.css";


function CarModal({ show, setShow, data }) {

    const [page, setPage] = useState("details")

    const handlePage = (pageName) => {
        setPage(pageName);
    }


    const activeLink = {
        color: "rgb(40, 93, 158)",
        padding: "5px",
        borderRadius: '5px',
        cursor: "pointer",
        paddingRight: "0",

    }

    const nonActiveLink = {
        padding: "5px",
        paddingRight: "0",
        color: "lightgray",
        cursor: "pointer",

    }

    return (
        <>
            <Modal
                show={show}
                onHide={() => setShow(false)}
                style={{ fontFamily: "Arial" }}
                dialogClassName="modal-lg"
                fullscreen
                className="custom-modal-overlay"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        <p style={{ fontFamily: "sans-serif", fontSize: "15px", margin: '0' }}>
                            <span onClick={() => handlePage("details")} style={page === 'details' ? activeLink : nonActiveLink}>Details</span> {"> "}
                            <span onClick={() => handlePage("booking")} style={page === 'booking' ? activeLink : nonActiveLink}>Booking</span> {"> "}
                            <span onClick={() => handlePage("payment")} style={page === 'payment' ? activeLink : nonActiveLink}>Payment</span>
                        </p>
                    </Modal.Title>
                </Modal.Header>
                    {page === 'details' && <CarDetailModal data={data} handlePage={handlePage}/>}
                    {page === 'booking' && <BookingFormModal data={data} handlePage={handlePage} />}
                    {page === 'payment' && <PaymentFormModal data={data} handlePage={handlePage} />}

                
            </Modal>
        </>
    );
}

export default CarModal;
