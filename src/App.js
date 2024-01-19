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
    setDropoff(dropoff);
  }

  const [g, setG] = useState();
  const [d, setD] = useState();
  const [e, setE] = useState();
  const [t, setT] = useState();

  const handleOnFilterChange = (gearbox, drive, engine, carTypes) => {
    setG(gearbox);
    setD(drive);
    setE(engine);
    setT(carTypes);
  };

  const carTypesArray = t ? Object.entries(t)
    .filter(([key, value]) => value === true)
    .map(([key]) => key) : null;

  const filterCarType = (car) => {
    if (carTypesArray)
      return carTypesArray.length === 0 ? true : carTypesArray.includes(car.car_type);
    return true;  
  };


  const filterCarData = (car) => {
    if (!car.specs) {
      return true;
    }

    const gearboxCondition = g !== "gany" ? car.specs.gearbox === g : true;
    const driveCondition = d !== "dany" ? car.specs.drive === d : true;
    const fuelCondition = e !== "eany" ? car.specs.fuel === e : true;

    return gearboxCondition && driveCondition && fuelCondition;
  };

  return (
    <>
      <Header />
      <Filter onDatePick={handlePrice} onSelectPickUp={handleSelectPickUp} onSelectDropOff={handleSelectDropOff} onFilterChange={handleOnFilterChange} />
      <Container style={{ marginBottom: "100px", paddingLeft: "25 px", paddingRight: "25px" }}>
        <Row xs={1} md={2} lg={4}>
          {data.map((car, i) => (
            filterCarData(car) && filterCarType(car) && (
              <Col key={i} style={colStyle}>
                <CarCard
                  data={car}
                  rentDays={rentDays}
                  pickup={pickup}
                  dropoff={dropoff}
                  startdate={startdate}
                  enddate={enddate}
                />
              </Col>
            )
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default App;
