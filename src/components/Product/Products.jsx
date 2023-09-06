import React from "react";
import "./Products.scss";
import {allProductsCategories} from "../../objData/products"

import ContentWrapper from "../contentWrapper/ContentWrapper";
import { BsArrowRight } from "react-icons/bs";
import Carousel from "../Carousel/Carousel";

const Products = ({heading}) => {
  // let randomData = Math.floor(
  //   Math.random() * allProductsCategories.length
  // )
  return (
    <ContentWrapper>
      <div className="all_products">
        <div className="contents">
          <div className="main_heading">
            <h2>{heading}</h2>
            <BsArrowRight size={35} />
          </div>
          <div className="slider">
            <Carousel data={allProductsCategories}/>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default Products;
