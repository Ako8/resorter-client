import { Table, OverlayTrigger, Tooltip, Spinner, Tabs, Tab } from "react-bootstrap";
import Icon from "react-crud-icons";


function Calendar() {

  return (
    <div className='calendar-table' style={{ overflowY: 'auto' }}>
      <Table responsive bordered className="calendar-container" style={{ fontSize: '11px' }}>
        <thead className="calendar">
          <tr>
            <th className='th-cars' style={{ position: 'sticky', left: '0', background: 'white', zIndex: '1', minWidth: "150px" }}>Days:</th>
              <th></th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td className='car-name' style={{ minWidth: '100%', fontWeight: 'bold', position: 'sticky', left: '0', zIndex: '1' }}>
              <div className='edit-icon-div'>
              <Icon
                name="edit"
                className="edit-icon"
              />
              </div>
              </td>
                <OverlayTrigger
                  placement="top"
                  overlay={
                    <Tooltip>
                      <li style={{ textAlign: 'left' }}>Date</li>
                      <li style={{ textAlign: 'left' }}>Date</li>
                    </Tooltip>
                  }
                >
                  <td></td>
                </OverlayTrigger>
            </tr>
        </tbody>
      </Table>
    </div>
  );

}


export default Calendar;