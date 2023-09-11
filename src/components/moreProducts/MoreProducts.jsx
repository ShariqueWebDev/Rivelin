import React, {useEffect, useState} from "react";
import "./MoreProducts.scss"

import ContentWrapper from "../contentWrapper/ContentWrapper";
import ProductCard from "../productCard/ProductCard";
import { allProducts } from "../../objData/allProducts";
import { kitchenEqp} from "../../objData/kitchenEqp";
import { linenCategories} from "../../objData/linen";
import { useLocation } from "react-router-dom";
import SliderSwitch from "../sliderSwitch/SliderSwitch";
import Loader from "../loader/Loader";
import Aos from "aos";
import "aos/dist/aos.css"



const MoreProducts = () => {

  const [isLoading, setIsLoading] = useState(false)

  useEffect(()=>{
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 3000);
  },[])

    const [endpoints, setEndpoints] = useState(allProducts)
    const location = useLocation()
    const [loader,setLoader] = useState(true)

    useEffect(()=>{
        window.scrollTo(0, 0)
        Aos.init({duration:2000})
      },[endpoints, location])

      setTimeout(() => {
        setLoader(false)
      }, 2000);

    const fetchTabData =(tab)=>{
      if(!tab ){
        setLoader(true)
        setTimeout(() => {
          setEndpoints(allProducts)
          setLoader(false)
        }, 2000);
      }else if(tab === "All Product"){
        setLoader(true)
        setTimeout(() => {
            setEndpoints(allProducts)
            setLoader(false)
          }, 1000);
        }
        else if(tab === "Kitchen Equipment"){
          setLoader(true)
          
          setTimeout(() => {
            setEndpoints(kitchenEqp)
            setLoader(false)
          }, 1000);
        }
        else if(tab === "Linen Fabrics"){
          setLoader(true)
          setTimeout(() => {
            setEndpoints(linenCategories)
            
          }, 1000);
          setTimeout(() => {
            setLoader(false)
          }, 3000);
        }
      }

  return (
    <ContentWrapper>
       <div className="slider_tab" data-aos="fade-up" >
          <SliderSwitch switchData = {["All Product", "Kitchen Equipment", "Linen Fabrics"]} fetchTabData={fetchTabData} loader={loader} setLoader={setLoader} />
        </div>
        {loader && <Loader/>}
      <div className="more_products_container" data-aos = "fade-right" > 
        <ProductCard data={endpoints} data-aos={"fade-up"}/>
      </div>
    </ContentWrapper>
  );
};

export default MoreProducts;
