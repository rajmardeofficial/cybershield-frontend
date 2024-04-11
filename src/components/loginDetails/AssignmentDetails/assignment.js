import { useNavigate } from "react-router-dom"
import './assignment.css'
const Assignment=()=>{
    const nav=useNavigate()
    const handleBack=()=>{
        nav('/othersDetails')
       }
    return(<>
    <section className="m-5 assignmentform w-100">
        <div className="w-75">
            <label>No. of the case you solver</label> <br></br>
            <div class="input-group mb-4 input_css3 ">
                    <select className="form-select h-100" id="inputGroupSelect01">
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
                    <select className="form-select h-100" id="inputGroupSelect01">
                    <option></option>
                    <option value="1">y</option>
                    <option value="2">n</option>
                    <option value="3">m</option>
                    </select>
            </div>
        </div>
        <div className="w-75">
            <label>Case Study:</label> <br></br>
            <label className="num-label mt-2"><h3>1</h3></label> <br></br>
            <textarea rows={4}  cols={50} className='text_area w-100'/> 
            <br></br>
            <label className="num-label mt-4"><h3>2</h3></label> <br></br>
            <textarea rows={4}  cols={50} className='text_area w-100'/> 
        </div>
    </section>
    <div className="next-submit">
        <button className="backBt" onClick={handleBack}>Back</button>
        <button className="nextBt2">Submit</button>
    </div>
    </>)
}

export default Assignment;