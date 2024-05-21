import { useState } from "react";
import "./signin.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import {
  Dimmer,
  Loader,
} from "semantic-ui-react";
const SignIN = () => {
  const nav = useNavigate();
  const [email, setEmail] = useState();
  const [password, setpassword] = useState();
  const [loader, setLoader] = useState(false);
  const [Error, setError] = useState(false)
 
  const handleNavtoSignUp = () => {
    nav("/SignUp");
  };
  const handleLogin = async () => {
    if (!email && !password) {
      setError(true)
    }
    try {
      if (email && password) {
        const {data} = await axios.post("http://localhost:8000/user/login", {
          email,
          password,
        });
        if (data) {
          const token = data.result.token;
          localStorage.setItem("token", token);
          const userdata = data.result.userValid.fname;
          const userId = data.result.userValid._id;
          localStorage.setItem( "username", userdata);
          localStorage.setItem("userInfo", JSON.stringify(data));
          
          localStorage.setItem("userId", userId);
          console.log(data);
          setLoader(true);
          nav("/");
        } else if(data==null) {
           setError(true);
        }
      }
    } catch (error) {
      console.log(error);
      setError(true)
    }
  };
  return (
    <>
      <div className=" d-flex  custom-size attached">
        <div className=" custom-size3 ">
          <h1>Sign in</h1>
          <div>
            <input
              type="email"
              className="input1"
              aria-describedby="emailHelp"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              aria-describedby="emailHelp"
              placeholder="password"
              className="input2"
              onChange={(e) => setpassword(e.target.value)}
            />
            <label className="characters_pass">At least 8 characters</label>
          </div>
          {loader ? (
            <Dimmer active>
              <Loader size="massive">Loading</Loader>
            </Dimmer>
          ) : null}
          <label className=" forgot_pass">Forgot your password</label>
          <div className=" d-flex justify-content-center ">
            {/* Modified here */}
            <button className="signInbt" onClick={handleLogin}>
              Sign in
            </button>
            <button className="signupbt" onClick={handleNavtoSignUp}>
              Sign up
            </button>
          </div>
        </div>

        <div className=" custom-size2">
          <div className="  ">
            <h1 className="text-hello">Hello, Friend!</h1>
            <p className="custom-text ">
              Enter your personal details and start your journey with us
            </p>
            <button onClick={handleNavtoSignUp}>Sign up</button>
          </div>
        </div>
      </div>
      {Error?<div className="errorMessage">
       
        Incorrect password or email please try again
      
      </div>:null}
    </>
  );
};
export default SignIN;
