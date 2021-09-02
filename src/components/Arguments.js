import React, { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";

const Arguments = ({ carousel }) => {
  const [current, setCurrent] = useState(0);

  const NextSlide = () => {
    setCurrent(current === carousel.length - 1 ? 0 : current + 1);
  };

  const PrevSlide = () => {
    setCurrent(current === 0 ? carousel.length - 1 : current - 1);
  };

  return (
    <div className="arguments">
      <BsChevronLeft className="left-arrow" onClick={PrevSlide} />
      {carousel.map((slide, index) => {
        return (
          <div className={index === current ? "slide active" : "slide"}>
            {index === current && (
              <>
                <img src={slide.image} />
                <div>
                  <h3>{slide.title}</h3>
                  <p>{slide.text}</p>
                </div>
              </>
            )}
          </div>
        );
      })}
      <BsChevronRight className="right-arrow" onClick={NextSlide} />
      <ul className="dots">
        {carousel.map((slide, index) => {
          return (
            <li className={index === current ? "dot active" : "dot"}>
              <GoPrimitiveDot />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Arguments;
