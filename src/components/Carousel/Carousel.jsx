import React, { useEffect, useRef } from "react";
import "./Carousel.scss";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import ProductCard from "../productCard/ProductCard";

import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

import Aos from "aos";
import "aos/dist/aos.css"

const Carousel = ({data}) => {
  useEffect(()=>{
    Aos.init({duration:1500})
  },[])

  const carouselContainer = useRef();

  const navigationCarousel = (direction) => {
    const scrollContainer = carouselContainer.current;
    const scrollAmount = direction === "left" ?
    scrollContainer.scrollLeft - (scrollContainer.offsetWidth + 15) : 
    scrollContainer.scrollLeft + (scrollContainer.offsetWidth + 15);

    scrollContainer.scrollTo({
      left: scrollAmount,
      behavior:  "smooth",
    });
  };


  return (
    <ContentWrapper>
      <div className="carousel_container" data-aos="fade-up">
      <div className="navigator">
       <BsFillArrowLeftCircleFill className="carouselLeftNav arrow" style={{cursor:"pointer"}} size={35} onClick={()=>{navigationCarousel("left")}}/>
        <BsFillArrowRightCircleFill className="carouselRightNav arrow" style={{cursor:"pointer"}} size={35} onClick={()=>{navigationCarousel("right")}}/>
      </div>
        <div className="carousel_content" ref={carouselContainer}>
          <ProductCard data={data} />
        </div>
      </div>
    </ContentWrapper>
  );
};

export default Carousel;
