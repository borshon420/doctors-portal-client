import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Button, Typography } from '@mui/material';

const appointmentBanner = {
    background: `url(${bg})`,
    marginTop: 175,
    backgroundPosition: 'center',
    backgroundColor: 'rgba(73, 68, 91, 0.9)',
    backgroundBlendMode: 'darken, luminosity'
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img 
            style={{width: 400, marginTop: '-110px' }}
            src={doctor} alt="" />
          </Grid>
          <Grid item xs={12} md={6} sx={{
              display: 'flex', 
              justifyContent: 'flex-start',
              alignItems: 'center',
              textAlign: 'left'
              }}>
            <Box>
            <Typography variant="h6" sx={{mb:5}} style={{color: '#37B5BB'}}>
                Appointment
            </Typography>
            <Typography variant="h4" style={{color: 'white'}}>
                Make an Appointment Today
            </Typography>
            <Typography variant="h6" sx={{my:5}}  style={{color: 'white', fontSize: 14, fontWeight: 300}}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae soluta commodi inventore tempora? Unde, minima ipsa quibusdam consectetur a in.
            </Typography>
            <Button style={{backgroundColor: '#37B5BB'}} variant="contained">LEARN MORE</Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    );
};

export default AppointmentBanner;