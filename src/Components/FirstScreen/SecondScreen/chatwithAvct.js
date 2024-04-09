import './chatadvt.css'
import AdcvtCard from './advctCard';
const ChatWAdvct=()=>{
    
    const advctList = [
        { id: 1, name: "Samri Thakur", image: "./advct.jpg", education: "Information Security, Compliance Management", language: "English, Hindi, Marathi", price: "5/min",tick:true },
        { id: 2, name: "Samri Thakur", image: "./advct.jpg", education: "Information Security, Compliance Management", language: "English, Hindi, Marathi", price: "5/min",tick:true},        { id: 2, name: "Samri Thakur", image: "./advct.jpg", education: "Information Security, Compliance Management", language: "English, Hindi, Marathi", price: "5/min",tick:true},        { id: 2, name: "Samri Thakur", image: "./advct.jpg", education: "Information Security, Compliance Management", language: "English, Hindi, Marathi", price: "5/min",tick:true},        { id: 2, name: "Samri Thakur", image: "./advct.jpg", education: "Information Security, Compliance Management", language: "English, Hindi, Marathi", price: "5/min",tick:true},
      ];
    return(<>

    <section className="m-auto p-5">
        <div style={{display:"flex",justifyContent:"center",width:'90%',gap:"10px",marginLeft:"6%"}}>
           
                <button className='chat_advtBt ' style={{   display: "flex",
    justifyContent: "center",
    alignItems: "center"}}>Chat with Advocates</button>
    <div style={{marginTop:"1%"}}>
                <h5>Available balance: ₹0</h5></div>
                

                <button className=' rechargeBt me-3'>Recharge</button>
                <button className='filterBt me-3'><img src="./filter.png" className='h-50 m-auto pe-2'/>Filter</button>
                <button className='sortByBt me-3'><img src="./sortdown.svg" className='h-75 m-auto pe-1'/> Sort by</button>
                <div className='search_bar '><img src="./search.svg" className='ms-3'/><input type="search" placeholder="Search name.."  className='m-auto search_name  '/></div>
                
           
        </div>
        <div className=' text-centre adcvts_section'>
        {advctList.map(a => (
        <AdcvtCard
          key={a.id}
          advctName={a.name}
          advctImg={a.image}
          advctEdu={a.education}
          advctLang={a.language}
          advctPrice={a.price}
          tick={a.tick}
        />
      ))}
        </div>
    </section>
    </>)
}

export default ChatWAdvct;