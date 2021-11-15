import { Alert, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import Booking from "../Booking/Booking";

const bookings = [
  {
    id: 1,
    name: "Teeth Orthodontics",
    time: "8:00 AM - 9.00 AM",
    price: 20,
    space: 10,
  },
  {
    id: 2,
    name: "Cosmetic Dentistry",
    time: "10:05 AM - 11.30 AM",
    price: 17,
    space: 8,
  },
  {
    id: 3,
    name: "Teeth Cleaning",
    time: "5:00 PM - 6.30 PM",
    price: 19,
    space: 9,
  },
  {
    id: 4,
    name: "Cavity Protection",
    time: "7:00 AM - 8.30 AM",
    price: 10,
    space: 5,
  },
  {
    id: 5,
    name: "Pediatric Dental",
    time: "6:00 PM - 7.00 PM",
    price: 25,
    space: 10,
  },
  {
    id: 6,
    name: "Oral Surgery",
    time: "7:00 PM - 8.00 PM",
    price: 35,
    space: 10,
  },
];

const AvailableAppointments = ({ date }) => {
  const [bookingSuccess, setBookingSuccess] = useState(false)
  return (
    <Container>
      <Typography variant="h4" sx={{ color: 'info.main', mb:2 }}>Available appointment on {date.toDateString()} </Typography>
      {bookingSuccess && <Alert severity="success">Appointment Booked Successfully!</Alert>}
      <Grid container spacing={2}>
        {
            bookings.map(booking => <Booking
            key={booking.id}
            booking={booking}
            date={date}
            setBookingSuccess={setBookingSuccess}
            ></Booking>)
        }
      </Grid>
    </Container>
  );
};

export default AvailableAppointments;
