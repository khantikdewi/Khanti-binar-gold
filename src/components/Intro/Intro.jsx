import { Link } from "react-router-dom";
import car from "../../assets/img_car.svg";
import "./intro.scss";

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="intro-left">
        <div className="intro-left-cont">
          <h2>Sewa & Rental Mobil Terbaik di Kawasanmu</h2>
          <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhan untuk sewa mobil selama 24 Jam.</p>
          <Link to="car-list">
            <button className="btn-sewa">Mulai Sewa Mobil</button>
          </Link>
        </div>
      </div>
      <div className="intro-right">
        <div className="img-container">
          <img className="img-car" src={car} alt="car" />
        </div>
      </div>
    </div>
  );
}
