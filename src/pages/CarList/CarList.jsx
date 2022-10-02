import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import CarCard from "../../components/CarCard/CarCard";
import CarCardSkeleton from "../../components/CarCardSkeleton/CarCardSkeleton";
import Filter from "../../components/Filter/Filter";
import Footer from "../../components/Footer/Footer";
import Intro from "../../components/Intro/Intro";
import Topbar from "../../components/Topbar/Topbar";

const URL = `https://bootcamp-rent-car.herokuapp.com/admin/car`;

const CarList = () => {
  const IntroCustom = styled.div`
    .intro {
      height: 70vh;
    }
    .btn-sewa {
      display: none;
    }
  `;

  const CardContainer = styled.div`
    width: 80%;
    margin: 0 auto 100px auto;
    gap: 1vw;
    @media (max-width: 767px) {
      width: 90%;
    }
  `;

  const [loadError, setLoadError] = useState(false); //untuk parameter apakah data dari API eror atau tidak
  const [cars, setCars] = useState([]); //untuk simpan seluruh data
  const [availCars, setAvailCars] = useState([]); // nama mobile tersedia, untuk autocomplete
  const [displayedCars, setDisplayedCars] = useState([]); //untuk nampung data after filter

  const [filtered, setFiltered] = useState(0); //untuk trigger useeffect yang akan melakukan filter data

  const [namaMobil, setNamaMobil] = useState(""); //filter nama yang dipilih
  const [kategori, setKategori] = useState(""); //filter kategori yang dipilih
  const [harga, setHarga] = useState(""); //filter harga yang dipilih
  const [status, setStatus] = useState(""); //filter status yang dipilih

  //Ambil data API
  async function getCars() {
    try {
      const request = await fetch(URL);
      const data = await request.json();
      setCars(data);
      setDisplayedCars(data);

      let listCar = [...new Set(data.map((car) => car.price !== null && car.name))].filter(Boolean);
      listCar.unshift("");
      setAvailCars(listCar);
    } catch (error) {
      setLoadError(true);
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    getCars();
  }, []);
  //Ambil data API END

  // Untuk menerima nilai dari filter
  const handleNamaMobil = (value) => {
    setNamaMobil(value);
  };

  const handleKategori = (value) => {
    setKategori(value);
  };

  const handleHarga = (value) => {
    setHarga(value);
  };

  const handleStatus = (value) => {
    setStatus(value);
  };

  const handleFiltering = (value) => {
    setFiltered(filtered + value);
  };

  const props = { handleNamaMobil, handleKategori, handleHarga, handleStatus, handleFiltering, availCars };
  // Untuk menerima nilai dari filter END

  // Untuk melakukan filtering dari state cars dan simpan hasil
  useEffect(() => {
    if (namaMobil.length === 0 && kategori.length === 0 && harga.length === 0 && status.length === 0) {
      // semua tidak diisi
      setDisplayedCars(cars);
    } else if (namaMobil.length > 0 && kategori.length > 0 && harga.length > 0 && status.length > 0) {
      // semua diisi
      if (harga.includes("-")) {
        let hargaArray = harga.split("-").map((data) => parseInt(data));
        let hargaMin = hargaArray[0];
        let hargaMax = hargaArray[1];

        const result = cars.filter((datum) => datum.name === namaMobil && datum.category === kategori && datum.price >= hargaMin && datum.price <= hargaMax && datum.status.toString() === status);
        setDisplayedCars(result);
      } else {
        let hargaInt = parseInt(harga);
        if (hargaInt === 400000) {
          const result = cars.filter((datum) => datum.name === namaMobil && datum.category === kategori && datum.price < hargaInt && datum.status.toString() === status);
          setDisplayedCars(result);
        } else if (hargaInt === 600000) {
          const result = cars.filter((datum) => datum.name === namaMobil && datum.category === kategori && datum.price > hargaInt && datum.status.toString() === status);
          setDisplayedCars(result);
        }
      }
    } else if (kategori.length > 0 && harga.length > 0 && status.length > 0) {
      //data 1 tidak diisi
      if (harga.includes("-")) {
        let hargaArray = harga.split("-").map((data) => parseInt(data));
        let hargaMin = hargaArray[0];
        let hargaMax = hargaArray[1];

        const result = cars.filter((datum) => datum.category === kategori && datum.price >= hargaMin && datum.price <= hargaMax && datum.status.toString() === status);
        setDisplayedCars(result);
      } else {
        let hargaInt = parseInt(harga);
        if (hargaInt === 400000) {
          const result = cars.filter((datum) => datum.category === kategori && datum.price < hargaInt && datum.status.toString() === status);
          setDisplayedCars(result);
        } else if (hargaInt === 600000) {
          const result = cars.filter((datum) => datum.category === kategori && datum.price > hargaInt && datum.status.toString() === status);
          setDisplayedCars(result);
        }
      }
    } else if (namaMobil.length > 0 && kategori.length > 0 && harga.length > 0) {
      //data 4 tidak diisi
      if (harga.includes("-")) {
        let hargaArray = harga.split("-").map((data) => parseInt(data));
        let hargaMin = hargaArray[0];
        let hargaMax = hargaArray[1];

        const result = cars.filter((datum) => datum.name === namaMobil && datum.category === kategori && datum.price >= hargaMin && datum.price <= hargaMax);
        setDisplayedCars(result);
      } else {
        let hargaInt = parseInt(harga);
        if (hargaInt === 400000) {
          const result = cars.filter((datum) => datum.name === namaMobil && datum.category === kategori && datum.price < hargaInt);
          setDisplayedCars(result);
        } else if (hargaInt === 600000) {
          const result = cars.filter((datum) => datum.name === namaMobil && datum.category === kategori && datum.price > hargaInt);
          setDisplayedCars(result);
        }
      }
    } else if (namaMobil.length > 0 && harga.length > 0 && status.length > 0) {
      //data 2 tidak diisi
      if (harga.includes("-")) {
        let hargaArray = harga.split("-").map((data) => parseInt(data));
        let hargaMin = hargaArray[0];
        let hargaMax = hargaArray[1];

        const result = cars.filter((datum) => datum.name === namaMobil && datum.price >= hargaMin && datum.price <= hargaMax && datum.status.toString() === status);
        setDisplayedCars(result);
      } else {
        let hargaInt = parseInt(harga);
        if (hargaInt === 400000) {
          const result = cars.filter((datum) => datum.name === namaMobil && datum.price < hargaInt && datum.status.toString() === status);
          setDisplayedCars(result);
        } else if (hargaInt === 600000) {
          const result = cars.filter((datum) => datum.name === namaMobil && datum.price > hargaInt && datum.status.toString() === status);
          setDisplayedCars(result);
        }
      }
    } else if (namaMobil.length > 0 && kategori.length > 0 && status.length > 0) {
      //data 3 tidak diisi
      const result = cars.filter((datum) => datum.name === namaMobil && datum.category === kategori && datum.status.toString() === status);
      setDisplayedCars(result);
    } else if (harga.length > 0 && status.length > 0) {
      //data 1 dan 2 tidak diisi
      if (harga.includes("-")) {
        let hargaArray = harga.split("-").map((data) => parseInt(data));
        let hargaMin = hargaArray[0];
        let hargaMax = hargaArray[1];

        const result = cars.filter((datum) => datum.price >= hargaMin && datum.price <= hargaMax && datum.status.toString() === status);
        setDisplayedCars(result);
      } else {
        let hargaInt = parseInt(harga);
        if (hargaInt === 400000) {
          const result = cars.filter((datum) => datum.price < hargaInt && datum.status.toString() === status);
          setDisplayedCars(result);
        } else if (hargaInt === 600000) {
          const result = cars.filter((datum) => datum.price > hargaInt && datum.status.toString() === status);
          setDisplayedCars(result);
        }
      }
    } else if (namaMobil.length > 0 && status.length > 0) {
      //data 2 dan 3 tidak diisi
      const result = cars.filter((datum) => datum.name === namaMobil && datum.status.toString() === status);
      setDisplayedCars(result);
    } else if (namaMobil.length > 0 && kategori.length > 0) {
      //data 3 dan 4 tidak diisi
      const result = cars.filter((datum) => datum.name === namaMobil && datum.category === kategori);
      setDisplayedCars(result);
    } else if (kategori.length > 0 && status.length > 0) {
      //data 1 dan 3 tidak diisi
      const result = cars.filter((datum) => datum.category === kategori && datum.status.toString() === status);
      setDisplayedCars(result);
    } else if (namaMobil.length > 0 && harga.length > 0) {
      //data 2 dan 4 tidak diisi
      if (harga.includes("-")) {
        let hargaArray = harga.split("-").map((data) => parseInt(data));
        let hargaMin = hargaArray[0];
        let hargaMax = hargaArray[1];

        const result = cars.filter((datum) => datum.name === namaMobil && datum.price >= hargaMin && datum.price <= hargaMax);
        setDisplayedCars(result);
      } else {
        let hargaInt = parseInt(harga);
        if (hargaInt === 400000) {
          const result = cars.filter((datum) => datum.name === namaMobil && datum.price < hargaInt);
          setDisplayedCars(result);
        } else if (hargaInt === 600000) {
          const result = cars.filter((datum) => datum.name === namaMobil && datum.price > hargaInt);
          setDisplayedCars(result);
        }
      }
    } else if (kategori.length > 0 && harga.length > 0) {
      //data 1 dan 4 tidak diisi
      if (harga.includes("-")) {
        let hargaArray = harga.split("-").map((data) => parseInt(data));
        let hargaMin = hargaArray[0];
        let hargaMax = hargaArray[1];

        const result = cars.filter((datum) => datum.category === kategori && datum.price >= hargaMin && datum.price <= hargaMax);
        setDisplayedCars(result);
      } else {
        let hargaInt = parseInt(harga);
        if (hargaInt === 400000) {
          const result = cars.filter((datum) => datum.category === kategori && datum.price < hargaInt);
          setDisplayedCars(result);
        } else if (hargaInt === 600000) {
          const result = cars.filter((datum) => datum.category === kategori && datum.price > hargaInt);
          setDisplayedCars(result);
        }
      }
    } else if (status.length > 0) {
      //data 1,2 dan 3 tidak diisi or hanya 4
      const result = cars.filter((datum) => datum.status.toString() === status);
      setDisplayedCars(result);
    } else if (harga.length > 0) {
      //hanya 3
      if (harga.includes("-")) {
        let hargaArray = harga.split("-").map((data) => parseInt(data));
        let hargaMin = hargaArray[0];
        let hargaMax = hargaArray[1];

        const result = cars.filter((datum) => datum.price >= hargaMin && datum.price <= hargaMax);
        setDisplayedCars(result);
      } else {
        let hargaInt = parseInt(harga);
        if (hargaInt === 400000) {
          const result = cars.filter((datum) => datum.price < hargaInt);
          setDisplayedCars(result);
        } else if (hargaInt === 600000) {
          const result = cars.filter((datum) => datum.price > hargaInt);
          setDisplayedCars(result);
        }
      }
    } else if (kategori.length > 0) {
      //hanya 2
      const result = cars.filter((datum) => datum.category === kategori);
      setDisplayedCars(result);
    } else if (namaMobil.length > 0) {
      //hanya 1
      const result = cars.filter((datum) => datum.name === namaMobil);
      setDisplayedCars(result);
    }
  }, [filtered]);
  // Untuk melakukan filtering dari state cars dan simpan hasil END

  return (
    <>
      <Topbar />
      <IntroCustom>
        <Intro />
      </IntroCustom>
      {loadError && <h2 style={{ width: "fit-content", margin: "50px auto" }}>Koneksi Bermasalah, mohon untuk refresh halaman anda</h2>}
      <Filter {...props} />
      {displayedCars.length === 0 && filtered > 0 ? (
        <div style={{ width: "fit-content", margin: "50px auto" }}>Maaf, kriteria yang kamu cari tidak ditemukan</div>
      ) : (
        <CardContainer className="d-flex flex-column flex-md-row flex-wrap">
          {cars.length === 0 && (
            <>
              <CarCardSkeleton />
              <CarCardSkeleton />
              <CarCardSkeleton />
            </>
          )}
          {displayedCars.map((car) => car.image !== null && <CarCard car={car} />)}
        </CardContainer>
      )}
      <Footer />
    </>
  );
};

export default CarList;
