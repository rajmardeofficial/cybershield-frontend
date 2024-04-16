import './chatadvt.css'
import AdcvtCard from './advctCard';
const ChatWAdvct=()=>{
    
    const advctList = [
        { id: 1, name: "Samri Thakur", image: "advct.jpg", education: "Information Security, Compliance Management", language: "English, Hindi, Marathi", price: "5/min",tick:true },
        { id: 2, name: "Samri Thakur", image: "advct.jpg", education: "Information Security, Compliance Management", language: "English, Hindi, Marathi", price: "5/min"},
        { id: 3, name: "Samri Thakur", image: "advct.jpg", education: "Information Security, Compliance Management", language: "English, Hindi, Marathi", price: "5/min",tick:true }, { id: 1, name: "Samri Thakur", image: "advct.jpg", education: "Information Security, Compliance Management", language: "English, Hindi, Marathi", price: "5/min",tick:true }, { id: 1, name: "Samri Thakur", image: "advct.jpg", education: "Information Security, Compliance Management", language: "English, Hindi, Marathi", price: "5/min",tick:true }, { id: 2, name: "Samri Thakur", image: "advct.jpg", education: "Information Security, Compliance Management", language: "English, Hindi, Marathi", price: "5/min"},{ id: 2, name: "Samri Thakur", image: "advct.jpg", education: "Information Security, Compliance Management", language: "English, Hindi, Marathi", price: "5/min"},{ id: 2, name: "Samri Thakur", image: "advct.jpg", education: "Information Security, Compliance Management", language: "English, Hindi, Marathi", price: "5/min"},{ id: 1, name: "Samri Thakur", image: "advct.jpg", education: "Information Security, Compliance Management", language: "English, Hindi, Marathi", price: "5/min",tick:true },
      ];
    return(<>

    <section className="m-auto p-5">
        <div className="sortsearch_section d-flex space-x-4 h-50 ">
           
                <button className='chat_advtBt '>Chat with Advocates</button>
                <p className=''>Available balance: ₹0</p>
                <div className="Rech_filt_sort d-flex">

                <button className=' rechargeBt me-3'>Recharge</button>
                <button className='filterBt me-3'><img src="filter.png" className='h-50 m-auto pe-2'/>Filter</button>
                <button className='sortByBt me-3'><img src="sortdown.svg" className='h-75 m-auto pe-1'/> Sort by</button>
                <div className='search_bar '><img src="search.svg" className='ms-3'/><input type="search" placeholder="Search name.."  className='m-auto search_name  '/></div>
                </div>
           
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