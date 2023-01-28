import React, { useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import {
  Grid,
  Button,
  Typography,
  FormControl,
  Form,
  OutlinedInput,
  TextField,
} from "@mui/material";

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    // recieves token
  const [cookies, setCookie] = useCookies('');

  // const handleChange = (){

  // }

  return (
    <Grid
      container
      direction={"column"}
      alignItems={"center"}
      justifyContent={"space-around"}
      width={"100%"}
      height={"100%"}
    >
        <Typography variant="h2" color="primary">LOGIN</Typography>
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
          label="Username"
          placeholder="Type your username"
          sx={{
            backgroundColor: "#FFF",
          }}
          value={username}
          required
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <TextField
          variant="outlined"
          label="Email"
          placeholder="Type your email"
          sx={{
            backgroundColor: "#FFF",
          }}
          value={email}
          type={"email"}
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextField
          variant="outlined"
          label="Password"
          placeholder="Type your password"
          sx={{
            backgroundColor: "#FFF",
          }}
          value={password}
          required
          type={"password"}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <Button
          type="button"
          onClick={async(e) => {
            
              e.preventDefault()
            //   alert(`${username}, ${email}, ${password}`)
            // console.log(username, email, password)
            await axios
               .get(`/login?username=${username}&email=${email}&password=${password}`, {
                 headers: { "Content-Type": "application/json" },
                 // params: {
                 //   page: 1,
                 //   limit: 5,
                 // },
               })
               .then((response) => {
                //  console.log("axios-req", response.data.token);
                //  setCookie(response.data.token);
                // positive response
                // response.data.allow == true? 
               })
               .catch((error) => {
                 console.log(error);
               });


          }}
        //   onSubmit={}
          variant="contained"
        //   className="button"
        >
          Login
        </Button>
        {/* <MyFormHelperText /> */}
      </FormControl>
    </Grid>
  );
};

export default Login;
