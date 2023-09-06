import React from "react";
import "./ProductCard.scss";

const ProductCard = ({ data }) => {
  return (
    <>
      {data.map((items) => {
          return (
        <div className="product_card">
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
