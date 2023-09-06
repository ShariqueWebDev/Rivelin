import React from 'react'
import "./Linen.scss"
import Carousel from '../Carousel/Carousel'
import ContentWrapper from '../contentWrapper/ContentWrapper'
import {BsArrowRight} from "react-icons/bs"
import {linenCategories} from "../../objData/linen"

const Linen = ({heading}) => {
  return (
    <ContentWrapper>
    <div className="all_products">
      <div className="contents">
        <div className="main_heading">
          <h2>{heading}</h2>
          <BsArrowRight size={35} />
        </div>
        <div className="slider">
          <Carousel data={linenCategories}/>
        </div>
      </div>
    </div>
  </ContentWrapper> 
   )
}

export default Linen
