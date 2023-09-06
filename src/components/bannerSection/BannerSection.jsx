import React, { useState } from "react";
import "./BannerSection.scss";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../assets/header-logo.png";
import {BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill} from "react-icons/bs"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {allProductsCategories} from "../../objData/products"
import { Carousel } from "react-responsive-carousel";

const BannerSection = () => {
  const [readMore, setReadMore] = useState(false);

  // const observer = new IntersectionObserver((entries)=>{
  //     entries.forEach((entry)=>{
  //         if(entry.isIntersecting){
  //             entry.target.classList.add("show");
  //         }
  //         else{
  //             entry.target.classList.remove("show")
  //         }
  //     })
  // })

  // const hiddenElement = document.querySelectorAll(".summary_text");
  // hiddenElement.forEach((e)=>observer.observe(e));

  return (
    <ContentWrapper>
      <div className="main_container">
        <div className="intro">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="text">
            <h1>Hospitality Solution</h1>
            <p>where hospitality meets the bay</p>
          </div>
        </div>
        <div className="summary_text">
          <h1>WELCOME TO Rivelin TRADING</h1>
          <p>
            Rivelin General Trading has been established with the intent of
            providing hotels, furnished apartments, and others in the
            hospitality industry a reliable source for all their supply and
            equipment needs. Our business model is based on providing effective
            and efficient solutions for each project in industry.
            <br />
            <br />
          </p>
          <div
            className={`more_content ${
              readMore ? "active_read" : "deactive_read"
            }`}
          >
            Our vision is to be A One-Stop-Shop for everyone setting up new
            hotels and restaurants, anyone streamlining processes in hotels and
            for those contemplating a makeover of existing hotels and
            restaurants. Our comprehensive range of hotel supplies is ideal for
            hotel and guestroom properties, including essential toiletries,
            amenities and furniture all designed with hospitality in mind.
          </div>
          <button
            className="read_btn"
            onClick={() => {
              setReadMore(!readMore);
            }}
          >
            {readMore ? "Hide Text" : "Read More"}
          </button>
        </div>
        <div className="banner_img">
          <Carousel
           autoPlay={true}
           infiniteLoop={true}
           showThumbs={false}
           showIndicators={false}
           showStatus={false}
           renderArrowPrev={(handlerClick, hasPrev) => (
             <div className="carousel_button_left " onClick={handlerClick}>
               <BsFillArrowLeftCircleFill  className="text-[22px] max-md:text-[13px]  " />
             </div>
           )}
           renderArrowNext={(handlerClick, hasNex) => (
             <div className="carousel_button_right" onClick={handlerClick}>
               <BsFillArrowRightCircleFill className="rotate-180 text-[22px] max-md:text-[13px]"  />
             </div>
           )}>
          
            {
              allProductsCategories.map((image)=>{
                return (
                  <div className="image_container" >
                    <img src={image.img} key={image.id}></img>
                  </div>
                )
              })
            }
          </Carousel>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default BannerSection;
