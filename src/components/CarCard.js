import { Card } from 'react-bootstrap';
import CarModal from './CarModal';
import { useState } from 'react';

function CarCard({ data, rentDays, pickup, dropoff, startdate, enddate}) {

  const [show, setShow] = useState(false);
  
  const handleShow = () => {
    setShow(true);
  }

  const newData = {
    ...data,
    rent_days: rentDays,
    pickup: pickup.value,
    dropoff: dropoff.value,
    startdate: startdate,
    enddate: enddate,
  }

  return (
    <> 
      <Card onClick={handleShow} variant="primary" className="custom-card" style={{ border: '1px solid' }}>
        <div className="img-container">
          <Card.Img style={{ padding: "20px" }} variant="top" src={`data:image/png;base64,${data.images.thumbnail}`} />
        </div>
        <Card.Body>
          <Card.Title>{data.name}</Card.Title>
          <Card.Text style={{ fontSize: "15px", color: "gray" }}>{data.specs.gearbox}, {data.specs.engine}, {data.car_type}</Card.Text>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Card.Text style={{ fontFamily: "Arial" }} >${data.rent_price * rentDays}</Card.Text>
            <Card.Text style={{ fontSize: "15px", fontFamily: "Arial", fontWeight: "550" }}>${data.rent_price} a day</Card.Text>
          </div>
        </Card.Body>
      </Card>
      <CarModal data={newData} show={show} setShow={setShow} />
    </>
  );
}


export default CarCard;