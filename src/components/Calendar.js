import React, { useState, useEffect } from 'react';
import "../style.css"
import { Table, OverlayTrigger, Tooltip, Spinner, Tabs, Tab } from "react-bootstrap";
import Icon from "react-crud-icons";


function Calendar({ data, setData }) {

  const [todaysDay, setTodaysDay] = useState(1);

  useEffect(() => {
    const today = new Date();
    const dayOfMonth = today.getDate();
    const parsedDay = parseInt(dayOfMonth, 10);
    setTodaysDay(parsedDay);
  }, []);


  function getDayFromDateNumber(dateNumber) {
    const gansxvaveba = dateNumber - data.today_ordinal;
    const today = new Date();
    const day = new Date(today);
    day.setDate(today.getDate() + gansxvaveba);
    
    return day.getDate();
  }

  function getDateFromNumber(dateNumber) {
    const gansxvaveba = dateNumber - data.today_ordinal;
    const today = new Date();
    const newDate = new Date(today);
    newDate.setDate(today.getDate() + gansxvaveba);

    const result = {
        year: newDate.getFullYear(),
        month: newDate.getMonth() + 1,
        day: newDate.getDate(),
        weekday: newDate.toLocaleDateString('en-US', { weekday: 'long' })
    };

    return `${result.year}-${result.month}-${result.day} ${result.weekday}`;
}

  if (!data.calendar_days || !data.rent_days) {
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
    <div className='calendar-table' style={{ overflowY: 'auto' }}>
      <Table responsive bordered className="calendar-container" style={{ fontSize: '11px' }}>
        <thead className="calendar">
          <tr>
            <th className='th-cars' style={{ position: 'sticky', left: '0', background: 'white', zIndex: '1', minWidth: "150px" }}>Days:</th>
            {data.calendar_days_digit.map((day, index) => (
              <th
                style={{ backgroundColor: `rgba(150, 149, 149, ${getDayFromDateNumber(day) / 100})` }}
                key={index}
                className={day === todaysDay && index < 10 ? 'today' : ''}
              >
                {getDayFromDateNumber(day)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rent_days.map((car, index) => (
            <tr key={index}>
              <td className='car-name' style={{ minWidth: '100%', fontWeight: 'bold', position: 'sticky', left: '0', zIndex: '1' }}>
              <div style={{ width:"20px", display:"inline-block", marginRight:"7px" }}>
              <Icon
                name="edit"
                className="edit-icon"
              />
              </div>
              {car.name}
              </td>
              {car.rent_list.map((day, i) => (
                <OverlayTrigger
                  key={i}
                  placement="top"
                  overlay={
                    <Tooltip>
                      <li style={{ textAlign: 'left' }}>{`${getDateFromNumber(data.calendar_days_digit[i])}`}</li>
                      <li style={{ textAlign: 'left' }}>{`Car: ${car.name}`}</li>
                    </Tooltip>
                  }
                >
                  <td className={`day day-cell ${day > 0 ? 'rented' : day < 0 ? 'not-rented' : ''}`} key={i}></td>
                </OverlayTrigger>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );

}


export default Calendar;