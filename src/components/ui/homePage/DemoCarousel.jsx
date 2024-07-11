// import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const DemoCarousel = () => {
  return (
    <div className="">
      <Carousel
        autoPlay
        infiniteLoop
        showArrows
        swipeable
        stopOnHovershowIndicatorsclassName="h-12"
      >
        <div>
          <img className="h-[100px]:" src="../../../../public/CAROUSEL_1.jpg" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="../../../../public/CAROUSEL_2.jpg" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="../../../../public/CAROUSEL_3.jpg" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default DemoCarousel;
