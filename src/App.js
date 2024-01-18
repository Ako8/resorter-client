import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Filter from "./components/Filter";
import CarCard from "./components/CarCard";
import Footer from "./components/Footer";
import './style.css';
import { Container, Row, Col } from "react-bootstrap";


function App() {

  const colStyle = {
    paddingLeft: '0px',
    paddingRight: '0px'
  }

  const [data, setData] = useState([{}])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://plankton-app-4ozva.ondigitalocean.app/api_rent_cars", {
          method: 'GET',
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const data = await response.json();
        console.log(data);
        setData(data);
  
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
    document.title = `Resorter - Car Rent`;
  }, []);

  const [rentDays, setRentDays] = useState(0);
  const [startdate, setStartdate] = useState();
  const [enddate, setEnddate] = useState();

  const handlePrice = (startdate, enddate) => {
    setStartdate(startdate);
    setEnddate(enddate);
    const [startDay, startMonth, startYear] = startdate.split("/");
    const [endDay, endMonth, endYear] = enddate.split("/");
    const startActualDate = new Date(startYear, startMonth - 1, startDay);
    const endActualDate = new Date(endYear, endMonth - 1, endDay);
    const timeDifference = endActualDate.getTime() - startActualDate.getTime();
    const daysDifference = timeDifference / (1000 * 3600 * 24) + 1;
    setRentDays(daysDifference)
  };


  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const handleSelectPickUp = (pickup) => {
    setPickup(pickup);
  }
  const handleSelectDropOff = (dropoff) => {
    setPickup(dropoff);
  }


  return (
    <>
      <Header />
      <Filter onDatePick={handlePrice} onSelectPickUp={handleSelectPickUp} onSelectDropOff={handleSelectDropOff} />
      <Container style={{ marginBottom: "100px", paddingLeft: "35px", paddingRight: "25px" }}>
        <Row xs={1} md={2} lg={4}>
          {data.map((car, i) => (
            <Col key={i} style={colStyle}><CarCard data={car} rentDays={rentDays} pickup={pickup} dropoff={dropoff} startdate={startdate} enddate={enddate} /></Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default App;
