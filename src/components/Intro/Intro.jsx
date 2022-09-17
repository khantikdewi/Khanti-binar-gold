import car from "../../assets/img_car.svg";
import "./intro.scss";

export default function Intro() {

return (
    <div className="intro" id="intro">
        <div className="intro-left">
            <div className="intro-left-cont">
                <h2>Sewa & Rental Mobil Terbaik di Kawasanmu</h2>
                <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhan untuk sewa mobil selama 24 Jam.</p>
                <button className="btn-sewa">Mulai Sewa Mobil</button>
            </div>
        </div>
        <div className="intro-right">
            <img className="img-car" src={car} alt="car"/>
        </div>
    </div>
);
}
