import React from "react";
import BannerSection from "../components/bannerSection/BannerSection";
import Linen from "../components/linen/Linen";
import Products from "../components/Product/Products";
import KitchenEqp from "../components/kitchenEqp/KitchenEqp";
import AllProducts from "../components/AllProducts/AllProducts";


const Home = () => {

  return (
    <div>
      <BannerSection />
      <Products heading={"Product Categories"} />
      <Linen heading={"Linen Products"} />
      <KitchenEqp heading={"Kitchen Equipment"} />
      <AllProducts />
    </div>
  );
};

export default Home;
