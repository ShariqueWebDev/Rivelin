import Aos from "aos";
import "./Footer.scss";
import { FaLocationArrow, FaPhone, FaEnvelope } from "react-icons/fa";
import "aos/dist/aos.css"
import { useEffect } from "react";

const Footer = () => {

    useEffect(()=>{
        Aos.init({duration:2000})
    },[])

    return (
        <footer>
            <div className="footer" data-aos="fade-up">
                <div className="footer-content">
                    <div className="col">
                        <div className="title" data-aos="fade-right">About</div>
                        <div className="text">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt autem nihil temporibus accusantium. Doloremque, unde cum omnis ducimus at voluptatibus, dicta vero fugiat vitae.
                        </div>
                    </div>
                    <div className="col" data-aos="fade-right">
                        <div className="title" data-aos="fade-right">Contact</div>
                        <div className="c-item">
                           
                            <div className="text"><FaLocationArrow /> 10130 Huebner Rd, San Antonio, Texas, 78240, United States</div>
                        </div>
                        <div className="c-item">
                          
                            <div className="text"><FaPhone /> Phone: 0 7712 3456 78</div>
                        </div>
                        <div className="c-item">
                     
                            <div className="text"><FaEnvelope /> Email: shariques966@gmail.com</div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="title" data-aos="fade-right">Products</div>
                        <div className="text" data-aos="fade-right">
                            <span>Linen</span>
                            <span>Kitchen Equipments</span>
                            <span>Fire Safety</span>
                            <span>Kitchen Stewarding</span>
                            <span>Guest Amenities</span>
                            <span>House Keeping</span>
                        </div>
                    </div>
                    <div className="col" data-aos="fade-right">
                        <div className="title">Pages</div>
                        <div className="text" data-aos="fade-right">
                            <span>Home</span>
                            <span>About</span>
                            <span>Privacy Policy</span>
                            <span>Returns</span>
                            <span>Terms & Conditions</span>
                            <span>Contact Us</span>
                        </div>
                    </div>
                </div>
                <div className="bottom-bar">
                    <div className="bottom-bar-content">
                        <div className="text">
                        Rivelin store 2023 created by Our Team E-commerce solution world
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;
