import { useState } from "react"

const CallCard=({advctName,advctImg,advctEdu,advctLang,advctPrice,tick})=>{
    const [bluetick,setBlueTick]=useState(false)
   
    return(<>
    <div className=" flex-col text-centre adct_card shadow-lg">
        <div className=""><img src={advctImg} alt={advctName} className="advctimg_size"/>{tick?<img src="./tick.png" className="blueTick"/>:null}</div>
        <div><img src="./Stars.jpg"/></div>
        <h2>{advctName}</h2>
        <p className="text-centre">{advctEdu}</p>
        <p className="text-centre">{advctLang}</p>
        <div style={{display:"flex",justifyContent:"center",gap:"10%"}}>
        <div>
            <img src="./rupee.svg" style={{height:"15px"}}/><span style={{height:"20px"}}>{advctPrice}</span>
            
        </div>
        <button style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #479BFF",
    background: "#ffff",
    borderRadius: "4px",
    height: "2rem",
    width: "4rem"
}}>
    Call
</button>
</div>

    </div>
    </>)
}

export default CallCard;