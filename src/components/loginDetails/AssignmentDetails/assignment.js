import { useNavigate } from "react-router-dom";
import "./assignment.css";
import { useState } from "react";
import axios from "axios";
const Assignment = () => {
  const nav = useNavigate();
  const [Noofcase, setNoofcase] = useState();
  const [fulltimeJob, setfulltimeJob] = useState();
  const [caseStudy1, setcaseStudy1] = useState();
  const [caseStudy2, setcaseStudy2] = useState();
  const handleBack = () => {
    nav("/othersDetails");
  };

  const sendDatatoBackend = async () => {
    try {
      const userId = localStorage.getItem("userid");
      const res = await axios.post(
        `http://localhost:8000/users/${userId}/asignmentdetails`,
        {
          Noofcase,
          fulltimeJob,
          caseStudy1,
          caseStudy2,
        }
      );
      if (res) {
        nav("/signIn");
      }
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <section className="m-5 assignmentform w-100">
        <div className="w-75">
          <label>No. of the case you solver</label> <br></br>
          <div class="input-group mb-4 input_css3 ">
            <select
              className="form-select h-100"
              id="inputGroupSelect01"
              onChange={(e) => setNoofcase(e.target.value)}
            >
              <option></option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </div>
        <div className="w-75">
          <label>Are you currently walking fulltime job?</label> <br></br>
          <div class="input-group mb-4 input_css3">
            <select
              className="form-select h-100"
              id="inputGroupSelect01"
              onChange={(e) => setfulltimeJob(e.target.value)}
            >
              <option></option>
              <option value="yes">y</option>
              <option value="no">n</option>
              <option value="looking">m</option>
            </select>
          </div>
        </div>
        <div className="w-75">
          <label>Case Study:</label> <br></br>
          <label className="num-label mt-2">
            <h3>1</h3>
          </label>{" "}
          <br></br>
          <textarea
            rows={4}
            cols={50}
            className="text_area w-100"
            onChange={(e) => setcaseStudy1(e.target.value)}
          />
          <br></br>
          <label className="num-label mt-4">
            <h3>2</h3>
          </label>{" "}
          <br></br>
          <textarea
            rows={4}
            cols={50}
            className="text_area w-100"
            onChange={(e) => setcaseStudy2(e.target.value)}
          />
        </div>
      </section>
      <div className="next-submit">
        <button className="backBt" onClick={handleBack}>
          Back
        </button>
        <button className="nextBt2" onClick={sendDatatoBackend}>
          Submit
        </button>
      </div>
    </>
  );
};

export default Assignment;
