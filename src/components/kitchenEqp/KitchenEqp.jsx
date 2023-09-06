import React from 'react'
import "./KitchenEqp.scss"

import {kitchenEqp} from "../../objData/kitchenEqp"

import ContentWrapper from "../contentWrapper/ContentWrapper";
import { BsArrowRight } from "react-icons/bs";
import Carousel from "../Carousel/Carousel";

const KitchenEqp = ({heading}) => {
  return (
    <ContentWrapper>
      <div className="all_products">
        <div className="contents">
          <div className="main_heading">
            <h2>{heading}</h2>
            <BsArrowRight size={35} />
          </div>
          <div className="slider">
            <Carousel data={kitchenEqp}/>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default KitchenEqp;

