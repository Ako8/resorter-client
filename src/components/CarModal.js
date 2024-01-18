import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import CarDetailModal from "./CarDetailModal";
import BookingModal from "./BookingModal";
import "../style.css";


function CarModal({ show, setShow, data }) {

    const [page, setPage] = useState("details")

    const handlePage=(pageName)=>{
        setPage(pageName);
    }


    const activeLink ={
        color:"white",
        backgroundColor: 'green',
        padding:"3px",
        borderRadius:'5px',
        cursor:"pointer",
    }

    const nonActiveLink ={
        color:"lightgray",
        cursor:"pointer",
        
    }

    return (
        <>
            <Modal
                show={show}
                onHide={() => setShow(false)}
                style={{ fontFamily: "Arial" }}
                dialogClassName="modal-lg"
                aria-labelledby="example-custom-modal-styling-title"
                fullscreen
                className="custom-modal-overlay"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                    <p style={{ fontFamily:"sans-serif", fontSize:"15px", margin:'0' }}>
                        <span onClick={() => handlePage("details")} style={page === 'details' ? activeLink : nonActiveLink}>Details</span> {"> " } 
                        <span onClick={() => handlePage("booking")} style={page === 'booking' ? activeLink : nonActiveLink}>Booking</span> {"> "} 
                        <span onClick={() => handlePage("payment")} style={page === 'payment' ? activeLink : nonActiveLink}>Payment</span>
                    </p>
                    </Modal.Title>
                </Modal.Header>
                
                {page === 'details' && <CarDetailModal data={data} />}
                {page === 'booking' && <BookingModal data={data} />}
                {page === 'payment' && <p>Payment...</p>}


                <Modal.Footer>
                    <Button className="continue-to-book-button" variant="primary" onClick={() => handlePage("booking")}>
                        Continue To Book
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CarModal;
