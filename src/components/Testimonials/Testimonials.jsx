import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Rating } from "@mui/material";
import arrow from "../../assets/fi_chevron-left.svg";
// import Slider from "react-slick";
import { dataTestimoni } from "../../data";
import "./testimonials.scss";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = (way) => {
    way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) : setCurrentSlide(currentSlide < dataTestimoni.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="testimonials" id="testimonials">
      <h1 className="testi-title">Testimonials</h1>
      <h3 className="testi-desc">Berbagai review positif dari para pelanggan kami</h3>
      <div className="slider" style={{ transform: `translateX(-${currentSlide * 50}vw)` }}>
        <div className="testi-wrapper">
          {dataTestimoni.map((d) => (
            <div className="testi-card">
              <div className="left">
                <img src={d.image} alt="" />
              </div>
              <div className="right">
                <div className="top">
                  <Rating value={d.rating} readOnly />
                </div>
                <div className="center">
                  <p className="testi-para">{d.testimoni}</p>
                </div>
                <div className="bottom">
                  <span className="testi-address">{d.identitas}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="testi-arrow-wrapper">
          <img src={arrow} className="arrow left" alt="" onClick={() => handleClick("left")} />
          <img src={arrow} className="arrow right" alt="" onClick={() => handleClick()} />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
