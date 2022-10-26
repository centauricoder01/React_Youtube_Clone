import { Button, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // GETTING THE DATA FROM THE INPUT BOX

  const [getdata, setGetdata] = useState({
    gmail: "",
    password: "",
  });

  const usenavigate = useNavigate();

  const handlevaluechange = (e) => {
    const { name, value } = e.target;
    setGetdata({
      ...getdata,
      [name]: value,
    });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    let innerdata = JSON.parse(localStorage.getItem("userInfo")) || [];
    if (innerdata.length === 0) {
      alert("we have not signed ");
    } else {
      if (
        innerdata.email === getdata.gmail &&
        innerdata.password === getdata.password
      ) {
        alert("Welcome Back sir.");
        usenavigate("/");
      } else {
        alert("You have entered wrong password");
      }
    }
  };

  return (
    <div>
      <div className="login background_white">
        <div className="login_content">
          <div className="login_wrapper">
            <img
              src="https://cdn2.downdetector.com/static/uploads/logo/Google-new_19.png"
              alt="Google"
              className="login_logo"
            />
            <p className="login_title">Login </p>
            <p className="login_subtitle">to continue to YouTube</p>
          </div>

          {/* Input Part of the website  */}
          <form action="#" className="login_form" onSubmit={handlesubmit}>
            <TextField
              id="outlined"
              label="Gmail"
              variant="outlined"
              className="login_Input"
              type="email"
              name="gmail"
              onChange={handlevaluechange}
              value={getdata.gmail}
              required
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              className="login_Input"
              type="password"
              name="password"
              onChange={handlevaluechange}
              value={getdata.password}
              required
            />
            <Button variant="contained" className="login_button" type="submit">
              Log In
            </Button>
            <p className="Last_para">
              One account. All of Google working for you.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
