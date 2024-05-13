import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import "./skills.css";
import axios from "axios";

const SkillDetail = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [gender, setGender] = useState("");
  const [location, setCity] = useState("");
  const [marriedStatus, setMarriedStatus] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [experienceYears, setExpYears] = useState("");
  const [pincode, setPincode] = useState("");
  const [workingOnOtherPlatforms, setSelectedRadioValue] = useState("");
  const [source, setCyberShieldSource] = useState("");
  const [primarySkill, setPrimarySkill] = useState("");
  const [dailyHours, setContriHours] = useState("");
  const [languages, setLanguage] = useState("");
  const [formError, setFormError] = useState("");
  const nav = useNavigate();
  const handleSelectionChange = (event) => {
    setSelectedRadioValue(event.target.value);
  };

  const [date, setDate] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const formattedDate = date ? date.getDate() : "";
    const formattedYear = date ? date.getFullYear() : "";
    const formattedMonth = date ? date.getMonth() : "";
    setYear(formattedYear);
    setDate(formattedDate);
    setMonth(formattedMonth);
  };
  //for upload image
  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("image", selectedImage);
 const userId = localStorage.getItem("userid");
    try {
      await axios.post(
        `http://localhost:8000/users/${userId}/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Image uploaded successfully");
    } catch (error) {
      console.error("Error uploading image: ", error);
    }
  };
  const validateForm = () => {
    // Validate form fields
    if (
      !gender ||
      !location ||
      !marriedStatus ||
      !primarySkill ||
      !languages ||
      !experienceYears ||
      !dailyHours ||
      !source
    ) {
      setFormError("Please fill in all required fields.");
      return false;
    }
    if (!selectedDate) {
      setFormError("Please select a valid date of birth.");
      return false;
    }
    if (!pincode) {
      setFormError("Please enter a valid 6-digit pincode.");
      return false;
    }

    return true;
  };

  const sendDataToBackend = async () => {
    try {
      if (!validateForm) {
        const userId = localStorage.getItem("userid");

        const res = await axios.post(
          `http://localhost:8000/users/${userId}/skills`,
          {
            gender,
            dateOfBirth: selectedDate.toISOString(),
            location,
            pincode,
            marriedStatus,
            primarySkill,
            specialization,
            languages,
            experienceYears,
            dailyHours,
            source,
            workingOnOtherPlatforms,
          }
        );
        if (res) {
          nav("/othersDetails");
        }
      }
      console.log("Data sent successfully!");
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  return (
    <>
      <section className="skills-form ">
        {/*profile upload below*/}
        <div className="container text-centre ">
          <div className="row justify-content-md-center ">
            <div className="col col-lg-1 px-2 text-centre container img_section">
              <span className="">
                <img
                  src={selectedImage ? selectedImage : "user.svg"}
                  alt="your profile"
                  className={
                    selectedImage
                      ? "img-fluid rounded-circle bg-secondary-subtle mb-2 "
                      : "img-fluid rounded-circle bg-secondary-subtle p-2  "
                  }
                />{" "}
                <br></br>
              </span>
              <label
                className="custom-file-upload bg-body fw-bold mt-2"
                onClick={handleUpload}
              >
                Upload Photos
              </label>
              <input
                type="file"
                onChange={handleImageChange}
              />
            </div>
            <label>{formError}</label>
            <div className="row text-centre justify-content-md-center ms-5 mt-3 fw-bold">
              <div className="col col-lg-3 img_note">
                Note-Image must be less than 5 MB
              </div>
            </div>
          </div>
        </div>
        {/*input form below*/}
        <div className="container text-centre form1">
          <div className=" section1">
            {/*gender input below*/}
            <div className=" ">
              <label>Gender</label>
              <div className=" input_css">
                <select
                  className="form-select h-100"
                  id="inputGroupSelect01"
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option></option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div>
              <label>Which city/state/country do you currently live in?</label>{" "}
              <br></br>
              <input
                type="text"
                className="input_css"
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div>
              <label>Married Status</label> <br></br>
              <div className=" input_css">
                <select
                  className="form-select h-100"
                  id="inputGroupSelect01"
                  onChange={(e) => setMarriedStatus(e.target.value)}
                >
                  <option></option>
                  <option value="Married">Married</option>
                  <option value="Unmarried">Unmarried</option>
                  <option value="Widowed">Widow</option>
                  <option value="Divorced">Divorced</option>
                </select>
              </div>
            </div>
            <div>
              <label>Add Specialization</label> <br></br>
              <div className=" input_css">
                <select
                  className="form-select h-100"
                  id="inputGroupSelect01"
                  onChange={(e) => setSpecialization(e.target.value)}
                >
                  <option></option>
                  <option value="1">opt1</option>
                  <option value="2">opt2</option>
                  <option value="3">opt3</option>
                </select>
              </div>
            </div>
            <div>
              <label>Experience in years</label> <br></br>
              <input
                type="text"
                className="input_css"
                onChange={(e) => setExpYears(e.target.value)}
              />
            </div>
            <div>
              <label>where did you hear about cybershield india?</label>{" "}
              <br></br>
              <input
                type="text"
                className="input_css"
                onChange={(e) => setCyberShieldSource(e.target.value)}
              />
            </div>
          </div>
          <div className=" section2">
            <div className="">
              <label>DOB</label>
              <div className="d-flex input-css date_input">
                <label className=" h-100 date-add2" htmlFor="date-add">
                  <img
                    src="calendar.svg"
                    className="img-date"
                    alt="select date"
                  />
                </label>
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  dateFormat="dd"
                  className=" date-add3"
                  id="date-add"
                />
                <input value={month} className="date-add3" readOnly />
                <input value={year} className="date-add4" readOnly />
              </div>
            </div>
            <div className=" mt-2">
              <label>Pincode</label> <br></br>
              <input
                type="text"
                className="input_section2 "
                onChange={(e) => setPincode(e.target.value)}
              />
            </div>
            <div className="">
              <label>Primary Skill</label> <br></br>
              <div className="dropdown_section2 ">
                <select
                  className="form-select h-100"
                  id="inputGroupSelect01"
                  onChange={(e) => setPrimarySkill(e.target.value)}
                >
                  <option></option>
                  <option value="1">opt1</option>
                  <option value="2">opt2</option>
                  <option value="3">opt3</option>
                </select>
              </div>
            </div>
            <div>
              <label>Language</label> <br></br>
              <div className=" dropdown_section2">
                <select
                  className="form-select h-100"
                  id="inputGroupSelect01"
                  onChange={(e) => setLanguage(e.target.value)}
                >
                  <option></option>
                  <option value="1">opt1</option>
                  <option value="2">opt2</option>
                  <option value="3">opt3</option>
                </select>
              </div>
            </div>
            <div>
              <label>How many hours you can contribute daily?</label> <br></br>
              <input
                type="text"
                className="input_section2"
                onChange={(e) => setContriHours(e.target.value)}
              />
            </div>
            <div>
              <label>Are you working on any other online platform?</label>
              <br></br>
              <input
                type="radio"
                value={"Yes"}
                checked={workingOnOtherPlatforms === "Yes"}
                className="me-1"
                onChange={handleSelectionChange}
              />
              <label className="me-3">Yes</label>
              <input
                type="radio"
                value={"No"}
                checked={workingOnOtherPlatforms === "No"}
                className="me-1"
                onChange={handleSelectionChange}
              />
              <label>No</label>
            </div>
          </div>
        </div>
        <div className="btn-section">
          <button className="nextBt" onClick={sendDataToBackend}>
            Next
          </button>
        </div>
      </section>
    </>
  );
};

export default SkillDetail;
