import { useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Rating } from "@mui/material";
import Slider from "react-slick";
import { dataTestimoni } from "../../data";
import "./testimonials.scss";

const Testimonials = () => {

  const slider = useRef();
  const next = () => {
    slider.current.slickNext();
  }
  const prev = () => {
    slider.current.slickPrev();
  }

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    arrows: false,
    centerPadding: "25%",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: "0"
        }
      }
    ],
    speed: 500 
  };

    return(
      <div className="testimonials" id="testimonials">
        <div className="testi-top">
          <h2>Testimonials</h2>
          <p>Berbagai review positif dari para pelanggan kami</p>
        </div>
        <Slider ref={slider} {...settings}>
        {dataTestimoni.map(testi => (
            <div className="testimoni-detail" key={testi.id}>
              <img src={testi.image} alt=""/>
              <div className="testi-card">
                <Rating className="rating" name="read-only" value={testi.rating} readOnly/>
                <p>{testi.testimoni}</p>
                <p>{testi.identitas}</p>
              </div>
            </div>
          ))}
        </Slider>
        <div className="d-flex justify-content-center mt-3" style={{gap:"2vw"}}>
        <button className="slider-button" onClick={prev}>
            <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button className="slider-button" onClick={next}>
            <FontAwesomeIcon icon={faChevronRight} />
        </button>
    </div>
      </div>

    )
}

export default Testimonials