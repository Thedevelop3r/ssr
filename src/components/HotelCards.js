import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const HotelCards = ({ name, rooms_number, city, telephone }) => {
  return (
    <Card sx={{
        width: "310px",
        backgroundColor: "#000000"
    }}>
      <CardContent sx={{
        gap: "10px"
      }}>
        {/* Title */}
        <Typography mt={1} mb={1} variant="h4" color="primary">
          {name}
        </Typography>
        <Typography variant="body1" color="primary.light">
          Rooms: {rooms_number}
        </Typography>
        <Typography variant="body1" color="primary.light">
          City: {city}
        </Typography>
        <Typography variant="body1" color="red">
          Tellephon: {telephone}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default HotelCards;
