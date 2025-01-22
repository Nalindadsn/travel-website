"use client";
import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Slider = () => {
  const data = [
    {
      image: "/img/1.jpg",
      caption: "First Slide",
      description: "Description Here",
    },
    {
      image: "/img/2.jpg",
      caption: "Second Slide",
      description: "Description Here",
    },
    {
      image: "/img/3.jpg",
      caption: "Third Slide",
      description: "Description Here",
    },
  ];

  return (
    <div className="overflow-hidden">
      <div className="row">
        <div className="col-12">
          <Carousel>
            {data.map((slide, i) => {
              return (
                <Carousel.Item key={i}>
                  <img
                    className="d-block w-100"
                    src={slide.image}
                    alt={slide.caption}
                  />
                  <Carousel.Caption>
                    <h3>{slide.caption}</h3>
                    <p>{slide.description}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Slider;
