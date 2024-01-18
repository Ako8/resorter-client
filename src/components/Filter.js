import { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { DateRangePicker } from 'react-date-range';
import Select from 'react-select';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

function Filter({ onDatePick, onSelectPickUp, onSelectDropOff }) {

    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(today.getDate() + 2); 

    const endDate = new Date(today);
    endDate.setDate(today.getDate() + 15); 

    const [selectionRange, setSelectionRange] = useState({
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
        color: 'lightgreen',
    });

    const handleSelect = (ranges) => {
        setSelectionRange(ranges.selection);
    };

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const options = [
        { value: 'Tbilisi,', label: 'Tbilisi' },
        { value: 'Batumi,', label: 'Batumi' },
        { value: 'Kutaisi,', label: 'Kutaisi' },
        { value: 'Zestafoni,', label: 'Zestafoni' },
    ];

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

    const datePickerStyle1 = {
        margin: 'auto',
        marginTop: "15px",
        flexGrow: '0'
    }

    const datePickerStyle2 = {
        margin: '20px',
        marginTop: "15px",
        flexGrow: '0'
    }

    onDatePick(selectionRange.startDate.toLocaleDateString('en-GB'), selectionRange.endDate.toLocaleDateString('en-GB'))

    return (
        <Container className="mb-5">
            <div style={{ borderRadius: "5px", width: '100%', marginTop: '20px' }}>
                <Row style={{ paddingLeft: '15px', paddingRight: '5px' }}>
                    <Col
                        style={{
                            borderBottomRightRadius: '0px',
                            borderTopRightRadius: '0px',
                            borderTopLeftRadius: '10px',
                            borderBottomLeftRadius: '0px',
                        }}
                        className='filter-car-button'
                    >
                        <Select options={options} onChange={onSelectPickUp} placeholder="Pick-up" />
                    </Col>
                    <Col
                        style={{
                            borderBottomRightRadius: '0px',
                            borderTopRightRadius: '10px',
                            borderTopLeftRadius: '0px',
                            borderBottomLeftRadius: '0px',
                        }}
                        className='filter-car-button'
                    >
                        <Select options={options} onChange={onSelectDropOff} placeholder="Drop-off" />
                    </Col>
                </Row>
                <button className='filter-car-button' onClick={toggleDropdown}>Filter Cars</button>
                {isDropdownOpen && (
                    <div style={{ marginTop: "20px", backgroundColor: "#eee" }}>
                        <Row>
                            <Col style={!isBigScreen ? datePickerStyle1 : datePickerStyle2}>
                                <DateRangePicker
                                    ranges={[selectionRange]}
                                    onChange={handleSelect}
                                    minDate={new Date()}
                                />
                            </Col>
                            <Col style={{ display: 'flex', justifyContent: "space-evenly", gap: "3rem", flexWrap: "wrap", marginTop: "30px" }}>
                                <div>
                                    <span>Gear box</span>
                                    <div className="new">
                                        <div className="form-group">
                                            <input type="radio" id="any" name='gearbox' />
                                            <label className='radio-label' htmlFor="any">Any</label>
                                        </div>
                                        <div className="form-group">
                                            <input type="radio" id="manual" name='gearbox' />
                                            <label className='radio-label' htmlFor="manual">Manual</label>
                                        </div>
                                        <div className="form-group">
                                            <input type="radio" id="automatic" name='gearbox' />
                                            <label className='radio-label' htmlFor="automatic">Automatic</label>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <span>Engine</span>
                                    <div className="new">
                                        <div className="form-group">
                                            <input type="checkbox" id="gasoline" />
                                            <label htmlFor="gasoline">Gasoline</label>
                                        </div>
                                        <div className="form-group">
                                            <input type="checkbox" id="diesel" />
                                            <label htmlFor="diesel">Diesel</label>
                                        </div>
                                        <div className="form-group">
                                            <input type="checkbox" id="electrohybrid" />
                                            <label htmlFor="electrohybrid">Electro/Hybrid</label>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <span>Drive</span>
                                    <div className="new">
                                        <div className="form-group">
                                            <input type="checkbox" id="fw" />
                                            <label htmlFor="fw">Front wheel</label>
                                        </div>
                                        <div className="form-group">
                                            <input type="checkbox" id="rw" />
                                            <label htmlFor="rw">Rear wheel</label>
                                        </div>
                                        <div className="form-group">
                                            <input type="checkbox" id="fourw" />
                                            <label htmlFor="fourw">4 wheel </label>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <span>Car Types</span>
                                    <div className="new">
                                        <div className="form-group">
                                            <input type="checkbox" id="sedan" />
                                            <label htmlFor="sedan">Sedan</label>
                                        </div>
                                        <div className="form-group">
                                            <input type="checkbox" id="jeep" />
                                            <label htmlFor="jeep">Jeep</label>
                                        </div>
                                        <div className="form-group">
                                            <input type="checkbox" id="hetchback" />
                                            <label htmlFor="hetchback">Hetchback</label>
                                        </div>
                                        <div className="form-group">
                                            <input type="checkbox" id="minivan" />
                                            <label htmlFor="minivan">Minivan</label>
                                        </div>
                                        <div className="form-group">
                                            <input type="checkbox" id="cupe" />
                                            <label htmlFor="cupe">Cupe</label>
                                        </div>
                                        <div className="form-group">
                                            <input type="checkbox" id="pickup" />
                                            <label htmlFor="pickup">Pickup</label>
                                        </div>
                                    </div>
                                </div>

                            </Col>
                        </Row>
                        <Button variant='outline' onClick={toggleDropdown} style={{ marginLeft: "20px", marginBottom: "20px", backgroundColor: "white", borderRadius: "0", boxShadow: "1px 1px 1px" }} >Close</Button>
                    </div>
                )}
            </div>
        </Container>
    );
}


export default Filter;