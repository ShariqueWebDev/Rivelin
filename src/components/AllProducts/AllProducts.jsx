import React, { useEffect } from "react";
import "./AllProducts.scss";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import ProductCard from "../productCard/ProductCard";
import { allProducts } from "../../objData/allProducts";
import { useNavigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css"

const AllProducts = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
    const navigate = useNavigate()
  return (
    <ContentWrapper>
      <div className="all_products_container">
        <div className="heading" data-aos="fade-up">All Products</div>
        <div className="product_cards" data-aos="fade-up">
          <ProductCard data={allProducts.slice(0, 6)} />
        </div>
        <div className="see_more_btn" onClick={()=>{navigate("/more")}}>See All Product</div>
      </div>
    </ContentWrapper>
  );
};

export default AllProducts;
