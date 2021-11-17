import { Button, Input, TextField } from "@mui/material";
import React, { useState } from "react";

const AddDoctor = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    if (!image) {
      return;
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("image", image);

    fetch('https://polar-eyrie-66532.herokuapp.com/doctors', {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.insertedId){
          setSuccess('doctor added successfully')
          console.log('doctor added successfully')
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    e.preventDefault();
  };

  return (
    <div>
      <h3>Add a Doctor</h3>
      <form onSubmit={handleSubmit}>
        <TextField
          sx={{ width: "50%" }}
          required
          label="Name"
          onChange={(e) => setName(e.target.value)}
          variant="standard"
        />
        <br />
        <TextField
          sx={{ width: "50%" }}
          required
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          variant="standard"
        />
        <br />
        <Input
          accept="image/*"
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <br />
        <Button variant="contained" type="submit">
          Add Doctor
        </Button>
      </form>
      {success && <p style={{color: 'green'}}>{success}</p>}
    </div>
  );
};

export default AddDoctor;
