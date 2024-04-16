import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#6d6a6a", borderRadius:'50px', fontSize:'54px', width:'20px' }}
      onClick={onClick}
    />
  );
}



function CardCarousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    initialSlide: 0,
    
   
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <Container fluid style={{ padding:'25px', backgroundColor:'#F0F0F0' }}>
    <div className="slider-container"  style={{ width: '80rem', margin: 'auto' }}>
      <div  className="text-center mb-4">
      <h1>LATEST FROM BLOG</h1>
      <p>Top Advocate/Cyberexpert 24 * 7 Customer Support Happy To Help</p>
      </div>
      
      <Slider {...settings}>
        <div className="d-flex justify-content-center">
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



        </div>
        <div className="d-flex justify-content-center">
        <Card style={{ width: '18rem', position: 'relative', borderTopLeftRadius: '18px', borderTopRightRadius: '18px' }}>
  <Card.Img variant="top" src="carousel_images/image6.png" />
  <div style={{ position: 'absolute', top: 7, right: 7, display: 'flex', alignItems: 'center', backgroundColor: '#BAD5F4', borderRadius: '9px', padding: '2px', paddingRight:'3px',paddingLeft:'3px' }}>
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
        </div>
        <div className="d-flex justify-content-center">
        <Card style={{ width: '18rem', position: 'relative', borderTopLeftRadius: '18px', borderTopRightRadius: '18px' }}>
  <Card.Img variant="top" src="carousel_images/image8.png" />
  <div style={{ position: 'absolute', top: 7, right: 7, display: 'flex', alignItems: 'center', backgroundColor: '#BAD5F4', borderRadius: '9px', padding: '2px', paddingRight:'3px',paddingLeft:'3px' }}>
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
        </div>
        <div>
        <Card style={{ width: '18rem', position: 'relative', borderTopLeftRadius: '18px', borderTopRightRadius: '18px' }}>
  <Card.Img variant="top" src="carousel_images/image7.png" />
  <div style={{ position: 'absolute', top: 7, right: 7, display: 'flex', alignItems: 'center', backgroundColor: '#BAD5F4', borderRadius: '9px', padding: '2px', paddingRight:'3px',paddingLeft:'3px' }}>
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
        </div>
        <div>
        <Card style={{ width: '18rem', position: 'relative', borderTopLeftRadius: '18px', borderTopRightRadius: '18px' }}>
  <Card.Img variant="top" src="carousel_images/image6.png" />
  <div style={{ position: 'absolute', top: 7, right: 7, display: 'flex', alignItems: 'center', backgroundColor: '#BAD5F4', borderRadius: '9px', padding: '2px', paddingRight:'3px',paddingLeft:'3px' }}>
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
        </div>
        <div>
        <Card style={{ width: '18rem', position: 'relative', borderTopLeftRadius: '18px', borderTopRightRadius: '18px' }}>
  <Card.Img variant="top" src="carousel_images/image7.png" />
  <div style={{ position: 'absolute', top: 7, right: 7, display: 'flex', alignItems: 'center', backgroundColor: '#BAD5F4', borderRadius: '9px', padding: '2px', paddingRight:'3px',paddingLeft:'3px' }}>
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
        </div>
      </Slider>
    </div>
    </Container>
  );
}

export default CardCarousel;
