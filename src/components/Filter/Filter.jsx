import { TextField, FormControl, InputLabel, Select, MenuItem, Button, Autocomplete } from "@mui/material";
import { useState } from "react";

const Filter = ({ handleNamaMobil, handleKategori, handleHarga, handleStatus, handleFiltering, availCars }) => {
  // const [value, setValue] = useState(availCars[0]);

  const [namaMobil, setNamaMobil] = useState("");
  const [kategori, setKategori] = useState("");
  const [harga, setHarga] = useState("");
  const [status, setStatus] = useState("");

  const changeKategori = (e) => {
    setKategori(e.target.value);
  };

  const changeHarga = (e) => {
    setHarga(e.target.value);
  };

  const changeStatus = (e) => {
    setStatus(e.target.value);
  };

  const buttonClicked = () => {
    handleNamaMobil(namaMobil);
    handleKategori(kategori);
    handleHarga(harga);
    handleStatus(status);
    handleFiltering(1);
  };

  return (
    <>
      <FormControl
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          width: { xs: "90%", sm: "80%" },
          margin: "-2vw auto 50px auto",
          padding: "24px",
          boxShadow: 2,
          borderRadius: "8px",
          backgroundColor: "white",
          gap: "16px",
        }}
      >
        <FormControl fullWidth>
          <Autocomplete
            id="controllable-states-demo"
            inputValue={namaMobil}
            onInputChange={(event, newInputValue) => {
              setNamaMobil(newInputValue);
            }}
            options={availCars}
            renderInput={(params) => <TextField {...params} label="Nama Mobil" />}
          />
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Kategori</InputLabel>
          <Select labelId="demo-simple-select-label" id="demo-simple-select" MenuProps={{ disableScrollLock: true }} value={kategori} label="Kategori" onChange={changeKategori}>
            <MenuItem value={"2 - 4 orang"}>2 - 4 orang</MenuItem>
            <MenuItem value={"4 - 6 orang"}>4 - 6 orang</MenuItem>
            <MenuItem value={"6 - 8 orang"}>6 - 8 orang</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Harga</InputLabel>
          <Select labelId="demo-simple-select-label" id="demo-simple-select" MenuProps={{ disableScrollLock: true }} value={harga} label="Harga" onChange={changeHarga}>
            <MenuItem value={"400000"}>{"< Rp. 400.000"}</MenuItem>
            <MenuItem value={"400000-600000"}>Rp. 400.000 - Rp. 600.000</MenuItem>
            <MenuItem value={"600000"}>{"> Rp. 600.000"}</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Disewa</InputLabel>
          <Select labelId="demo-simple-select-label" id="demo-simple-select" MenuProps={{ disableScrollLock: true }} value={status} label="Disewa" onChange={changeStatus}>
            <MenuItem value={"false"}>Disewakan</MenuItem>
            <MenuItem value={"true"}>Tidak Disewakan</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" color="success" className="text-capitalize" style={{ width: "fit-content" }} onClick={buttonClicked}>
          Cari
        </Button>
      </FormControl>
    </>
  );
};

export default Filter;
