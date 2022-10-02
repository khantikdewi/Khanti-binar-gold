import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const CarCard = ({ car }) => {
  let navigate = useNavigate();
  const handleDetail = (id) => navigate(`/car-list/${id}`);

  return (
    <Card key={car.id} sx={{ width: { xs: "100%", md: "32%" }, mb: { xs: "16px", sm: "24px" }, p: { xs: "16px", sm: "24px" } }}>
      <CardMedia sx={{ width: "80%", objectFit: "scale-down", height: "160px", marginX: "auto" }} component="img" image={car.image} alt="gambar mobil" />
      <CardContent sx={{ padding: "0", mb: { xs: "16px", sm: "24px" } }}>
        <Typography gutterBottom variant="p2" component="div">
          {car.name}
        </Typography>
        <Typography sx={{ fontWeight: "bold" }} gutterBottom variant="p" component="div">
          Rp {Intl.NumberFormat("ID").format(car.price)} / hari
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </CardContent>
      <Button sx={{ width: "100%" }} size="medium" variant="contained" color="success" className="text-capitalize" onClick={() => handleDetail(car.id)}>
        Pilih Mobil
      </Button>
    </Card>
  );
};

export default CarCard;
