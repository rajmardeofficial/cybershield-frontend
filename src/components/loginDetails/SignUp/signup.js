import { useNavigate } from "react-router-dom";
import "./signup.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Icon } from "semantic-ui-react";

const SignUp = () => {
  const [fname, setName] = useState();
  const [email, setEmail] = useState();
  const [otp, setOtp] = useState();
  const [password, setpassword] = useState();
  const [phone, setPhone] = useState();
  const nav = useNavigate();
  const [otpCheckFlag, setOtpCheckFlag] = useState(false);

  const handleNavToSignIn = () => {
    nav("/");
  };

  const getOtp = async () => {
    try {
      if (email) {
        const res = await axios.post("http://localhost:8000/user/sendotp", {
          email,
        });
        //setOtp(res)
        console.log(res);
      }
    } catch (e) {
      console.log(e);
      alert("enter valid email");
    }
  };
  console.log(otp);
  const verifyOTP = async () => {
    try {
      if (otp && email) {
        const res = await axios.post("http://localhost:8000/user/verifyotp", {
          email,
          otp,
        });
        res ? setOtpCheckFlag(true) : setOtpCheckFlag(false);
        console.log(res);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleSubmitDetail = async () => {
    try {
      if (fname && email && password && otp && phone) {
        const res = await axios.post("http://localhost:8000/user/register", {
          fname,
          email,
          password,
          otp,
          phone,
        });
        console.log(res);
        localStorage.setItem("userid",res.data._id)
      if (res /*&& otpCheckFlag*/) {
          nav("/skillsDetails");
        }
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <div className=" main_section">
        <div className="signIn_part ">
          <div>
            <h1 className="text-welcome ">Welcome Back!</h1>
            <p className="custom-text_login ">
              Please login your personal info
            </p>
            <button className=" signInBt " onClick={handleNavToSignIn}>
              Sign in
            </button>
          </div>
        </div>
        <div className="signup_part">
          <h1>Sign up</h1>
          <div>
            <input
              type="text"
              className="input_name"
              id="exampleInputEmail1"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              className="input_email"
              id="exampleInputEmail1"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="bt_email_verify" onClick={getOtp}>
              send email to verify
            </button>
            <input
              type="text"
              className="input3"
              id="exampleInputEmail1"
              placeholder="OTP"
              onChange={(e) => setOtp(e.target.value)}
            />
            {otpCheckFlag ? (
              <Icon
                name="check circle"
                size="large"
                color="green"
                className="checkMark"
              />
            ) : (
              <Icon
                name="cancel"
                size="large"
                color="red"
                className="checkMark"
              />
            )}
            <button className="bt_otp_verify" onClick={verifyOTP}>
              send otp to verify
            </button>
            <input
              type="text"
              className="input_phone"
              id="exampleInputEmail1"
              placeholder="phone number"
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="password"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Password"
              className="input4"
              onChange={(e) => setpassword(e.target.value)}
            />

            <label className="character_pass_signup">
              At least 8 characters
            </label>
          </div>

          <div className="d-flex  ">
            <button className="signupBt" onClick={handleSubmitDetail}>
              Sign up
            </button>
            <button className=" signInBt2 " onClick={handleNavToSignIn}>
              Sign in
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
