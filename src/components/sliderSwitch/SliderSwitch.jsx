import React, { useState } from 'react'
import "./SliderSwitch.scss"
import {BsArrowRight} from "react-icons/bs"

const SliderSwitch = ({switchData, fetchTabData}) => {
    
    const [selectedTab, setSelectedTab] = useState(false)

  const swithcHandler = (tab, index) =>{
        if(tab){
            setSelectedTab(index)
            fetchTabData(tab, index)
        }
    }

    return (
    <div className='slider_switch'>
        <div className="heading">
            <div>
                Explore other Categories
            </div>
            <div className="arrow">
                <BsArrowRight/>
            </div>
        </div>
        <div className='tab_items'>
            {switchData.map((tab, index)=>{
                return(
                    <div className='switch_li' key={index} onClick={()=>{swithcHandler(tab, index)}} style={{color: selectedTab === index ? "white" : "", backgroundColor:selectedTab === index?"#cb3359":""}}>{tab}</div>
                    )
                })}
        </div>
    </div>
  )
}

export default SliderSwitch
