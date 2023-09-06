import React from "react";
import "./MobileMenu.scss"
import { BsChevronDown } from "react-icons/bs";

const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "Client", url: "/about" },
  { id: 3, name: "Products", subMenu: true },
  { id: 4, name: "About Us", url: "/contact" },
  { id: 5, name: "Contact Us", url: "/" },
];

const subMenuData = [
  { id: 1, name: "Linen" },
  { id: 2, name: "Kitchen Eqp"},
  { id: 3, name: "Kitchen Stewarding" },
  { id: 4, name: "House Keeping", doc_count: 107 },
  { id: 5, name: "Guest Animities", doc_count: 107 },
];

const MenuMobile = ({ showCatMenu, setShowCatMenu, setMobileMenu, mobileMenu}) => {

  return (
    <ul className={`mobile_menu_container ${mobileMenu?"active":""}`} >
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {!!item?.subMenu ? (
              <li
                className=""
                onClick={() => {
                  setShowCatMenu(!showCatMenu);
                  
                }}
              >
                <div className="chevron_down">
                  {item.name}
                  <BsChevronDown style={{marginLeft:"5px"}} />
                </div>
                  <ul className={`submenu ${showCatMenu?"active":""}`}>
                    {/* DATA FETCHING FROM API */}
                    {subMenuData?.map((c) => {
                      return (
                        <div key={c.id} >
                          <li
                            className=""
                            onClick={() => {
                              setMobileMenu(false);
                            }}
                          >
                            {c.name}
                          </li>
                        </div>
                      );
                    })}
                  </ul>
              </li>
            ) : (
              <li
                className="cursor-pointer"
                onClick={() => {
                  setMobileMenu(false);
                }}
              >
                {item.name}
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default MenuMobile;


