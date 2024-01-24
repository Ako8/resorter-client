import React, { useState, useEffect } from 'react';
import "../style.css"
import { Table, OverlayTrigger, Tooltip, Spinner, Tabs, Tab } from "react-bootstrap";


function Calendar({ data, setData }) {


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
          <Table responsive bordered className="calendar-container" style={{ fontSize: '15px' }}>
            <thead className="calendar">
              <tr>
                <th className='th-cars' style={{ position: 'sticky', left: '0', background: 'white', zIndex: '1', minWidth:"150px" }}>Days:</th>
                {data.calendar_days.map((day, index) => (
                  <th style={{ backgroundColor: `rgba(150, 149, 149, ${day / 100})` }} key={index}>{day}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.rent_days.map((car, index) => (
                <tr key={index}>
                  <td style={{minWidth: '100%', fontWeight: 'bold', position: 'sticky', left: '0', background: 'white', zIndex: '1' }}>{car.name}</td>
                  {car.rent_list.map((day, i) => (
                    <OverlayTrigger
                      placement="top"
                      overlay={
                        <Tooltip>
                          <li style={{ textAlign: 'left' }}>{`Date: January - ${data.calendar_days[i]}`}</li>
                          <li style={{ textAlign: 'left' }}>{`Car: ${car.name}`}</li>
                        </Tooltip>
                      }
                    >
                      <td className={`day day-cell ${day !== 0 ? 'rented' : day === -1 ? 'not-rented' : ''}`} key={i}></td>
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