import React from "react";
import dental from "../../../images/treatment.png";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, Container, Typography } from "@mui/material";

const ExceptionalDental = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
      <Grid container spacing={2} sx={{ my: 5, display: 'flex',justifyContent: 'flex-start',alignItems: 'center' }}>
        <Grid item xs={12} md={6}>
          <img style={{ height: "500px" }} src={dental} alt="" />
        </Grid>
        <Grid item xs={12} md={6} style={{ textAlign: "left" }}>
          <Typography variant="h4">
            Exceptional Dental <br />
            Care, on Your Terms
          </Typography>
          <Typography variant="body2" gutterBottom sx={{ my: 5 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            culpa veniam modi vel voluptatibus quibusdam recusandae placeat odio
            minima accusamus fugiat velit nesciunt, obcaecati esse distinctio
            quaerat dignissimos. Debitis nobis possimus mollitia culpa earum id
            doloribus! Fuga a reiciendis corporis non, placeat quos tenetur
            ipsum dicta! Nobis provident nisi in sequi aliquid nulla obcaecati
            porro, possimus optio, eos voluptatem voluptatum suscipit deserunt
            sit neque impedit eligendi voluptatibus ea hic. Velit totam
            repudiandae, consectetur repellat corporis, minus veritatis debitis
            iusto facere sapiente aliquam praesentium est laborum fugit
            laudantium ducimus? Numquam, maxime maiores voluptates eius
            reprehenderit cupiditate rerum id doloremque vel illum!
          </Typography>
          <Button variant="contained" style={{backgroundColor: '#37B5BB'}}>Learn More</Button>
        </Grid>
      </Grid>
      </Container>
    </Box>
  );
};

export default ExceptionalDental;
