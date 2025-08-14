"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./model.css";

export default function ProjectModal({ images = [], onClose }) {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: function (i) {
      return (
        <a>
          <img
            src={images[i]}
            alt={`thumb-${i}`}
            style={{ width: "60px", height: "40px", objectFit: "cover" }}
          />
        </a>
      );
    },
    dotsClass: "slick-dots slick-thumb",
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {images.length > 1 ? (
          <Slider {...sliderSettings}>
            {images.map((img, i) => (
              <div key={i}>
                <img
                  src={img}
                  alt={`project-${i}`}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "10px",
                  }}
                />
              </div>
            ))}
          </Slider>
        ) : (
          <img
            src={images[0]}
            alt="project"
            style={{ width: "100%", height: "auto", borderRadius: "10px" }}
          />
        )}
      <button className="close-button" onClick={onClose}>
        &times;
      </button>
      </div>
    </div>
  );
}
