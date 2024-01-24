import { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { DateRangePicker } from 'react-date-range';
import Select from 'react-select';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

function Filter({ onDatePick, onSelectPickUp, onSelectDropOff, onFilterChange }) {
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
        onDatePick(selectionRange.startDate.toLocaleDateString('en-GB'), selectionRange.endDate.toLocaleDateString('en-GB'));

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
    
    // car filters ######################################################
    const carTypeOptions = [
        { id: 'sedan', label: 'Sedan' },
        { id: 'jeep', label: 'Jeep' },
        { id: 'hetchback', label: 'Hatchback' },
        { id: 'minivan', label: 'Minivan' },
        { id: 'cupe', label: 'Coupe' },
        { id: 'pickup', label: 'Pickup' },
    ];

    const driveOptions = [
        { id: 'dany', label: 'Any' },
        { id: 'fwd', label: 'Front Wheel' },
        { id: 'rwd', label: 'Rear Wheel' },
        { id: '4w', label: '4 Wheel' },
    ];

    const gearBoxOptions = [
        { id: 'gany', label: 'Any' },
        { id: 'Manual', label: 'Manual' },
        { id: 'Automatic', label: 'Automatic' },
    ];

    const engineOptions = [
        { id: 'eany', label: 'Any' },
        { id: 'diesel', label: 'Diesel' },
        { id: 'gasoline', label: 'Gasoline' },
        { id: 'Hybrid', label: 'Electro/Hybrid' },
    ];

    const [gearbox, setGearbox] = useState("gany");
    const [engine, setEngine] = useState("eany");
    const [drive, setDrive] = useState("dany");

    const [carTypes, setCarTypes] = useState({
        sedan: false,
        jeep: false,
        hetchback: false,
        minivan: false,
        cupe: false,
        pickup: false,
    });

    const handleGearboxChange = (arg) => {
        setGearbox(arg);
    };

    const handleEngineChange = (arg) => {
        setEngine(arg);

    };

    const handleDriveChange = (arg) => {
        setDrive(arg);


    };

    const handleCarTypesChange = (id) => {
        setCarTypes((prevCarTypes) => ({
            ...prevCarTypes,
            [id]: !prevCarTypes[id],
        }));

    };

    const handleResetFilter = () => {
        setGearbox("gany");
        setDrive("dany");
        setEngine("eany");
        setCarTypes({
            sedan: false,
            jeep: false,
            hetchback: false,
            minivan: false,
            cupe: false,
            pickup: false,
        });
    }

    onFilterChange(gearbox, drive, engine, carTypes);

    return (
        <Container className="mb-5">
            <div style={{ borderRadius: "5px", width: '100%', marginTop: '20px' }}>
                <Row style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                    <Col
                        style={{
                            borderBottomRightRadius: '0px',
                            borderTopRightRadius: '0px',
                            borderTopLeftRadius: '10px',
                            borderBottomLeftRadius: '0px',
                        }}
                        className='filter-car-button'
                    >
                        <Select options={options} onChange={onSelectPickUp} isSearchable={false} placeholder="Pick-up" />
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
                        <Select options={options} onChange={onSelectDropOff} isSearchable={false} placeholder="Drop-off" />
                    </Col>
                </Row>
                <button className='filter-car-button' style={{ marginLeft:"0" }} onClick={toggleDropdown}>Filter cars</button>
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
                                    <p>Gear box</p>
                                    <div className="new">
                                        {gearBoxOptions.map((gear) => (
                                            <div key={gear.id} className="form-group">
                                                <input
                                                    name="gearbox"
                                                    type="radio"
                                                    id={gear.id}
                                                    checked={gearbox === gear.id}
                                                    onChange={() => handleGearboxChange(gear.id)}
                                                />
                                                <label className='radio-label' htmlFor={gear.id}>{gear.label}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <p>Engine</p>
                                    <div className="new">
                                        {engineOptions.map((eng) => (
                                            <div key={eng.id} className="form-group">
                                                <input
                                                    name="engine"
                                                    type="radio"
                                                    id={eng.id}
                                                    checked={engine === eng.id}
                                                    onChange={() => handleEngineChange(eng.id)}
                                                />
                                                <label className='radio-label' htmlFor={eng.id}>{eng.label}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <p>Drive</p>
                                    <div className="new">
                                        {driveOptions.map((driv) => (
                                            <div key={driv.id} className="form-group">
                                                <input
                                                    name="drive"
                                                    type="radio"
                                                    id={driv.id}
                                                    checked={drive === driv.id}
                                                    onChange={() => handleDriveChange(driv.id)}
                                                />
                                                <label className='radio-label' htmlFor={driv.id}>{driv.label}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <p>Car Type</p>
                                    <div className="new">
                                        {carTypeOptions.map((carType) => (
                                            <div key={carType.id} className="form-group">
                                                <input
                                                    type="checkbox"
                                                    id={carType.id}
                                                    checked={carTypes[carType.id]}
                                                    onChange={() => handleCarTypesChange(carType.id)}
                                                />
                                                <label htmlFor={carType.id}>{carType.label}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Col>

                        </Row>
                        <div style={{ display: "flex", justifyContent: "right", paddingRight: "20px" }}>
                            <Button className='reset-filter-button' variant='outline' onClick={handleResetFilter} style={{ marginTop: "9px", marginLeft: "20px", marginBottom: "20px", backgroundColor: "white", borderRadius: "0", boxShadow: "1px 1px 1px" }} >Reset Filters</Button>
                            <Button className="close-filter-button" variant='outline' onClick={toggleDropdown} style={{ marginTop: "9px", marginLeft: "20px", marginBottom: "20px", backgroundColor: "white", borderRadius: "0", boxShadow: "1px 1px 1px" }} >Close</Button>
                        </div>
                    </div>
                )}
            </div>
        </Container>
    );
}


export default Filter;