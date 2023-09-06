import React, {useEffect, useState} from "react";
import "./MoreProducts.scss"

import ContentWrapper from "../contentWrapper/ContentWrapper";
import ProductCard from "../productCard/ProductCard";
import { allProducts } from "../../objData/allProducts";
import { kitchenEqp} from "../../objData/kitchenEqp";
import { linenCategories} from "../../objData/linen";
import { useLocation } from "react-router-dom";
import SliderSwitch from "../sliderSwitch/SliderSwitch";



const MoreProducts = () => {

    const [endpoints, setEndpoints] = useState(allProducts)
    const location = useLocation()

    useEffect(()=>{
        window.scrollTo(0, 0)
      },[location])


    const fetchTabData =(tab)=>{

        if(tab === "All Product"){
          setEndpoints(allProducts)
        }
        else if(tab === "Kitchen Equipment"){
          setEndpoints(kitchenEqp)
        }
        else{
          setEndpoints(linenCategories)
        }
      }

  return (
    <ContentWrapper>
        <div className="slider_tab">
          <SliderSwitch switchData = {["All Product", "Kitchen Equipment", "Linen Fabrics"]} fetchTabData={fetchTabData} />
        </div>
      <div className="more_products_container">
        <ProductCard data={endpoints} />
      </div>
    </ContentWrapper>
  );
};

export default MoreProducts;
