import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Container, Grid, Typography } from "@mui/material";
import people1 from '../../../images/people-1.png';
import people2 from '../../../images/people-2.png';
import people3 from '../../../images/people-3.png';

const Testimonial = () => {
  return (
    <Box>
      <Container sx={{textAlign: 'left'}}>
      <Typography style={{color: '#37B5BB' }} sx={{my: 5}} variant="h6" gutterBottom component="div">
        TESTIMONIAL
      </Typography>
      <Typography variant="h4" gutterBottom component="div">
        What's Out Patients<br/>
      </Typography>
      <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4} sx={{ my: 5 }}>
        <Paper elevation={3} sx={{p: 3}}>
          <Typography variant="body2" sx={{my: 3}} gutterBottom>
            body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
          <Box sx={{display: 'flex'}}>
          <Box sx={{mr:4}}>
          <img style={{height: 60}} src={people1} alt="" />
          </Box>
          <Box sx={{textAlign: 'left'}}>
          <Typography variant="h6" style={{color: '#37B5BB'}} gutterBottom component="div">
        Winson Herry
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        California
      </Typography>
          </Box>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4} sx={{ my: 5 }}>
        <Paper elevation={3} sx={{p: 3}}>
          <Typography variant="body2" sx={{my: 3}} gutterBottom>
            body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
          <Box sx={{display: 'flex'}}>
          <Box sx={{mr:4}}>
          <img style={{height: 60}} src={people2} alt="" />
          </Box>
          <Box sx={{textAlign: 'left'}}>
          <Typography variant="h6" style={{color: '#37B5BB'}} gutterBottom component="div">
        Winson Herry
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        California
      </Typography>
          </Box>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4} sx={{ my: 5 }}>
        <Paper elevation={3} sx={{p: 3}}>
          <Typography variant="body2" sx={{my: 3}} gutterBottom>
            body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
          <Box sx={{display: 'flex'}}>
          <Box sx={{mr:4}}>
          <img style={{height: 60}} src={people3} alt="" />
          </Box>
          <Box sx={{textAlign: 'left'}}>
          <Typography variant="h6" style={{color: '#37B5BB'}} gutterBottom component="div">
        Winson Herry
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        California
      </Typography>
          </Box>
          </Box>
        </Paper>
      </Grid>
      </Grid>
      </Container>
    </Box>
  );
};

export default Testimonial;
