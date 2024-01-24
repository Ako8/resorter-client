import { Container, Card } from 'react-bootstrap';


function Header({ isBigScreen }) {
    return (
        <section>
            <Card className="bg-dark text-white" style={{ borderRadius: '0', position: 'relative' }}>
                {isBigScreen && <Card.Img style={{ maxHeight: '400px', objectFit: 'cover' }} src="https://www.thetimes.co.uk/travel/wp-content/uploads/sites/6/2022/09/HERO_Panoramic-view-of-the-old-town-of-Tbilisi-Georgia_Credit_GettyImages-1012486898.jpg" alt="Card image" />}
                {!isBigScreen && <Card.Img style={{ height: '250px', objectFit: 'cover' }} src="https://www.thetimes.co.uk/travel/wp-content/uploads/sites/6/2022/09/HERO_Panoramic-view-of-the-old-town-of-Tbilisi-Georgia_Credit_GettyImages-1012486898.jpg" alt="Card image" />}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
                    }}
                />
                <Card.ImgOverlay>
                    <Container>
                        {isBigScreen && <img src={require('../images/logo ai png no bckr.png')} style={{ width: '100px', marginTop: "50px" }}/>}
                        {isBigScreen && <Card.Title><span style={{ fontSize: "30px",  }}>Resorter.com</span></Card.Title>}
                        <Card.Title style={{ fontSize: "35px", marginTop: '40px', fontWeight: '700' }}>Rent a Car in Georgia</Card.Title>
                        <Card.Text style={{ fontSize: "18px" }}>
                            for a seamless travel experience. Explore at your own pace and make the most of your journey. Book now!
                        </Card.Text>
                    </Container>
                </Card.ImgOverlay>

            </Card>
        </section>
    );
}


export default Header;