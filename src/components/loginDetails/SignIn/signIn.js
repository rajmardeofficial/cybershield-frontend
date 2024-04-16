import './signin.css'
import { useNavigate } from 'react-router-dom'
const SignIN=()=>{
  const nav=useNavigate()
const  handleNavtoSignUp=()=>{
  nav('/SignUp')
}
return(<>


<div className=' d-flex  custom-size'>
  <div className=' custom-size3 '>
    <h1 >Sign in</h1>
    <div >
      <input type="email" className="input1" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
      <input type="password" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="password" className='input2'/>
      <label className='characters_pass'>At least 8 characters</label>     
    </div>
    <label id="" class=" forgot_pass">Forgot your password</label> 
    <div className=' d-flex justify-content-center '> {/* Modified here */}
      <button className='signInbt' >Sign in</button>
      <button className="signupbt" onClick={handleNavtoSignUp}>Sign up</button>
    </div>
  </div>
  
  <div className=' custom-size2'>
    <div className='  '>
    <h1 className='text-hello'>Hello, Friend!</h1>
    <p className='custom-text '>Enter your personal details and start your journey with us</p>
    <button  onClick={handleNavtoSignUp}>Sign up</button>
    </div>
    
  </div>
</div>



    </>)
}
export default SignIN;