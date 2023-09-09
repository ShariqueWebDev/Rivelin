import React from "react";
import "./ProductCard.scss";
import Loader from "../loader/Loader";


const ProductCard = ({ data, loader }) => {

  return (
    <>
    {!data && loader && <Loader/>}
      {data && data.map((items) => {
          return (
        <div className="product_card" >
          <div className="product_content" key={items.id}>
            <div className="product_img">
              <img src={items.img} alt="" />
            </div>
            <div className="product_name">{items.name}</div>
          </div>
        </div>
          );
      })}
    </>
  );
};

export default ProductCard;
