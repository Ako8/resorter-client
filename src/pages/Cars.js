import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../components/Header"
import Filter from "../components/Filter";
import CarCard from "../components/CarCard";
import Footer from "../components/Footer";
import LinkNav from "../components/LinkNav"
import '../style.css';
import { Container, Row, Col, Spinner } from "react-bootstrap";


function App() {

  const [isBigScreen, setIsBigScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsBigScreen(window.innerWidth >= 900);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const contentStyle = {
    fontSize: isBigScreen ? '15px' : '18px',
    fontWeight: "400"
  };


  const colStyle = {
    paddingLeft: '0px',
    paddingRight: '0px'
  }

  const [data, setData] = useState([{}])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api_rent_cars", {
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



  const [startdate, setStartdate] = useState();
  const [enddate, setEnddate] = useState();
  const [rentDays, setRentDays] = useState();
  
  const handlePrice = (startDate, endDate) => {
    const [startDay, startMonth, startYear] = startDate.split("/");
    const [endDay, endMonth, endYear] = endDate.split("/");
    const startActualDate = new Date(startYear, startMonth - 1, startDay);
    const endActualDate = new Date(endYear, endMonth - 1, endDay);
    const timeDifference = endActualDate.getTime() - startActualDate.getTime();
    const daysDifference = timeDifference / (1000 * 3600 * 24) + 1;
  
    setStartdate(startDate);
    setEnddate(endDate);
    setRentDays(daysDifference);
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

  if (!data[0].specs) {
    return (
      <div className="loading-container">
        <div className="image-container">
          <img src={require('../images/logo ai png no bckr.png')} style={{ width: '100px' }} alt="Logo" />
        </div>
        <div className="loading">
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header isBigScreen={isBigScreen} />
      <Filter onDatePick={handlePrice} onSelectPickUp={handleSelectPickUp} onSelectDropOff={handleSelectDropOff} onFilterChange={handleOnFilterChange} />
      <Container style={{ marginBottom: "100px", paddingLeft: "25px", paddingRight: "25px" }}>
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
    </>
  );
}

export default App;
