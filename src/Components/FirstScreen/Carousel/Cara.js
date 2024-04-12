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


    
    
    return (
        <>
            <div style={{ backgroundColor: "#F0F0F0", height: "500px" }}>
                <h1 style={{ textAlign: "center", color: "#0051FF" }}>Our Advocates</h1>
                <div className="App">
                    <Carousel breakPoints={breakPoints} pagination={false} renderArrow={({ type, onClick }) => {
                        const arrowType = type === "PREV" ? "prev" : "next";
                        const src = arrowType === "prev" ? "../arrowleft.svg" : "../arrowright.svg"; // Assuming you have arrowRight.svg as well
                        return <img src={src} alt={`Arrow ${arrowType}`} onClick={onClick} style={{cursor:"pointer"}}/>;
                    }}>
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
