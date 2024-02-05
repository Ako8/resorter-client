import UserInfo from "../components/UserInfo";
import React, { useState, useEffect } from 'react';
import Calendar from "../components/Calendar";
import OrderTable from "../components/OrderTable";
import { Tab, Tabs } from "react-bootstrap";
import Icon from "react-crud-icons";



function Dashboard() {

  const [key, setKey] = useState('calendar');


  const [data, setData] = useState([{}])
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/orders/car", {
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
    document.title = `Resorter - Dashboard`;
  }, []);

  return (
    <>
      <UserInfo />
      <Tabs
        style={{ marginTop:"20px" }}
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="calendar" title="Calendar">
          <Calendar/>
        </Tab>
        <Tab eventKey="table" title="Table">
          <OrderTable/>
        </Tab>
      </Tabs>
    </>
  );


}


export default Dashboard;