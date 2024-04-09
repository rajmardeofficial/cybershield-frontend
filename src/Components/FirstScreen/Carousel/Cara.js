import React from "react";
import Carousel from "react-elastic-carousel";
import "./Cara.css";

const Cara = () => {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
    ];

    const CustomRightArrow = ({ onClick, ...rest }) => {
        const {
            onMove,
            carouselState: { currentSlide, deviceType }
        } = rest;
        // onMove means if dragging or swiping in progress.
        return <button onClick={() => onClick()} style={{ backgroundColor: "white", color: "grey" }}>Next</button>;
    };
    
    return (
        <>
            <div style={{ backgroundColor: "#F0F0F0", height: "500px" }}>
                <h1 style={{ textAlign: "center", color: "#0051FF" }}>Our Advocates</h1>
                <div className="App">
                    <Carousel breakPoints={breakPoints} pagination={false} customRightArrow={<CustomRightArrow />}>
                        <div className='cards'>
                            <img src='../image-2-1@2x.png' alt='Profile' className='profile-image' />
                            <h3>Thomas Bailey</h3>
                            <h4>Health Law</h4>
                        </div>
                        <div className='cards'>
                            <img src='../image-3@2x.png' alt='Profile' className='profile-image' />
                            <h3>Davis Anderson</h3>
                            <h4>Criminal Law</h4>
                        </div>
                        <div className='cards'>
                            <img src='../image-4@2x.png' alt='Profile' className='profile-image' />
                            <h3>Johnson Allen</h3>
                            <h4>Immigration Law</h4>
                        </div>
                        <div className='cards'>
                            <img src='../image-5@2x.png' alt='Profile' className='profile-image' />
                            <h3>Smith Adams</h3>
                            <h4>Cybersecurity Law</h4>
                        </div>
                        <div className='cards'>
                            <img src='../image-5@2x.png' alt='Profile' className='profile-image' />
                            <h3>Smith Adams</h3>
                            <h4>Cybersecurity Law</h4>
                        </div>
                        <div className='cards'>
                            <img src='../image-5@2x.png' alt='Profile' className='profile-image' />
                            <h3>Smith Adams</h3>
                            <h4>Cybersecurity Law</h4>
                        </div>
                        <div className='cards'>
                            <img src='../image-5@2x.png' alt='Profile' className='profile-image' />
                            <h3>Smith Adams</h3>
                            <h4>Cybersecurity Law</h4>
                        </div>
                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default Cara;
