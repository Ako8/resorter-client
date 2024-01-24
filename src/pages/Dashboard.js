import UserInfo from "../components/UserInfo";
import React, { useState, useEffect } from 'react';
import Calendar from "../components/Calendar";
import OrderTable from "../components/OrderTable";
import { Tab, Tabs, Button } from "react-bootstrap";
import Icon from "react-crud-icons";



import "../style.css"



function Dashboard() {

  const [key, setKey] = useState('calendar');


  const [data, setData] = useState([{}])
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://plankton-app-4ozva.ondigitalocean.app/api_user_rent_cars", {
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
    document.title = `Resorter - Dashboard`;
  }, []);

  return (
    <>
      <UserInfo />
      <div style={{ marginLeft:"30px", marginTop:"20px", width:"20px" }}>
      <Icon
        name="edit"
      />
      </div>
      <Tabs
        style={{ marginTop:"20px" }}
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="calendar" title="Calendar">
          <Calendar data={data} setData={setData}/>
        </Tab>
        <Tab eventKey="table" title="Table">
          <OrderTable />
        </Tab>
      </Tabs>
    </>
  );


}


export default Dashboard;