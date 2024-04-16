import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

function Cards() {
    const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <Container className='my-3'>
    <Form.Group controlId="search">
  <div style={{ position: 'relative', backgroundColor: '#F0F0F0', borderRadius: '5px' }}>
    <img src="carousel_images/search_icon.png" alt="Search" style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)', width: '20px', height: 'auto', zIndex: '1' }} />
    <Form.Control
      type="text"
      placeholder="   Let's find what you are looking for..."
      value={searchTerm}
      onChange={handleSearchChange}
      style={{ paddingLeft: '30px', borderRadius: '5px', border: 'none', backgroundColor: 'transparent' }} // Adjust padding to accommodate the icon
    />
  </div>
</Form.Group>



      <Row className="my-3">
        <Col md={3} className="d-flex justify-content-center">
          <Card style={{ width: '18rem', position: 'relative', borderTopLeftRadius: '18px', borderTopRightRadius: '18px' }}>
            <Card.Img variant="top" src="carousel_images/image7.png" />
            <div style={{ position: 'absolute', top: 7, right: 7, display: 'flex', alignItems: 'center', backgroundColor: '#BAD5F4', borderRadius: '9px', padding: '2px', paddingRight: '3px', paddingLeft: '3px' }}>
              <img src="carousel_images/Eye.png" alt="Eye" style={{ width: '20px', height: 'auto', marginRight: '5px' }} />
              <span>7633</span>
            </div>
            <Card.Body>
              <Card.Text style={{ fontSize: '12px', fontWeight: 'bold' }}>
                U.S. Court Orders NSO Group to Hand Over Pegasus Spyware Code to WhatsApp <br /><br />
                <span>Aditya H. Chine </span><span style={{ float: 'right' }}>Feb 14, 2024</span>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="d-flex justify-content-center">
          <Card style={{ width: '18rem', position: 'relative', borderTopLeftRadius: '18px', borderTopRightRadius: '18px' }}>
            <Card.Img variant="top" src="carousel_images/image6.png" />
            <div style={{ position: 'absolute', top: 7, right: 7, display: 'flex', alignItems: 'center', backgroundColor: '#BAD5F4', borderRadius: '9px', padding: '2px', paddingRight: '3px', paddingLeft: '3px' }}>
              <img src="carousel_images/Eye.png" alt="Eye" style={{ width: '20px', height: 'auto', marginRight: '5px' }} />
              <span>7633</span>
            </div>
            <Card.Body>
              <Card.Text style={{ fontSize: '12px', fontWeight: 'bold' }}>
                U.S. Court Orders NSO Group to Hand Over Pegasus Spyware Code to WhatsApp <br /><br />
                <span>Aditya H. Chine </span><span style={{ float: 'right' }}>Feb 14, 2024</span>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="d-flex justify-content-center">
          <Card style={{ width: '18rem', position: 'relative', borderTopLeftRadius: '18px', borderTopRightRadius: '18px' }}>
            <Card.Img variant="top" src="carousel_images/image8.png" />
            <div style={{ position: 'absolute', top: 7, right: 7, display: 'flex', alignItems: 'center', backgroundColor: '#BAD5F4', borderRadius: '9px', padding: '2px', paddingRight: '3px', paddingLeft: '3px' }}>
              <img src="carousel_images/Eye.png" alt="Eye" style={{ width: '20px', height: 'auto', marginRight: '5px' }} />
              <span>7633</span>
            </div>
            <Card.Body>
              <Card.Text style={{ fontSize: '12px', fontWeight: 'bold' }}>
                U.S. Court Orders NSO Group to Hand Over Pegasus Spyware Code to WhatsApp <br /><br />
                <span>Aditya H. Chine </span><span style={{ float: 'right' }}>Feb 14, 2024</span>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="d-flex justify-content-center">
          <Card style={{ width: '18rem', position: 'relative', borderTopLeftRadius: '18px', borderTopRightRadius: '18px' }}>
            <Card.Img variant="top" src="carousel_images/image7.png" />
            <div style={{ position: 'absolute', top: 7, right: 7, display: 'flex', alignItems: 'center', backgroundColor: '#BAD5F4', borderRadius: '9px', padding: '2px', paddingRight: '3px', paddingLeft: '3px' }}>
              <img src="carousel_images/Eye.png" alt="Eye" style={{ width: '20px', height: 'auto', marginRight: '5px' }} />
              <span>7633</span>
            </div>
            <Card.Body>
              <Card.Text style={{ fontSize: '12px', fontWeight: 'bold' }}>
                U.S. Court Orders NSO Group to Hand Over Pegasus Spyware Code to WhatsApp <br /><br />
                <span>Aditya H. Chine </span><span style={{ float: 'right' }}>Feb 14, 2024</span>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>


      <Row className="my-3">
        <Col md={3} className="d-flex justify-content-center">
          <Card style={{ width: '18rem', position: 'relative', borderTopLeftRadius: '18px', borderTopRightRadius: '18px' }}>
            <Card.Img variant="top" src="carousel_images/image7.png" />
            <div style={{ position: 'absolute', top: 7, right: 7, display: 'flex', alignItems: 'center', backgroundColor: '#BAD5F4', borderRadius: '9px', padding: '2px', paddingRight: '3px', paddingLeft: '3px' }}>
              <img src="carousel_images/Eye.png" alt="Eye" style={{ width: '20px', height: 'auto', marginRight: '5px' }} />
              <span>7633</span>
            </div>
            <Card.Body>
              <Card.Text style={{ fontSize: '12px', fontWeight: 'bold' }}>
                U.S. Court Orders NSO Group to Hand Over Pegasus Spyware Code to WhatsApp <br /><br />
                <span>Aditya H. Chine </span><span style={{ float: 'right' }}>Feb 14, 2024</span>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="d-flex justify-content-center">
          <Card style={{ width: '18rem', position: 'relative', borderTopLeftRadius: '18px', borderTopRightRadius: '18px' }}>
            <Card.Img variant="top" src="carousel_images/image6.png" />
            <div style={{ position: 'absolute', top: 7, right: 7, display: 'flex', alignItems: 'center', backgroundColor: '#BAD5F4', borderRadius: '9px', padding: '2px', paddingRight: '3px', paddingLeft: '3px' }}>
              <img src="carousel_images/Eye.png" alt="Eye" style={{ width: '20px', height: 'auto', marginRight: '5px' }} />
              <span>7633</span>
            </div>
            <Card.Body>
              <Card.Text style={{ fontSize: '12px', fontWeight: 'bold' }}>
                U.S. Court Orders NSO Group to Hand Over Pegasus Spyware Code to WhatsApp <br /><br />
                <span>Aditya H. Chine </span><span style={{ float: 'right' }}>Feb 14, 2024</span>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="d-flex justify-content-center">
          <Card style={{ width: '18rem', position: 'relative', borderTopLeftRadius: '18px', borderTopRightRadius: '18px' }}>
            <Card.Img variant="top" src="carousel_images/image8.png" />
            <div style={{ position: 'absolute', top: 7, right: 7, display: 'flex', alignItems: 'center', backgroundColor: '#BAD5F4', borderRadius: '9px', padding: '2px', paddingRight: '3px', paddingLeft: '3px' }}>
              <img src="carousel_images/Eye.png" alt="Eye" style={{ width: '20px', height: 'auto', marginRight: '5px' }} />
              <span>7633</span>
            </div>
            <Card.Body>
              <Card.Text style={{ fontSize: '12px', fontWeight: 'bold' }}>
                U.S. Court Orders NSO Group to Hand Over Pegasus Spyware Code to WhatsApp <br /><br />
                <span>Aditya H. Chine </span><span style={{ float: 'right' }}>Feb 14, 2024</span>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="d-flex justify-content-center">
          <Card style={{ width: '18rem', position: 'relative', borderTopLeftRadius: '18px', borderTopRightRadius: '18px' }}>
            <Card.Img variant="top" src="carousel_images/image7.png" />
            <div style={{ position: 'absolute', top: 7, right: 7, display: 'flex', alignItems: 'center', backgroundColor: '#BAD5F4', borderRadius: '9px', padding: '2px', paddingRight: '3px', paddingLeft: '3px' }}>
              <img src="carousel_images/Eye.png" alt="Eye" style={{ width: '20px', height: 'auto', marginRight: '5px' }} />
              <span>7633</span>
            </div>
            <Card.Body>
              <Card.Text style={{ fontSize: '12px', fontWeight: 'bold' }}>
                U.S. Court Orders NSO Group to Hand Over Pegasus Spyware Code to WhatsApp <br /><br />
                <span>Aditya H. Chine </span><span style={{ float: 'right' }}>Feb 14, 2024</span>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>


      <Row className="my-3">
        <Col md={3} className="d-flex justify-content-center">
          <Card style={{ width: '18rem', position: 'relative', borderTopLeftRadius: '18px', borderTopRightRadius: '18px' }}>
            <Card.Img variant="top" src="carousel_images/image7.png" />
            <div style={{ position: 'absolute', top: 7, right: 7, display: 'flex', alignItems: 'center', backgroundColor: '#BAD5F4', borderRadius: '9px', padding: '2px', paddingRight: '3px', paddingLeft: '3px' }}>
              <img src="carousel_images/Eye.png" alt="Eye" style={{ width: '20px', height: 'auto', marginRight: '5px' }} />
              <span>7633</span>
            </div>
            <Card.Body>
              <Card.Text style={{ fontSize: '12px', fontWeight: 'bold' }}>
                U.S. Court Orders NSO Group to Hand Over Pegasus Spyware Code to WhatsApp <br /><br />
                <span>Aditya H. Chine </span><span style={{ float: 'right' }}>Feb 14, 2024</span>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="d-flex justify-content-center">
          <Card style={{ width: '18rem', position: 'relative', borderTopLeftRadius: '18px', borderTopRightRadius: '18px' }}>
            <Card.Img variant="top" src="carousel_images/image6.png" />
            <div style={{ position: 'absolute', top: 7, right: 7, display: 'flex', alignItems: 'center', backgroundColor: '#BAD5F4', borderRadius: '9px', padding: '2px', paddingRight: '3px', paddingLeft: '3px' }}>
              <img src="carousel_images/Eye.png" alt="Eye" style={{ width: '20px', height: 'auto', marginRight: '5px' }} />
              <span>7633</span>
            </div>
            <Card.Body>
              <Card.Text style={{ fontSize: '12px', fontWeight: 'bold' }}>
                U.S. Court Orders NSO Group to Hand Over Pegasus Spyware Code to WhatsApp <br /><br />
                <span>Aditya H. Chine </span><span style={{ float: 'right' }}>Feb 14, 2024</span>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="d-flex justify-content-center">
          <Card style={{ width: '18rem', position: 'relative', borderTopLeftRadius: '18px', borderTopRightRadius: '18px' }}>
            <Card.Img variant="top" src="carousel_images/image8.png" />
            <div style={{ position: 'absolute', top: 7, right: 7, display: 'flex', alignItems: 'center', backgroundColor: '#BAD5F4', borderRadius: '9px', padding: '2px', paddingRight: '3px', paddingLeft: '3px' }}>
              <img src="carousel_images/Eye.png" alt="Eye" style={{ width: '20px', height: 'auto', marginRight: '5px' }} />
              <span>7633</span>
            </div>
            <Card.Body>
              <Card.Text style={{ fontSize: '12px', fontWeight: 'bold' }}>
                U.S. Court Orders NSO Group to Hand Over Pegasus Spyware Code to WhatsApp <br /><br />
                <span>Aditya H. Chine </span><span style={{ float: 'right' }}>Feb 14, 2024</span>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="d-flex justify-content-center">
          <Card style={{ width: '18rem', position: 'relative', borderTopLeftRadius: '18px', borderTopRightRadius: '18px' }}>
            <Card.Img variant="top" src="carousel_images/image7.png" />
            <div style={{ position: 'absolute', top: 7, right: 7, display: 'flex', alignItems: 'center', backgroundColor: '#BAD5F4', borderRadius: '9px', padding: '2px', paddingRight: '3px', paddingLeft: '3px' }}>
              <img src="carousel_images/Eye.png" alt="Eye" style={{ width: '20px', height: 'auto', marginRight: '5px' }} />
              <span>7633</span>
            </div>
            <Card.Body>
              <Card.Text style={{ fontSize: '12px', fontWeight: 'bold' }}>
                U.S. Court Orders NSO Group to Hand Over Pegasus Spyware Code to WhatsApp <br /><br />
                <span>Aditya H. Chine </span><span style={{ float: 'right' }}>Feb 14, 2024</span>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Cards;
