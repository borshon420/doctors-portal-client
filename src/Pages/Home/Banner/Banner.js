import React from 'react';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Button, Typography, Container } from '@mui/material';
import { Box } from '@mui/system';

const bannerBg = {
    background: `url(${bg})`,
    height: 450
}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400,
    
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} style={{ ...verticalCenter , textAlign: 'left'}}>
          <Box>
          <Typography variant="h3">
              Your New Smile <br/>
              Starts Here  
          </Typography>
          <Typography variant="h6" sx={{fontSize: 14, my: 3, fontWeight: 300 ,color: 'gray'}}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam reiciendis repellat ipsum minus sequi, perferendis labore? Reprehenderit incidunt aut aliquid.
          </Typography>
          <Button style={{backgroundColor: '#51F4FC'}} variant="contained">Get Appointment</Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} style={verticalCenter}>
          <img style={{width: '350px'}} src={chair} alt="" />
        </Grid>
      </Grid>
    </Container>
    );
};

export default Banner;