import { Button, CircularProgress, Container, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import login from "../../../images/login.png";

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const {registerUser, isLoading} = useAuth();

  const handleOnChnage = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = {...loginData};
    newLoginData[field] = value;
    setLoginData(newLoginData);
  }

  const handleLoginSubmit = (e) => {
      if(loginData.password !== loginData.password2){
          alert('Your password did not match');
          return;
      }  
      
      registerUser(loginData.email, loginData.password)
    e.preventDefault();
  };
    return (
        <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{mt:8}}>
          <Typography variant="body1" gutterBottom>
            Register
          </Typography>
          {!isLoading && <form onSubmit={handleLoginSubmit}>
            <TextField
              sx={{width: '75%', m:1}}
              id="standard-basic"
              label="Your Email"
              type="email"
              name="email"
              onChange={handleOnChnage}
              variant="standard"
            />
            <TextField
              sx={{width: '75%', m:1}}
              id="standard-basic"
              label="Your Password"
              type="password"
              name="password"
              onChange={handleOnChnage}
              variant="standard"
            />
            <TextField
              sx={{width: '75%', m:1}}
              id="standard-basic"
              label="Re-type Your Password"
              type="password"
              name="password2"
              onChange={handleOnChnage}
              variant="standard"
            />
            <Button style={{ backgroundColor: "#37B5BB" }} sx={{width: '75%', m:1}} type="Submit" variant="contained">Register</Button>
            <NavLink style={{textDecoration: 'none'}} to="/login">
            <Button variant="text">Already Registered? Please Login</Button>
            </NavLink>
          </form>}
          {isLoading && <CircularProgress />}
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%" }} src={login} alt="" />
        </Grid>
      </Grid>
    </Container>
    );
};

export default Register;