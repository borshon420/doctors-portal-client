import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, Container, Typography } from "@mui/material";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import footerBg from '../../../images/footer-bg.png';

const footerBackground = {
    background: `url(${footerBg})`
}


const Footer = () => {
  return (
    <Box style={footerBackground} sx={{ flexGrow: 1 }}>
      <Container>
        <Grid container spacing={2} sx={{textAlign: 'left', my: 5}}>
          <Grid item xs={3}>
            <Typography variant="caption" sx={{m: 1, mt: 5}} display="block" gutterBottom>
              Emergency Dental Care 
            </Typography>
            <Typography variant="caption" sx={{m: 1}} display="block" gutterBottom>
            Check Up 
            </Typography>
            <Typography variant="caption" sx={{m: 1}} display="block" gutterBottom>
            Treatment of personal Diseases
            </Typography>
            <Typography variant="caption" sx={{m: 1}} display="block" gutterBottom>
            Tooth Extraction
            </Typography>
            <Typography variant="caption" sx={{m: 1}} display="block" gutterBottom>
            Check Up
            </Typography>
          </Grid>
          <Grid item xs={3}>
          <Typography variant="h6" sx={{m: 1}} display="block" style={{color: '#37B5BB'}} gutterBottom>
            Services
            </Typography>
            <Typography variant="caption" sx={{m: 1}} display="block" gutterBottom>
            Check Up
            </Typography>
            <Typography variant="caption" sx={{m: 1}} display="block" gutterBottom>
            Treatment of personal Diseases
            </Typography>
            <Typography variant="caption" sx={{m: 1}} display="block" gutterBottom>
            Tooth Extraction
            </Typography>
            <Typography variant="caption" sx={{m: 1}} display="block" gutterBottom>
            Check Up
            </Typography>
            <Typography variant="caption" sx={{m: 1}} display="block" gutterBottom>
            Check Up
            </Typography>
            <Typography variant="caption" sx={{m: 1}} display="block" gutterBottom>
            Check Up
            </Typography>
          </Grid>
          <Grid item xs={3}>
          <Typography variant="h6" sx={{m: 1}} display="block" style={{color: '#37B5BB'}} gutterBottom>
            Oral Health
            </Typography>
            <Typography variant="caption" sx={{m: 1}} display="block" gutterBottom>
            Emergency Dental Care
            </Typography>
            <Typography variant="caption" sx={{m: 1}} display="block" gutterBottom>
            Check Up
            </Typography>
            <Typography variant="caption" sx={{m: 1}} display="block" gutterBottom>
            Treatment of personal Diseases
            </Typography>
            <Typography variant="caption" sx={{m: 1}} display="block" gutterBottom>
            Tooth Extraction
            </Typography>
            <Typography variant="caption" sx={{m: 1}} display="block" gutterBottom>
            Check Up
            </Typography>
            <Typography variant="caption" sx={{m: 1}} display="block" gutterBottom>
            Check Up
            </Typography>
            <Typography variant="caption" sx={{m: 1}} display="block" gutterBottom>
            Check Up
            </Typography>
          </Grid>
          <Grid item xs={3}>
          <Typography variant="h6" sx={{m: 1}} display="block" style={{color: '#37B5BB'}} gutterBottom>
            Our Address
            </Typography>
            <Typography variant="caption" sx={{m: 1}} display="block" gutterBottom>
            New York - 101010 Hudson <br/>
            Yards
            </Typography>
             
             <FacebookOutlinedIcon sx={{mx: 1, my: 3}} style={{color: '#37B5BB'}}/>
             <GoogleIcon sx={{mx: 1, my: 3}} style={{color: '#37B5BB'}} />
             <TwitterIcon sx={{mx: 1, my: 3}} style={{color: '#37B5BB'}}/>

            <Typography variant="caption" sx={{m: 1}} display="block" gutterBottom>
            Call Now
            </Typography>
            <Button style={{backgroundColor: '#37B5BB'}} variant="contained">+2025550295</Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
