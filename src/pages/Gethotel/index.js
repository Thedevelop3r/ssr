import React, { useEffect, useState } from "react";
import {
  Grid,
  Button,
  Typography,
  FormControl,
  TextField,
} from "@mui/material";
import axios from "axios";
import HotelCards from "../../components/HotelCards";

const GetHotel = () => {
  const [hotels, setHotels] = useState([
    {
      name: "Marina",
      rooms_number: 240,
      city: "Berlin",
      tell_number: 86000006,
    },
    {
      name: "Salena",
      rooms_number: 240,
      city: "Frankfort",
      tell_number: 86000006,
    },
    {
      name: "Ocena",
      rooms_number: 240,
      city: "Russel",
      tell_number: 86000006,
    },
    {
      name: "Dummy",
      rooms_number: 240,
      city: "Vesel",
      tell_number: 86000006,
    },
    {
      name: "mekk",
      rooms_number: 240,
      city: "Frank",
      tell_number: 86000006,
    },
  ]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(`/allhotels?page=${page}`, {
        headers: { "Content-Type": "application/json" },
        // params: {
        //   page: 1,
        //   limit: 5,
        // },
      })
      .then((response) => {
        console.log("axios-req", response.data);
        setHotels(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page]);

  return (
    <Grid
      container
      direction={"column"}
      alignItems={"center"}
      justifyContent={"space-around"}
      width={"100%"}
      height={"100%"}
      sx={{
        backgroundColor: "#eaeaea",
        opacity: 0.9,
      }}
    >
      <Typography variant="h2" color="primary">
        Get Hotels
      </Typography>
      <Grid container direction={"row"} width="100%" gap={"20px"} justifyContent={'center'}>
        {hotels.map((hotal) => {
          return (
            <HotelCards
              name={hotal["name"]}
              city={hotal["city"]}
              rooms_number={hotal["rooms_number"]}
              telephone={hotal["tell_number"]}
            />
          );
        })}
      </Grid>

      <Grid
        container
        direction={"row"}
        width={"100%"}
        alignItems={"center"}
        justifyContent={"space-around"}
      >
        <Grid item>
          <Button
            variant="contained"
            onClick={(e) => {
              if (page !== 1) {
                setPage(page - 1);
              }
            }}
            color="success"
          >
            PREV
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            onClick={(e) => {
              setPage(page + 1);
            }}
            color="success"
          >
            NEXT
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default GetHotel;
