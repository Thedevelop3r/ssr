import React, { useState } from "react";
import {
  Grid,
  Button,
  Typography,
  FormControl,
  TextField,
} from "@mui/material";

const Addusers = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
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
        Create Users
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
          placeholder="Type user name ?"
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
          label="Email"
          placeholder="Type user email?"
          sx={{
            backgroundColor: "#FFF",
          }}
          value={email}
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextField
          variant="outlined"
          label="password"
          placeholder="Type user password?"
          sx={{
            backgroundColor: "#FFF",
          }}
          value={password}
          required
          type={"password"}
          onChange={(e) => {
            setPass(e.target.value);
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
            if (name && email && password) {
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
          Add User
        </Button>
        {/* <MyFormHelperText /> */}
      </FormControl>
    </Grid>
  );
};

export default Addusers;
