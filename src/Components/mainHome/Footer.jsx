import logo from "../../assets/Figma-Images/footer-logo.png";
import Facebook from "../../assets/Figma-Images/Facebook.png";
import Twitter from "../../assets/Figma-Images/Twitter.png";
import Instagram from "../../assets/Figma-Images/Instagram.png";
import Linkedin from "../../assets/Figma-Images/Linkedin.png";
import Center from "../../assets/Figma-Images/footerCenter.png";
import ArrowUp from "../../assets/Figma-Images/ArrowUp.png";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Footer = () => {
  const location = useLocation();

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="footerBg">
      <div className="maxcontainer2 flex flex-col justify-center">
        {/* TOP */}
        <div className="flex lg:flex-col justify-between  w-[100%]">
          {/* TOP LEFT */}
          <div>
            <div className="flex   items-center my-5 gap-2">
              <img src={logo} alt="" className="w-12" />
              <h1 className="footerH1">betacare</h1>
            </div>
            <p className="footerP">
              BetaCare offers quality services to individuals in need of care.
              We have services are in varying dimensions.
            </p>
            <div className="flex gap-2 mb-5">
              <img src={Facebook} alt="" className="footerIcon" />
              <img src={Twitter} alt="" className="footerIcon" />
              <img src={Instagram} alt="" className="footerIcon" />
              <img src={Linkedin} alt="" className="footerIcon" />
            </div>
          </div>
          {/* TOP RIGHT */}
          <div>
            <h2 className="footerH2">Subscribe</h2>
            <p className="footer-P">
              Stay up to date on new services, openings and oppotunities from
              BetaCare by{" "}
              <span className="footerSpan">joining our mailing</span> list.
            </p>

            {/*Email */}
            <div className="footerEmail">
              <input type="email" placeholder="Email" className="footerInput" />
              <button className="footerBtn" onClick={handleOpenModal}>
                Subscribe
              </button>
              {isOpen && (
                <div className="modalMbg">
                  <div className="modalBg modalFlex">
                    <CloseIcon className="modalClose" onClick={handleOpenModal}/>
                    <h1 className="modalText">Thank You</h1>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Bottom */}
        <div className="footerBottom">
          {/* Bottom Left */}
          <div>
            <p className="footerBottomP">Quick Links</p>
            <div className="flex items-center gap-5">
              <ul>
                <li className="footerLi">Home</li>
                <li className="footerLi">About Us</li>
                <li className="footerLi">Contact Us</li>
                <li className="footerLi">Openings</li>
              </ul>
              <ul>
                <li className="footerLi">Home Care</li>
                <li className="footerLi">Careers</li>
                <li className="footerLi">Book Appointment</li>
                <li className="footerLi">Blog</li>
              </ul>
            </div>
          </div>
          {/*Bottom CENTER */}
          <div className="lg:resized">
            <img src={Center} alt="" />
          </div>
          {/*Bottom Right */}
          <div className="lg:smStyle">
            <Link to={location.pathname} onClick={handleClick}>
              <img src={ArrowUp} alt="" className="cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
