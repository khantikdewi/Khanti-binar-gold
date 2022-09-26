import React from "react";
import { Rating } from "@mui/material";
import "./testimonialCard.scss";

const TestimonialCard = ({ rating, image, testimoni, identitas }) => {
  return (
    <>
      <div className="testimoni__detail d-flex flex-column flex-md-row align-items-center">
        <img src={image} alt="" />
        <div className="testimoni__detail-right d-flex flex-column">
          <Rating className="justify-content-center justify-content-md-start" name="read-only" value={rating} readOnly />
          <p className="testimoni__detail-quote" style={{ fontWeight: "bold" }}>
            "{testimoni}"
          </p>
          <p className="testimoni__detail-bio">{identitas}</p>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
