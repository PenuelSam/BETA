import logo from "../../assets/Figma-Images/footer-logo.png";
import Facebook from "../../assets/Figma-Images/Facebook.png";
import Twitter from "../../assets/Figma-Images/Twitter.png";
import Instagram from "../../assets/Figma-Images/Instagram.png";
import Linkedin from "../../assets/Figma-Images/Linkedin.png";
import ArrowUp from "../../assets/Figma-Images/ArrowUp.png";
import CloseIcon from "@mui/icons-material/Close";
import mail from "../../assets/Figma-Images/Mail.png"
import PhoneIcon from '@mui/icons-material/Phone';
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
      
      {/*Desktop Footer */}
      <div className="maxcontainer lg:hidden flex flex-col justify-center">
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
          <div className="mt-5">
          <h1 className="footerH1 uppercase">Contact</h1>
          <div className="flex items-center mt-2 gap-5">
            <div>
            <img src={mail} alt=""/>
            </div>
            <p className="footer-m-p">Partnerships@betacarestaffing.co.uk</p>
          </div>
          <div className="flex items-center my-5 gap-5">
            <PhoneIcon sx={{fontSize:"20px", fill: "black"}} />
            <p className="footer-m-p">+447871322130</p>
          </div>
        </div>
            <div>
              <h1 className="footerH1">Find Us On</h1>
            <div className="flex gap-2 my-3">
              <img src={Facebook} alt="" className="footerIcon" />
              <img src={Twitter} alt="" className="footerIcon" />
              <img src={Instagram} alt="" className="footerIcon" />
              <img src={Linkedin} alt="" className="footerIcon" />
            </div>
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
                    <CloseIcon
                      className="modalClose"
                      onClick={handleOpenModal}
                    />
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
              <ul className="mt-5">
                  <li className="footerLi">
                    <Link to="/" className="text-[#021A71]" onClick={handleClick}>Home</Link>
                  </li>
                  <li className="footerLi"><Link to="/about" className="text-[#021A71]" onClick={handleClick}>About Us</Link></li>
                  <li className="footerLi"><Link to="/contact" className="text-[#021A71]" onClick={handleClick}>Contact Us</Link></li>
              </ul>
              <ul className="mt-5">
              <li className="footerLi"><Link to="/services" className="text-[#021A71]" onClick={handleClick}>Services</Link></li>
                  <li className="footerLi"><Link to="/personal2" className="text-[#021A71]" onClick={handleClick}>Care Worker</Link></li>
                  <li className="footerLi"><Link to="/personal" className="text-[#021A71]" onClick={handleClick}>Operatives</Link></li>
              </ul>
            </div>
          </div>
          {/*Bottom CENTER */}
          <div className="flex gap-2 w-[300px]">
          <div>
            <img src={logo} alt="" className="w-12" />
          </div>
            <div className="f-b-text">
              <p className="f-b-textp">© 2022 BetaCare. All rights reserved.</p>
            </div>
          </div>
          {/*Bottom Right */}
          <div className="">
            <Link to={location.pathname} onClick={handleClick}>
              <img src={ArrowUp} alt="" className="cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>


      {/* Mobile Footer */}
      <div className="hidden lg:flex items-start pl-[5%] flex-col justify-center">
        <div className="f-top">
          <h1 className="footerH1">betacare</h1>
          <p className="footer-m-p">
            BetaCare offers quality services to individuals in need of care. We
            have services are in varying dimensions.
          </p>
        </div>
        <div className="mt-10">
          <h1 className="footerH1 uppercase">Contact</h1>
          <div className="flex items-center mt-2 gap-5">
            <div>
            <img src={mail} alt=""/>
            </div>
            <p className="footer-m-p">Partnerships@betacarestaffing.co.uk</p>
          </div>
          <div className="flex items-center mt-5 gap-5">
            <PhoneIcon sx={{fontSize:"20px"}} />
            <p className="footer-m-p">+447871322130</p>
          </div>
        </div>
        <div className="f-center">
          <div className="f-left">
            <div className="social">
              <p className="socialp">Find Us On</p>
              <div className="socialIcons">
                <img src={Facebook} alt="" className="w-[20px] h-[20px]"/>
                <img src={Twitter} alt="" className="w-[20px] h-[20px]"/>
                <img src={Instagram} alt="" className="w-[20px] h-[20px]"/>
                <img src={Linkedin} alt="" className="w-[20px] h-[20px]"/>
              </div>
            </div>
            <div className="gap-2 py-5">
              <p className="linksP">Quick Links</p>
              <div className="flex items-center gap-10">
                <ul className="mt-5">
                  <li className="footerLi-m">
                    <Link to="/" className="text-[#021A71]" onClick={handleClick}>Home</Link>
                  </li>
                  <li className="footerLi-m"><Link to="/about" className="text-[#021A71]" onClick={handleClick}>About Us</Link></li>
                  <li className="footerLi-m"><Link to="/contact" className="text-[#021A71]" onClick={handleClick}>Contact Us</Link></li>
                </ul>
                <ul className="mt-5">
                  <li className="footerLi-m"><Link to="/services" className="text-[#021A71]" onClick={handleClick}>Services</Link></li>
                  <li className="footerLi-m"><Link to="/personal2" className="text-[#021A71]" onClick={handleClick}>Care Worker</Link></li>
                  <li className="footerLi-m"><Link to="/personal" className="text-[#021A71]" onClick={handleClick}>Operatives</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="f-right">
                <h1 className="f-sub">Subscribe</h1>
                <p className="f-subP">Stay up to date on new services, openings and oppotunities from BetaCare by <span className="f-subPspan">joining our mailing</span> list.</p>
                <div className="flex  gap-3 my-3 relative">
                    <img src={mail} alt=""  className="emailIcon"/>
                    <input type="text" placeholder="Email" className="f-input" />
                    <button className="f-btn" onClick={handleOpenModal}>Subscribe</button>
                </div>
          </div>
        </div>
        <div className="f-bottom">
          <div className="f-bottomL">
            <div>
            <img src={logo} alt="" className="w-12" />
            </div>
            <div className="f-b-text">
              <p className="f-b-textp">© 2022 BetaCare. All rights reserved.</p>
            </div>
          </div>
          <div>
            <Link to={location.pathname} onClick={handleClick}>
            <img src={ArrowUp} alt="" className="f-arrow"/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
