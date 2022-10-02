import Footer from "../../components/Footer/Footer";
import Topbar from "../../components/Topbar/Topbar";
import NotFoundSection from "../../components/NotFoundSection/NotFoundSection";
import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { useParams, Link } from "react-router-dom";
import userImg from "../../assets/fi_users.png";
import Button from "@mui/material/Button";

const URL = `https://bootcamp-rent-car.herokuapp.com/admin/car`;

const DetailInfo = styled.div`
  display: flex;
  width: 80%;
  margin: 50px auto;
  gap: 1vw;
  align-items: flex-start;

  @media (max-width: 800px) {
    width: 90%;
    flex-direction: column-reverse;
  }
`;

const FilterContainer = styled.div`
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  width: 80%;
  margin: -3vh auto 50px auto;
  background: white;
  padding: 24px;
`;

const DetailDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  width: 45%;
  flex-grow: 2;

  @media (max-width: 800px) {
    padding: 16px;
    width: 100%;
  }
`;

const DetailHarga = styled.div`
  padding: 24px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 52px;
  width: 30%;

  @media (max-width: 800px) {
    padding: 16px;
    width: 100%;
  }
`;

const FilterItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;

  @media (max-width: 1000px) and (min-width: 767px) {
    width: fit-content;
  }
`;

const FilterData = styled.div`
  padding: 9px 12px;
  background: #D0D0D0;
  border: 1px solid #D0D0D0;
  border-radius: 2px;
  height: 36px;
  display: flex;
}
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ListUl = styled.ul`
  padding-left: 8px;
`;

const List = styled.li`
  list-style: inside;
  margin-bottom: 8px;
  color: #8a8a8a;
`;

const CarDetail = () => {
  const [car, setCar] = useState({});
  const [handleError, setHandleError] = useState(false);
  const { id } = useParams();

  async function getCars() {
    try {
      const request = await fetch(`${URL}/${id}`);
      const dataDetail = await request.json();
      setCar(dataDetail);
    } catch (error) {
      console.log(error);
      setHandleError(true);
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    getCars();
  }, []);

  return (
    <>
      <Topbar />
      {car === null || car.name === "SequelizeDatabaseError" ? (
        <NotFoundSection />
      ) : (
        <>
          <div style={{ height: "20vh", background: "#F1F3FF" }}></div>
          <FilterContainer className="search-filter d-flex flex-column gap-3">
            <h2>Pencarianmu</h2>
            <div className="d-flex flex-column flex-md-row gap-3">
              <FilterItem>
                <label>Nama Mobil</label>
                <FilterData>
                  <p>{car.name}</p>
                </FilterData>
              </FilterItem>
              <FilterItem>
                <label>Kategori</label>
                <FilterData>
                  <p>{car.category}</p>
                </FilterData>
              </FilterItem>
              <FilterItem>
                <label>Harga</label>
                <FilterData>
                  <p>Rp {Intl.NumberFormat("ID").format(car.price)} / hari</p>
                </FilterData>
              </FilterItem>
              <FilterItem>
                <label>Status</label>
                <FilterData>{car.status === false ? <p>Disewakan</p> : <p>Tidak Disewakan</p>}</FilterData>
              </FilterItem>
              <Link to="/car-list" style={{ textDecoration: "none" }}>
                <Button variant="outlined" className="text-capitalize" style={{ width: "100%", height: "100%" }}>
                  Ubah
                </Button>
              </Link>
            </div>
          </FilterContainer>
          <DetailInfo>
            <DetailDesc>
              <h2>Tentang Paket</h2>
              <ListContainer>
                <h2>Include</h2>
                <ListUl>
                  <List>Apa saja yang termasuk dalam paket misal durasi max 12 jam</List>
                  <List>Sudah termasuk bensin selama 12 jam</List>
                  <List>Sudah termasuk Tiket Wisata</List>
                  <List>Sudah termasuk pajak</List>
                </ListUl>
              </ListContainer>
              <ListContainer>
                <h2>Exclude</h2>
                <ListUl>
                  <List>Tidak termasuk biaya makan sopir Rp 75.000/hari</List>
                  <List>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</List>
                  <List>Tidak termasuk akomodasi penginapan</List>
                </ListUl>
              </ListContainer>
              <ListContainer>
                <h2>Refund, Reschedule, Overtime</h2>
                <ListUl>
                  <List>Tidak termasuk biaya makan sopir Rp 75.000/hari</List>
                  <List>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</List>
                  <List>Tidak termasuk akomodasi penginapan</List>
                  <List>Tidak termasuk biaya makan sopir Rp 75.000/hari</List>
                  <List>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</List>
                  <List>Tidak termasuk akomodasi penginapan</List>
                  <List>Tidak termasuk biaya makan sopir Rp 75.000/hari</List>
                  <List>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</List>
                  <List>Tidak termasuk akomodasi penginapan</List>
                </ListUl>
              </ListContainer>
            </DetailDesc>
            <DetailHarga>
              <img src={car.image} style={{ width: "80%", height: "auto" }} />
              <div>
                <h2>{car.name}</h2>
                <div style={{ display: "flex", gap: "8px" }}>
                  <img src={userImg} />
                  <p>{car.category}</p>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p style={{ fontWeight: "bold" }}>Total</p>
                <p style={{ fontWeight: "bold" }}>Rp {Intl.NumberFormat("ID").format(car.price)} / hari</p>
              </div>
            </DetailHarga>
          </DetailInfo>
        </>
      )}

      <Footer />
    </>
  );
};

export default CarDetail;
