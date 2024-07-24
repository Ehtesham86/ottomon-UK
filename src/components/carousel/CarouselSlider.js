'use client'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import '../../css/styles.css'

function CarouselSlider() {
  return (
    <div className="carousel-container relative">
      <Carousel autoPlay={true} interval={6000} showIndicators={false} showThumbs={false} infiniteLoop={true} className="carousel">
        <div className="h-[100%]">
          <img src="/HomeBanner.webp" alt="image1" />
        </div>
        <div className="h-[100%]">
          <img src="/HomeBanner.webp" alt="image2" />
        </div>
        <div className="h-[100%]">
          <img src="/HomeBanner.webp" alt="image3" />
        </div>
        <div className="h-[100%]">
          <img src="/HomeBanner.webp" alt="image4" />
        </div>
      </Carousel>
      <div>
          <div className="absolute text-white banner-text-container" ><p className="banner-sub-heading animate fadeInUp transition duration-700
        ">A place where dreams are made</p><p className="banner-heading animate fadeInUp transition duration-700">Ottoman Beds</p><a href="/collections" className="bg-white text-black
        banner-button fadeInUp transition duration-700">Explore Now </a></div>
      </div>
    </div>
  );
}

export default CarouselSlider;
