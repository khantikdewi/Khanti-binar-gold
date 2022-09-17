import girl from "../../assets/img_service.svg";
import checkIcon from "../../assets/check.svg";
import { ServicesData } from "../../data";
import "./ourServices.scss";


const OurServices = () => {

  return (
    <div className="ourServices" id="ourServices">
      <div className="services-left">
        <img className="img-girl" src={girl} alt="girl"/>
      </div>
      <div className="services-right">
        <div className="services-right-cont">
          <h2 className="services-title">Best Car Rental for any kind of trip in your town!</h2>
          <p className="services-paragraf">Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
          <ul className="service-list">
            {ServicesData.map(item => 
              <li className="list-item">
                <img src={checkIcon} alt="" className="icon-item"/>
                <p>{item}</p>
              </li>
              )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default OurServices