import React from "react";
import { useState } from "react";
import { FaFacebook, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer style={{ backgroundColor: "black", color: "white" }}>
        <div className="container p-4">
          <div className="row" >
            <div
              className="col-lg-4 col-md-12"
            >
              <h5
                style={{
                  borderBottom: "3px solid white",
                  paddingBottom: "10px",
                }}
              >
                About CyberShieldIndia
              </h5>

              <p>
                At CyberShield India, we offer a lifeline to those affected by
                cybercrime, guiding them through the complexities of post-attack
                procedures with expert assistance and tailored recommendations.
                Our platform seamlessly integrates cutting-edge AI technology
                with the expertise of top cyber security professionals and legal
                advisors to deliver personalized support to each user.
              </p>
            </div>

            <div className="col-lg-4 col-md-12">
              <h5
                style={{
                  borderBottom: "3px solid white",
                  paddingBottom: "10px",
                }}
              >
                Important Links
              </h5>

              <div style={{ color: "white" }}>
                <a href="#" style={{ color: "white", textDecoration: "none" }}>
                  Ai- suggestion
                </a>
                <br />
                <a href="#" style={{ color: "white", textDecoration: "none" }}>
                  Chat with cyber expert/advocate
                </a>
                <br />
                <a href="#" style={{ color: "white", textDecoration: "none" }}>
                  Call with cyber expert/advocate
                </a>
                <br />
                <a href="#" style={{ color: "white", textDecoration: "none" }}>
                  Cyber News
                </a>
                <br />
                <a href="#" style={{ color: "white", textDecoration: "none" }}>
                  Cyber Tips
                </a>
                <br />
                <a href="#" style={{ color: "white", textDecoration: "none" }}>
                  Blogs
                </a>
                <br />
                <a href="#" style={{ color: "white", textDecoration: "none" }}>
                  About Us
                </a>
                <br />
                <a href="#" style={{ color: "white", textDecoration: "none" }}>
                  FAQ
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <h5
                style={{
                  borderBottom: "3px solid white",
                  paddingBottom: "10px",
                }}
              >
                Corporate Links
              </h5>

              <div style={{ color: "white" }}>
                <a href="#" style={{ color: "white", textDecoration: "none" }}>
                  Terms & Conditions
                </a>
                <br />
                <a href="#" style={{ color: "white", textDecoration: "none" }}>
                  Privacy Policy
                </a>
                <br />
                <a href="#" style={{ color: "white", textDecoration: "none" }}>
                  Disclaimer
                </a>
                <br />
                <a href="#" style={{ color: "white", textDecoration: "none" }}>
                  About us
                </a>
                <br />
                <a href="#" style={{ color: "white", textDecoration: "none" }}>
                  Pricing Policy
                </a>
              </div>
            </div>
          
        </div>
        <div className="row" style={{marginTop:'70px',
                  borderBottom: "3px solid white",
                  paddingBottom: "10px",
                }}>
          <div className="col-lg-9 col-md-12" ><span style={{paddingRight:'10px'}}><FaEnvelope  style={{fontSize:'30px'}}/></span>support@cybersheildindia.com</div>
          <div className="col-lg-3 col-md-12 f-icons">
            <div style={{float:"right"}}>
              <span>
                <img
                  src="https://1000logos.net/wp-content/uploads/2017/02/Facebook-Logosu.png"
                  width="68px"
                  height="30px"
                />
              </span>
              <span style={{ marginRight: "14px" }}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/2048px-Instagram_logo_2022.svg.png"
                  width="40px"
                  height="28px"
                />
              </span>
              <span style={{ marginRight: "6px" }}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
                  width="40px"
                  height="28px"
                />
              </span>
              <span>
                <img
                  src="https://pngfre.com/wp-content/uploads/You-Tube-14.png"
                  width="52px"
                  height="56px"
                />
              </span>
            </div>
          </div>
        </div>

        </div>
        
      </footer>
    </>
  );
};

export default Footer;
