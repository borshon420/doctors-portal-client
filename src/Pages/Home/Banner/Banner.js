import React from "react";
import Grid from "@mui/material/Grid";
import chair from "../../../images/chair.png";
import bg from "../../../images/bg.png";
import { Button, Typography, Container } from "@mui/material";
import { Box } from "@mui/system";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EditLocationIcon from '@mui/icons-material/EditLocation';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';


const bannerBg = {
  background: `url(${bg})`,
  height: 450,
};

const verticalCenter = {
  display: "flex",
  alignItems: "center",
  height: 400,
};

const Banner = () => {
  return (
    <>
    <Container style={bannerBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={6}
          style={{ ...verticalCenter, textAlign: "left" }}
        >
          <Box>
            <Typography variant="h3">
              Your New Smile <br />
              Starts Here
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontSize: 14, my: 3, fontWeight: 300, color: "gray" }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
              reiciendis repellat ipsum minus sequi, perferendis labore?
              Reprehenderit incidunt aut aliquid.
            </Typography>
            <Button style={{ backgroundColor: "#37B5BB" }} variant="contained">
              Get Appointment
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} style={verticalCenter}>
          <img style={{ width: "350px" }} src={chair} alt="" />
        </Grid>
      </Grid>
    </Container>
    <Container>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4} >
      <Paper elevation={3} sx={{display: 'flex', p: 2, color: 'white'}} style={{backgroundColor: "#37B5BB"}}>
      <Box>
      <AccessTimeIcon sx={{m: 1, fontSize: 60}}/>
      </Box>
        <Box sx={{textAlign: 'left', ml: 1}}>
        <Typography variant="h6">
              Opening Hours   
        </Typography>
        <Typography variant="body2" gutterBottom>
            Lorem ipsum dolor sit amet<br/> consectetur adipisicing elit.
        </Typography>
        </Box>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
      <Paper elevation={3} sx={{display: 'flex', p: 2, color: 'white'}} style={{backgroundColor: "#627576 "}}>
      <Box>
      <EditLocationIcon sx={{m: 1, fontSize: 60}}/>
      </Box>
        <Box sx={{textAlign: 'left', ml: 1}}>
        <Typography variant="h6">
              Opening Hours   
        </Typography>
        <Typography variant="body2" gutterBottom>
            Lorem ipsum dolor sit amet<br/> consectetur adipisicing elit.
        </Typography>
        </Box>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4} >
      <Paper elevation={3} sx={{display: 'flex', p: 2, color: 'white'}} style={{backgroundColor: "#37B5BB"}}>
      <Box>
      <PhoneInTalkIcon sx={{m: 1, fontSize: 60}}/>
      </Box>
        <Box sx={{textAlign: 'left', ml: 1}}>
        <Typography variant="h6">
              Opening Hours   
        </Typography>
        <Typography variant="body2" gutterBottom>
            Lorem ipsum dolor sit amet<br/> consectetur adipisicing elit.
        </Typography>
        </Box>
        </Paper>
      </Grid>
      </Grid>
    </Box>
    </Container>
    </>
  );
};

export default Banner;
