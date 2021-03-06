import { Button, CircularProgress, Container, Grid, TextField, Typography, Alert } from "@mui/material";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import login from "../../../images/login.png";

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const {authError, user, registerUser, isLoading} = useAuth();
    const navigate = useNavigate();

  const handleOnBlur = e => {
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
      
      registerUser(loginData.email, loginData.password, loginData.name, navigate)
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
              label="Your Name"
              name="name"
              onBlur={handleOnBlur}
              variant="standard"
            />
            <TextField
              sx={{width: '75%', m:1}}
              id="standard-basic"
              label="Your Email"
              type="email"
              name="email"
              onBlur={handleOnBlur}
              variant="standard"
            />
            <TextField
              sx={{width: '75%', m:1}}
              id="standard-basic"
              label="Your Password"
              type="password"
              name="password"
              onBlur={handleOnBlur}
              variant="standard"
            />
            <TextField
              sx={{width: '75%', m:1}}
              id="standard-basic"
              label="Re-type Your Password"
              type="password"
              name="password2"
              onBlur={handleOnBlur}
              variant="standard"
            />
            <Button style={{ backgroundColor: "#37B5BB" }} sx={{width: '75%', m:1}} type="Submit" variant="contained">Register</Button>
            <NavLink style={{textDecoration: 'none'}} to="/login">
            <Button variant="text">Already Registered? Please Login</Button>
            </NavLink>
          </form>}
          {isLoading && <CircularProgress />}
          {user?.email && <Alert severity="success">User Created Successfully!</Alert>}
          {authError && <Alert severity="error">{authError}</Alert>}
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%" }} src={login} alt="" />
        </Grid>
      </Grid>
    </Container>
    );
};

export default Register;