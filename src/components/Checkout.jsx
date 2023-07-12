import React, { useState } from "react";
import { TextField, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

function CheckoutForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    country: "",
    region: "",
    city: "",
    primaryAddress: "",
    secondaryAddress: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>Checkout information</h1>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              focused
              required
              label="First Name"
              name="firstName"
              color="warning"
              value={formData.firstName}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              focused
              required
              label="Last Name"
              name="lastName"
              color="warning"
              value={formData.lastName}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              focused
              required
              label="Phone Number"
              color="warning"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              focused
              required
              label="Country"
              name="country"
              color="warning"
              value={formData.country}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              label="Region/State"
              name="region"
              value={formData.region}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              focused
              required
              label="City"
              name="city"
              color="warning"
              value={formData.city}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              focused
              required
              label="Primary Address"
              name="primaryAddress"
              color="warning"
              value={formData.primaryAddress}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Secondary Address"
              name="secondaryAddress"
              value={formData.secondaryAddress}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" size="medium">
              <CheckCircleOutlineIcon />
              <Link to="/after-checkout-transfer">Submit</Link>
            </Button>
            <Button variant="contained" color="warning">
              <CancelIcon />
              <Link to="/basket">Cancel</Link>
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default CheckoutForm;
