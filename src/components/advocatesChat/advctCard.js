import { useState } from "react"

const AdcvtCard=({advctName,advctImg,advctEdu,advctLang,advctPrice,tick})=>{
    const [bluetick,setBlueTick]=useState(false)
   
    return(<>
    <div className=" flex-col text-centre adct_card shadow-lg">
        <div className=""><img src={advctImg} alt={advctName} className="advctimg_size"/>{tick?<img src="tick.png" className="blueTick"/>:null}</div>
        <div><img src="Stars.jpg"/></div>
        <h2>{advctName}</h2>
        <p className="text-centre">{advctEdu}</p>
        <p className="text-centre">{advctLang}</p>
        <div className="charge_chatbt ">
            <p className="d-flex pt-1 pe-2 text-secondary"><img src="rupee.svg" className="h-25"/>{advctPrice}</p>
            <button className="chatBt ms-3">Chat</button>
        </div>
    </div>
    </>)
}

export default AdcvtCard;