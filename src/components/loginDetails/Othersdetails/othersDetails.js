import { useState } from "react";
import './othersDetails.css';
import { useNavigate } from 'react-router-dom';
const OthersDetails=()=>{
    const [selectedValue, setSelectedValue] = useState('');
    const nav=useNavigate()
    const handleSelectionChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleBack=()=>{
    nav('/skillsDetails')
   }

   const handleNext=()=>{
    nav('/assignment')
   }
    return(<>
<section className="d-flex m-5 w-100 text-centre pt-5 ps-5 othersdetailsform">
    <div className=" section1_other">
        <div>
            <label>Why do you think we should onboard you?</label> <br></br>
            <input type='text' className='input_css2 '/> 
        </div>
        <div>
            <label>Higher Qualification</label>
            <div class=" input_css2">
                <select className="form-select h-100" id="inputGroupSelect01">
                    <option></option>
                    <option value="1">HSC</option>
                    <option value="2">SSC</option>
                    <option value="3">Graduate</option>
                    <option value="4">undergraduate</option>
                </select>
            </div>
        </div> 
        <div>
            <label>Instagram Link</label> <br></br>
            <input type='text' className='input_css2 '/> 
        </div>
     
        <div>
            <label>Linkedin Link</label> <br></br>
            <input type='text' className='input_css2 '/>         
        </div>  
        <div>
            <label>Minimum Earning Expectation from Cybershield India</label> <br></br>
            <input type='text' className='input_css2 '/>            
        </div>
        <div className=''>
            <label>Did anybody refer you to Cybershield India?</label> <br></br>
            <input type='radio' value={"Yes"} checked={selectedValue === 'Yes'} className='me-1' onChange={handleSelectionChange}/> <label className='me-3'>Yes</label>
            <input type='radio' value={"No"} checked={selectedValue === 'No'} className='me-1' onChange={handleSelectionChange}/>  <label>No</label>
        </div>
        </div>
    <div className="section2_others">
        <div >
            <label>Main source of income</label>
            <div class=" input_css2">
                <select className="form-select h-100" id="inputGroupSelect01">
                    <option></option>
                    <option value="1">opt1</option>
                    <option value="2">opt2</option>
                    <option value="3">opt3</option>
                    <option value="4">opt4</option>
                </select>
            </div>
        </div> 
        <div>
            <label>From do you learn cybershield/law’s</label> <br></br>
            <input type='text' className='input_css2 '/> 
        </div>
        <div>
            <label>Facebook Link</label> <br></br>
            <input type='text' className='input_css2'/> 
        </div>
        <div>
            <label>Link</label> <br></br>
            <input type='text' className='input_css2'/> 
        </div>
        <div>
            <label>Long Bio</label> <br></br>
            <textarea rows={4}  cols={50} className='text_area '/> 
        </div>
    </div>
        
    </section>
    <div className="next-back">
        <button className="backBt" onClick={handleBack}>Back</button>
        <button className="nextBt2" onClick={handleNext}>Next</button>
    </div>
    </>)
}

export default OthersDetails;