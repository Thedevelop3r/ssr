import React, { useState } from "react";
import {
  Grid,
  Button,
  Typography,
  FormControl,
  TextField,
} from "@mui/material";

const AddHotel = () => {
  const [name, setName] = useState("");
  const [rooms_number, setRoomNumber] = useState("");
  const [city, setCity] = useState("");
  const [tell_number, setTellNumber] = useState("");
  const [warning, setWarning] = useState("");

  return (
    <Grid
      container
      direction={"column"}
      alignItems={"center"}
      justifyContent={"space-around"}
      width={"100%"}
      height={"100%"}
    >
      <Typography variant="h2" color="primary">
        Register Hotel
      </Typography>
      <FormControl
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          width: "30%",
          padding: "60px",
          backgroundColor: "#eaeaea",
          alignItems: "center",
        }}
      >
        <TextField
          variant="outlined"
          label="Name"
          placeholder="Type Hotel Name"
          sx={{
            backgroundColor: "#FFF",
          }}
          value={name}
          required
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <TextField
          variant="outlined"
          label="Rooms"
          placeholder="How many rooms ?"
          sx={{
            backgroundColor: "#FFF",
          }}
          value={rooms_number}
          required
          onChange={(e) => {
            setRoomNumber(e.target.value);
          }}
        />
        <TextField
          variant="outlined"
          label="City"
          placeholder="Hotel located in ?"
          sx={{
            backgroundColor: "#FFF",
          }}
          value={city}
          required
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <TextField
          variant="outlined"
          label="Tellephon Number"
          placeholder="Hotel telephone number ?"
          sx={{
            backgroundColor: "#FFF",
          }}
          value={tell_number}
          required
          onChange={(e) => {
            setTellNumber(e.target.value);
          }}
        />
        <Typography variant="body1" color="error.light">
          {warning}
        </Typography>

        <Button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            // alert(`${username}, ${email}, ${password}`);
            // console.log(username, email, password);
            // check validity then call;
            if (name && rooms_number && city && tell_number) {
              setWarning("");
              // go ahead axios
              // clear fields at end;
            } else {
              setWarning("*Please provide the required information..");
            }
          }}
          variant="contained"
          className="button"
        >
          Add Hotel
        </Button>
        {/* <MyFormHelperText /> */}
      </FormControl>
    </Grid>
  );
};

export default AddHotel;
