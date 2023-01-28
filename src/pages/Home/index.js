import React from "react";
import { Grid, Container, Box, Button, Typography } from "@mui/material";

const Home = () => {
  return (
    <Grid
      container
      direction={"column"}
      flexWrap={"nowrap"}
      alignItems={"center"}
      justifyContent={"space-between"}
      width={"100%"}
      height={"100%"}
      sx={{
        backgroundColor: '#000000',
        opacity: 0.9
      }}
    >
      <Grid item sm={8} mt={10}>
        <Typography variant="h1" color="#FFFFFF">
          Tourist System
        </Typography>
      </Grid>
      <Grid item mt={35} sm={8}>
        {/* parent row */}
        <Grid
          container
          width={"100%"}
          direction={"row"}
          justifyContent={"center"}
        >
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: "red",
              px: "20px",
              py: "10px",
              fontSize: "48px",
              ":hover": {
                backgroundColor: "red",
                opacity: 0.8,
              },
            }}
          >
            Login
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
