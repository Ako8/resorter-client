import LinkNav from "../components/LinkNav";
import Footer from "../components/Footer";
import UserInfo from "../components/UserInfo";
import React, { useState, useEffect } from 'react';
import Calendar from "../components/Calendar";
import OrderTable from "../components/OrderTable";
import { Tab, Tabs } from "react-bootstrap";

import "../style.css"



function Dashboard() {

  const [key, setKey] = useState('calendar');

  return (
    <>
      <LinkNav />
      <UserInfo />
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="calendar" title="Calendar">
          <Calendar />
        </Tab>
        <Tab eventKey="table" title="table">
          <OrderTable/>
        </Tab>
      </Tabs>
      <Footer />
    </>
  );


}


export default Dashboard;