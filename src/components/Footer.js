import React from 'react';

function Footer() {
    return (
        <footer
            id="foot"
            className="text-center text-lg-start text-white"
            style={{ backgroundColor: 'rgb(33, 37, 41)', textAlign: 'left'}}
        >
            {/* Section: Social media */}
            <section className="d-flex justify-content-between p-2" style={{ backgroundColor: '#0079bf' }}>
                {/* Left */}
                <div>
                    <span>Follow us on social networks:</span>
                </div>
                {/* Left */}
                {/* Right */}
                <div>
                    <a href="#" className="text-white me-4">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="text-white me-4">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="text-white me-4">
                        <i className="fab fa-google"></i>
                    </a>
                    <a href="#" className="text-white me-4">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="text-white me-4">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="#" className="text-white me-4">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            </section>
            <section className="">
                <div className="container text-left text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold">Resorter</h6>
                            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                            <p style={{ color: 'rgba(255,255,255,0.54)' }}>In addition to finding the perfect home and car, explore our range of services designed to make your life easier. From grooming tips to community events, we are committed to providing a comprehensive platform to meet all your needs.</p>
                        </div>
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold">Required links</h6>
                            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                            <p>
                                <a href="http://Resorter.onrender.com" style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.54)' }}>
                                    Home
                                </a>
                            </p>
                            <p>
                                <a href="http://Resorter.onrender.com" style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.54)' }}>
                                    Georgian Regions
                                </a>
                            </p>
                            <p>
                                <a href="http://Resorter.onrender.com" style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.54)' }}>
                                    Terms
                                </a>
                            </p>
                            <p>
                                <a href="http://Resorter.onrender.com" style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.54)' }}>
                                    About us
                                </a>
                            </p>
                            <p>
                                <a href="http://Resorter.onrender.com" style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.54)' }}>
                                    Blogs
                                </a>
                            </p>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold">Required links</h6>
                            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                            <p>
                                <a href="http://Resorter.onrender.com" style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.54)' }}>
                                    Dashboard
                                </a>
                            </p>
                            <p>
                                <a href="http://Resorter.onrender.com" style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.54)' }}>
                                    Rent a House
                                </a>
                            </p>
                            <p>
                                <a href="http://Resorter.onrender.com" style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.54)' }}>
                                    Rent a Car
                                </a>
                            </p>
                            <p>
                                <a href="http://Resorter.onrender.com" style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.54)' }}>
                                    Help
                                </a>
                            </p>
                        </div>
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold">Contact</h6>
                            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                            <p>
                                <i className="fas fa-home mr-3"></i> Tbilisi, Zaghesi
                            </p>
                            <p>
                                <i className="fas fa-envelope mr-3"></i> resorter2023@gmail.com
                            </p>
                            <p>
                                <i className="fas fa-phone mr-3"></i> + 01 234 567 88
                            </p>
                            <p>
                                <i className="fas fa-print mr-3"></i> + 01 234 567 89
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2023 Copyright:&nbsp;
                <a className="text-white" href="http://Resorter.onrender.com">
                    Resorter.com
                </a>
            </div>
        </footer>
    );
};

export default Footer;
