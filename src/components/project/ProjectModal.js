"use client";
import React from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./model.css";
import { useLocale } from "next-intl";
import Image from "next/image";

function NextArrow({ onClick }) {
  return (
    <div
      style={{
        position: "absolute",
        right: "10px",
        top: "50%",
        transform: "translateY(-50%)",
        fontSize: "25px",
        color: "#ff0067",
        cursor: "pointer",
        zIndex: 2,
      }}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faChevronRight} />
    </div>
  );
}

function PrevArrow({ onClick }) {
  return (
    <div
      style={{
        position: "absolute",
        left: "10px",
        top: "50%",
        transform: "translateY(-50%)",
        fontSize: "25px",
        color: "#ff0067",
        cursor: "pointer",
        zIndex: 2,
      }}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faChevronLeft} />
    </div>
  );
}

export default function ProjectModal({ images = [], onClose }) {
  const locale = useLocale();
  const isArabic = locale === "ar";

  const displayedImages = isArabic ? [...images].reverse() : images;

  const sliderSettings = {
    dots: !isArabic,
    infinite: true,
    rtl: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    customPaging: !isArabic
      ? (i) => (
          <a>
            <Image
              src={displayedImages[i]}
              alt={`thumb-${i}`}
              quality={100}
              width={600}
              height={350}
              style={{
                width: "60px",
                height: "40px",
                objectFit: "cover",
                borderRadius: "4px",
                border: "1px solid #ccc",
                cursor: "pointer",
              }}
            />
          </a>
        )
      : undefined,
    dotsClass: "slick-dots slick-thumb",
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        style={{ direction: "ltr" }} // ثابت من الشمال
        onClick={(e) => e.stopPropagation()}
      >
        <Slider {...sliderSettings}>
          {displayedImages.map((img, i) => (
            <div key={i}>
              <Image
                src={img}
                alt={`project-${i}`}
                quality={100}
                width={600}
                height={350}
                style={{
                  width: "100%",
                  maxHeight: "440px",
                  borderRadius: "10px",
                }}
              />
            </div>
          ))}
        </Slider>

        <button className="close-button" onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  );
}
