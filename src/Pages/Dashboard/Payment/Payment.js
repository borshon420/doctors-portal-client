import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51Jw0q5JGgRtvgVXUsgvlgm1p9etOIgmOWTvPzlhbViNTXg4XLZQ2roaoRrfD2IidzqIye7WqIlGdfSTaS4TtLWcM0094jXyGYa"
);

const Payment = () => {
  const { appointmentId } = useParams();
  const [appointment, setAppointment] = useState({});

  useEffect(() => {
    fetch(`https://polar-eyrie-66532.herokuapp.com/appointments/${appointmentId}`)
      .then((res) => res.json())
      .then((data) => setAppointment(data));
  }, [appointmentId]);
  return (
    <div>
      <h2>
        Please pay for: {appointment.patientName} for {appointment.serviceName}
      </h2>
      <h2>Pay: ${appointment.price}</h2>
      {appointment?.price && <Elements stripe={stripePromise}>
        <CheckoutForm
        appointment={appointment}
        />
      </Elements>}
    </div>
  );
};

export default Payment;
