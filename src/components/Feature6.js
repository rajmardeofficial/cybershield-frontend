import React from "react";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Feature6 = () => {
  const [showList, setShowList] = useState(false);

  const handleButtonClick = () => {
    setShowList(!showList);
  };
  return (
    <Container fluid className="m-0 p-0">
      <Row className="justify-content-center mx-1 my-3">
        <Col xs={12} md={12}>
          <Card
            style={{
              backgroundColor: "rgba(25, 131, 255, 0.8)",
              color: "white",
              fontFamily: "Ubuntu, sans-serif",
              fontWeight: "700",
              fontSize: "40px",
              lineHeight: "38.9px",
              padding: "10px",
              borderRadius: "9.97px",
              borderColor:"none"
            }}
          >
            <Card.Body>
              <p className="text-center">WHY CYBERSHIELD INDIA ? </p>
              <Card.Text
                style={{
                  fontFamily: "Ubuntu, sans-serif",
                  fontWeight: "400",
                  fontSize: "18px",
                  lineHeight: "23.66px",
                  padding: "10px",
                }}
              >
                Certainly! Here's a blog content piece highlighting why users
                should choose our website for their cyber fraud prevention and
                resolution needs: Title: Why Our Website is Your Ultimate
                Solution for Cyber Fraud Protection In today's digital age,
                where cyber threats lurk around every corner, safeguarding
                yourself against fraud is more critical than ever. With the rise
                of online scams and data breaches, it's essential to have a
                reliable ally in the fight against cybercrime. That's where our
                website comes in, offering a comprehensive suite of features
                designed to protect you from cyber fraud and provide assistance
                in the event of an incident. Here's why you should choose our
                website for all your cybersecurity needs:
                <ul style={{ display: showList ? "block" : "none" }}>
                  <li>
                    User-Friendly Interface: Our website boasts a user-friendly
                    interface designed to make navigating the complexities of
                    cybersecurity simple and intuitive. From user registration
                    to incident reporting and beyond, we prioritize smooth
                    navigation and clear communication to ensure that you can
                    access the tools and resources you need with ease.{" "}
                  </li>
                  <li>
                    Advanced Incident Reporting: Reporting cyber fraud incidents
                    is easier than ever with our platform. Our intuitive
                    incident reporting form guides you through the process
                    step-by-step, allowing you to provide detailed information
                    about the incident quickly and efficiently. With options to
                    save drafts and edit submissions, you can ensure that your
                    report is accurate and complete before submission.
                  </li>
                  <li>
                    AI-Powered Recommendations: Harnessing the power of
                    artificial intelligence, our website provides personalized
                    recommendations tailored to your unique circumstances.
                    Whether you're seeking recovery options, legal support, or
                    preventive measures, our AI-driven insights guide you
                    towards effective solutions, giving you peace of mind in the
                    face of cyber threats.
                  </li>
                  <li>
                    Comprehensive Legal Support: Finding reputable legal support
                    can be challenging in the aftermath of a cyber fraud
                    incident. Our website simplifies the process by offering an
                    integrated directory of legal professionals and advocates.
                    With options to search for experts based on specialization
                    and location, you can quickly find the assistance you need
                    to navigate legal challenges with confidence.
                  </li>
                  <li>
                    Secure and Transparent: We take security and transparency
                    seriously. Our platform implements robust security measures
                    to protect your data and privacy, including encryption,
                    HTTPS protocols, and access controls. Additionally, we
                    provide clear communication about our security features and
                    privacy policies, ensuring that you can trust our platform
                    with your sensitive information.
                  </li>
                  <li>
                    Continuous Improvement: We are committed to continuous
                    improvement and strive to enhance our platform regularly
                    based on user feedback and industry best practices. By
                    gathering insights through feedback forms and user
                    satisfaction surveys, we identify areas for improvement and
                    implement updates and enhancements to ensure that our
                    platform remains at the forefront of cybersecurity
                    solutions.
                  </li>
                  <li>
                    Accessible Anytime, Anywhere: Whether you're at home or on
                    the go, our website is accessible across devices and
                    platforms. With responsive design and optimized performance,
                    you can access critical resources whenever and wherever you
                    need them, giving you the flexibility to protect yourself
                    from cyber threats no matter where you are.
                  </li>
                </ul>
              </Card.Text>
              <Button
                variant="light"
                style={{ color: "rgba(25, 131, 255, 0.8)", float: "right" }}
                onClick={handleButtonClick}
              >
                {showList ? "View less" : "Read more"}
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Feature6;
