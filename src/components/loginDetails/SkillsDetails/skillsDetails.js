
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';
import './skills.css'

const SkillDetail=()=>{

const [selectedImage, setSelectedImage] = useState(null);
const nav=useNavigate()

//for radio button
const [selectedValue, setSelectedValue] = useState('');
  const handleSelectionChange = (event) => {
    setSelectedValue(event.target.value);
  };

  //for upload image
const handleImageChange = (event) => {
  const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
};

//for date of birth
  const [selectedDate, setSelectedDate] = useState(null);
  const [date, setDate] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const handleDateChange = date => {
    setSelectedDate(date);
    const formattedDate = date ? date.getDate() : '';
    const formattedYear = date ? date.getFullYear() : '';
    const formattedMonth = date ? date.getMonth() : '';
    setYear(formattedYear);
    setDate(formattedDate);
    setMonth(formattedMonth)
  };

  //next button event
   const handleNavToOtherDetails=()=>{
    nav('/othersDetails')
   }
    return(<>
<section className='skills-form '>

    {/*profile upload below*/}
    <div className="container text-centre ">
        <div className="row justify-content-md-center ">
            
            <div className="col col-lg-1 px-2 text-centre container img_section">
                <span className=''>

                <img src={selectedImage?selectedImage:"user.svg"} alt="your profile" className={selectedImage?"img-fluid rounded-circle bg-secondary-subtle mb-2 ":"img-fluid rounded-circle bg-secondary-subtle p-2  "} /> <br></br>
                </span>
                <label htmlFor="file-input" className="custom-file-upload bg-body fw-bold mt-2">Upload Photo</label>
                <input type="file" id="file-input" name="ImageStyle" aria-label="upload" style={{display:'none'}} onChange={handleImageChange}/>  
                                                            
            </div>
            <div className='row text-centre justify-content-md-center ms-5 mt-3 fw-bold'>
                <div className='col col-lg-3 img_note'>
                    Note-Image must be less than 5 MB
                </div>
            </div>
            
        </div>
        
    </div>
    {/*input form below*/}
    <div className='container text-centre form1'>
        <div className=' section1'>
            {/*gender input below*/}
            <div className=' '>
                <label>Gender</label>
                <div class=" input_css">
                    <select className="form-select h-100" id="inputGroupSelect01">
                    <option></option>
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                    <option value="3">Other</option>
                    </select>
                </div>
            </div>
            <div>
                <label>Which city/state/country do you currently live in?</label> <br></br>
                <input type='text' className='input_css'/>
            </div>
            <div>
                <label>Married Status</label> <br></br>
                <div class=" input_css">
                    <select className="form-select h-100" id="inputGroupSelect01">
                    <option></option>
                    <option value="1">Married</option>
                    <option value="2">Unmarried</option>
                    <option value="3">Widow</option>
                    </select>
                </div>
            </div>
            <div>
                <label>Add Specialization</label> <br></br>
                <div class=" input_css">
                    <select className="form-select h-100" id="inputGroupSelect01">
                    <option></option>
                    <option value="1">opt1</option>
                    <option value="2">opt2</option>
                    <option value="3">opt3</option>
                    </select>
                </div>
            </div>
            <div>
                <label>Experience in years</label> <br></br>
                <input type='text' className='input_css'/>
            </div>
            <div>
                <label>How many hours you can contribute daily?</label> <br></br>
                <input type='text' className='input_css'/>
            </div>
            
           
        </div> 
        <div className=' section2'>
            <div className=''>
                <label>DOB</label> 
                <div className='d-flex input-css date_input'>
                  <label className=" h-100 date-add2" htmlFor="date-add"><img src="calendar.svg" className='img-date' alt="select date"/></label>
                    <DatePicker selected={selectedDate} onChange={handleDateChange} dateFormat="dd" className=" date-add3" id="date-add" />
                    <input value={month} className='date-add3' readOnly/>
                    <input value={year} className='date-add4' readOnly/>
                </div>
           
            </div>
            <div className=' mt-2'>
        
                <label>Pincode</label> <br></br>
                <input type='text' className='input_section2 '/>
         
            </div>
            <div className=''>
                <label>Primary Skill</label> <br></br>
                <div class="dropdown_section2 ">
                    <select className="form-select h-100" id="inputGroupSelect01">
                    <option></option>
                    <option value="1">opt1</option>
                    <option value="2">opt2</option>
                    <option value="3">opt3</option>
                    </select>
                </div>
            </div>
            <div>
                <label>Language</label> <br></br>
                <div class=" dropdown_section2">
                    <select className="form-select h-100" id="inputGroupSelect01">
                    <option></option>
                    <option value="1">opt1</option>
                    <option value="2">opt2</option>
                    <option value="3">opt3</option>
                    </select>
                </div>
            </div>
            <div>
                <label>How many hours you can contribute daily?</label> <br></br>
                <input type='text' className='input_section2'/> 
            </div>
            <div className=''>
                <label>Are you working on any other online platform?</label> <br></br>
                <input type='radio' value={"Yes"} checked={selectedValue === 'Yes'} className='me-1' onChange={handleSelectionChange}/> <label className='me-3'>Yes</label>
                <input type='radio' value={"No"} checked={selectedValue === 'No'} className='me-1' onChange={handleSelectionChange}/>  <label>No</label>
            </div>
        </div>     
    </div>
    <div className='btn-section'>

    <button className='nextBt' onClick={handleNavToOtherDetails}>Next</button>
    </div>
</section>
    </>)
}

export default SkillDetail;