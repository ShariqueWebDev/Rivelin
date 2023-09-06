import React, { useState, useEffect } from "react";
import "./Header.scss";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import {BsChevronDown} from "react-icons/bs"

import logo from "../../assets/header-logo.png";
import MenuMobile from "../mobileMenu/MobileMenu";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navigate = useNavigate()

  const subMenuData = [
    { id: 1, name: "Linen" },
    { id: 2, name: "Kitchen Eqp" },
    { id: 3, name: "Kitchen Stewarding" },
    { id: 4, name: "House Keeping", doc_count: 107 },
    { id: 5, name: "Guest Animities", doc_count: 107 },
  ];

  const handleScrollbar = () => {
    if (window.scrollY > 450 && window.scrollY > lastScrollY) {
      setShow(false);
      setMobileMenu(false);
    } else {
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollbar);
    return () => {
      window.removeEventListener("scroll", handleScrollbar);
    };
    // eslint-disable-next-line
  }, [lastScrollY]);
  return (
    <>
      <div className={`header_container ${show ? "active" : "active_reset"}`}>
        <ContentWrapper>
          <header>
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="menu_container">
              <div>
                <ul className="header_menu">
                  <li id="home" onClick={()=>{navigate("/")}}>Home</li>
                  <li id="products">Client</li>
                  <li id="client" onMouseEnter={()=>{setShowCatMenu(true)}}
                                  onMouseLeave={()=>{setShowCatMenu(false)}}
                  >
                    Products <BsChevronDown style={{marginLeft:"5px"}} />{showCatMenu && <ul className="submenu_ul">
                    {subMenuData.map((menuItem)=>{
                    return(
                      <>
                      <li key={menuItem.id}>
                        {menuItem.name}
                      </li>
                      </>
                    )
                  })}
                    </ul>}
                  </li>
                  <li id="about_us">About Us</li>
                  <li id="contact_us">Contact Us</li>
                </ul>
              </div>
            </div>
            <div className="hamburger_menu">
              {mobileMenu ? (
                <VscChromeClose
                  className=""
                  onClick={() => {
                    setMobileMenu(false);
                    setShowCatMenu(false)
                  }}
                  size={22}
                />
              ) : (
                <BiMenuAltRight
                  className=""
                  onClick={() => {
                    setMobileMenu(true);
                    setShowCatMenu(false)
                  }}
                  size={22}
                />
              )}
            </div>
          </header>
        </ContentWrapper>
      </div>
      {/* {mobileMenu && ( */}
        <MenuMobile
          showCatMenu={showCatMenu}
          setShowCatMenu={setShowCatMenu}
          setMobileMenu={setMobileMenu}
          mobileMenu = {mobileMenu}
        />
      {/* )} */}
    </>
  );
};

export default Header;
