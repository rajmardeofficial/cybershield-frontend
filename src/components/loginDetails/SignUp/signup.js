import { useNavigate } from 'react-router-dom'
import './signup.css'

const SignUp=()=>{
  
  const nav=useNavigate()
  const  handleNavtoSkills=()=>{
    nav('/skillsDetails')
  }

  const handleNavToSignIn=()=>{
    nav('/')
  }

return(<>


<div className=' main_section'>
  <div className='signIn_part '>
    <div >
      <h1 className='text-welcome '>Welcome Back!</h1>
      <p className='custom-text_login '>Please login your personal info</p>
     <button className=" signInBt " onClick={handleNavToSignIn}>Sign in</button> 
    </div>
    
  </div>
  <div className='signup_part'>
    <h1 >Sign up</h1>
    <div >
      <input type="text" className="input_name" id="exampleInputEmail1"  placeholder="Name" />
      <input type="number" className="input_phone" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Phone" />
      <input type="number" className="input3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="OTP" />
      <input type="password" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Password" className='input4'/>
      <label className="character_pass_signup">At least 8 characters</label>     
    </div>
    
    <div className='d-flex  '> 
    <button  className="signupBt" onClick={handleNavtoSkills}>Sign up</button>
    <button className=" signInBt2 " onClick={handleNavToSignIn}>Sign in</button>
    </div>
  </div>
  
  
</div>



    </>)
}

export default SignUp;