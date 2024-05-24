import { useState } from "react";
import './othersDetails.css';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
const OthersDetails=()=>{
    const [selectedValue, setSelectedValue] = useState('');
    const nav = useNavigate()
    const [opinion, setOpinion] = useState()
     const [learnLaw, setlearnLaw] = useState();
    const [income, setIncome] = useState()
    const [qualification, setQualification] = useState()
    const [instagramLink, setinstaLink] = useState()
    const [facebookLink, setfacebookLink] = useState()
    const [linkedinLink, setLinkedin] = useState()
    const [link, setLink] = useState()
    const [minEarning, setminEarning] = useState();
    const [bio, setbio] = useState();
     const [refer, setrefer] = useState();
    const handleSelectionChange = (event) => {
    setrefer(event.target.value);
  };

  const handleBack=()=>{
    nav('/skillsDetails')
   }

  

  const sendDatatoBackend = async () => {
    try {
    
      const userId=localStorage.getItem("userid")
      const res = await axios.post(
        `http://localhost:8000/users/${userId}/onboard`,
        {
          opinion,
          learnLaw,
          income,
          qualification,
          instagramLink,
          facebookLink,
          linkedinLink,
          link,
          minEarning,
          bio,
          refer,
        }
      );
      if (res) {
        nav("/assignment");
      }
      console.log(res)
    } catch (e) {
      console.log(e)
      }
    }
    return (
      <>
        <section className="d-flex m-5 w-100 text-centre pt-5 ps-5 othersdetailsform">
          <div className=" section1_other">
            <div>
              <label>Why do you think we should onboard you?</label> <br></br>
              <input
                type="text"
                className="input_css2 "
                onChange={(e) => setOpinion(e.target.value)}
              />
            </div>
            <div>
              <label>Higher Qualification</label>
              <div className=" input_css2">
                <select
                  className="form-select h-100"
                  id="inputGroupSelect01"
                  onChange={(e) => setQualification(e.target.value)}
                >
                  <option></option>
                  <option value="HSC">HSC</option>
                  <option value="post graduate">post graduate</option>
                  <option value="Graduate">Graduate</option>
                  <option value="undergraduate">undergraduate</option>
                </select>
              </div>
            </div>
            <div>
              <label>Instagram Link</label> <br></br>
              <input
                type="text"
                className="input_css2 "
                onChange={(e) => setinstaLink(e.target.value)}
              />
            </div>

            <div>
              <label>Linkedin Link</label> <br></br>
              <input
                type="text"
                className="input_css2 "
                onChange={(e) => setLinkedin(e.target.value)}
              />
            </div>
            <div>
              <label>Minimum Earning Expectation from Cybershield India</label>{" "}
              <br></br>
              <input
                type="text"
                className="input_css2 "
                onChange={(e) => setminEarning(e.target.value)}
              />
            </div>
            <div className="">
              <label>Did anybody refer you to Cybershield India?</label>{" "}
              <br></br>
              <input
                type="radio"
                value={"Yes"}
                checked={refer === "Yes"}
                className="me-1"
                onChange={handleSelectionChange}
              />{" "}
              <label className="me-3">Yes</label>
              <input
                type="radio"
                value={"No"}
                checked={refer === "No"}
                className="me-1"
                onChange={handleSelectionChange}
              />{" "}
              <label>No</label>
            </div>
          </div>
          <div className="section2_others">
            <div>
              <label>Main source of income</label>
              <div className=" input_css2">
                <select
                  className="form-select h-100"
                  id="inputGroupSelect01"
                  onChange={(e) => setIncome(e.target.value)}
                >
                  <option></option>
                  <option value="opt1">opt1</option>
                  <option value="opt2">opt2</option>
                  <option value="opt3">opt3</option>
                  <option value="opt4">opt4</option>
                </select>
              </div>
            </div>
            <div>
              <label>From do you learn cybershield/law’s</label> <br></br>
              <input
                type="text"
                className="input_css2 "
                onChange={(e) => setlearnLaw(e.target.value)}
              />
            </div>
            <div>
              <label>Facebook Link</label> <br></br>
              <input
                type="text"
                className="input_css2"
                onChange={(e) => setfacebookLink(e.target.value)}
              />
            </div>
            <div>
              <label>Link</label> <br></br>
              <input
                type="text"
                className="input_css2"
                onChange={(e) => setLink(e.target.value)}
              />
            </div>
            <div>
              <label>Long Bio</label> <br></br>
              <textarea
                rows={4}
                cols={50}
                className="text_area "
                onChange={(e) => setbio(e.target.value)}
              />
            </div>
          </div>
        </section>
        <div className="next-back">
          <button className="backBt" onClick={handleBack}>
            Back
          </button>
          <button className="nextBt2" onClick={sendDatatoBackend}>
            Next
          </button>
        </div>
      </>
    );
}

export default OthersDetails;