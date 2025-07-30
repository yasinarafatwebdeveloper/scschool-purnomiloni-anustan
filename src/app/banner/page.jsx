// src/components/CarouselComponent.jsx
"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  const slides = [
    {
      image: "/images/school.jpg",
      caption: "Bk High School - Reunion",
    },
    {
      image: "/images/school2.jpg",
      caption: "Memories with Friends",
    },
    {
      image: "/images/school3.jpg",
      caption: "2026 Celebration",
    },
     {
      image: "/images/school.jpg",
      caption: "Bk High School - Reunion",
    },
    {
      image: "/images/school2.jpg",
      caption: "Memories with Friends",
    },
    {
      image: "/images/school3.jpg",
      caption: "2026 Celebration",
    },
  ];

  return (
    <div className="mt-20">
<div>
  <h1 className="text-2xl sm:text-4xl text-center text-emerald-500">Our School <span className="text-pink-600">Memorable</span> Days</h1>
</div>


    <div className="max-w-4xl mx-auto mt-10">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={3000}
        transitionTime={600}
        stopOnHover={true}
      >
        {slides.map((slide, index) => (
          <div key={index}>
            <img src={slide.image} alt={`Slide ${index + 1}`} />
            <p className="legend">{slide.caption}</p>
          </div>
        ))}
      </Carousel>
    </div>
    </div>
  );
};

export default Banner;
