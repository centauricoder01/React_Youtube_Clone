import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import "./SignUp.css";
import Login from "../Login/Login";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const usenavigate = useNavigate();

  // GETTING THE FORM DATA
  const [formstate, setFormstate] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log("I am submit");
    localStorage.setItem("userInfo", JSON.stringify(formstate));
    usenavigate("/login");
  };

  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormstate({
      ...formstate,
      [name]: value,
    });
  };
  let localStoragedata = JSON.parse(localStorage.getItem("userInfo")) || [];
  if (localStoragedata.length !== 0) {
    console.log("Yes");
    return <Login />;
  } else {
    console.log("NO");
  }

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
            <p className="login_title">Sign Up</p>
            <p className="login_subtitle">to continue to YouTube</p>
          </div>

          {/* Input Part of the website  */}
          <form className="login_form" onSubmit={handlesubmit}>
            <TextField
              id="outlined"
              label="Name"
              variant="outlined"
              className="login_Input"
              type="text"
              name="name"
              value={formstate.name}
              onChange={handlechange}
              required
            />
            <TextField
              id="outlined-bas"
              label="Gmail"
              variant="outlined"
              className="login_Input"
              type="email"
              name="email"
              value={formstate.email}
              onChange={handlechange}
              required
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              className="login_Input"
              type="password"
              name="password"
              value={formstate.password}
              onChange={handlechange}
              required
            />
            <Button variant="contained" className="login_button" type="submit">
              Sign Up
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
