import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/Figma-Images/brandname-logo.png";
/*import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { NavLinks } from "../../data";
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { useState } from "react";*/
const HomeNavbar = () => {
  const navigate = useNavigate();
  /*const location = useLocation();*/

  /*const [toggleMenu, setToggleMenu] = useState(false);

  const handleLinkClick = (link) => {
    navigate(link);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };*/
  const handleClick = (link) => {
    navigate(link)
    /*setToggleMenu(false)*/
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  return (
    <div className="navbg">
      <nav className="maxcontainer">
        {/* Logo */}
        <Link to="/" onClick={() => handleClick('/')}>
          <img src={logo} alt="logo" className="w-[200px] h-[50px] absolute top-3 lg:-left-3 left-5 object-cover"/>
        </Link>
        {/* Links */}
        {/*<ul className="UL-Style">
          {NavLinks.map((nav) => (
            <li key={nav.id} className="text-[15px] font-[700] ">
              <Link
                to={nav.path}
                className={
                  location.pathname === `${nav.path}`
                    ? `active`
                    : `text-white hover:text-[#A0C6FC] duration-500`
                }
                onClick={() => handleLinkClick(`${nav.path}`)}
              >
                {nav.name}
              </Link>
            </li>
          ))}
        </ul>*/}

        {/* Mobile */}
        {/*<div className="hidden lg:flex">
        <MenuIcon
          onClick={() => setToggleMenu(true)}
          className="cursor-pointer"
          
        />

        {toggleMenu && (
          <div className={`smallscreen_overlay flex__center slide-bottom ${toggleMenu ? 'navbar-open' : 'navbar-close'}`}>
            <CloseIcon
              sx={{fill: '#333'}}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
    
            <ul className="navbar-smallscreen_links">
            {NavLinks.map((nav) => (
                <>
                  <Link to={nav.path} onClick={() => handleClick(`${nav.path}`)} >
                    <div className="flex  items-center justify-between">
                    <div key={nav.id} className="flex items-center   px-5">
                      <div className="flex items-center gap-3">
                      <div>
                      <img src={nav.Png} alt="" className="w-[15px]" />
                      </div>
                      <li key={nav.id} className={`text-[#333] font-Raleway text-[14px] font-[500]`}>
                        {nav.name}
                      </li>
                      </div>
                      <ArrowRightOutlinedIcon sx={{fill: '#333'}} className="absolute right-5" />
                    </div>
                    </div>                  
                  </Link>
                  <div className=" ml-[8%] w-[230px] h-[0.1px] bg-[#f0eeee]"></div> 
                </>
              ))}
            </ul>
          </div>
        )}
        
      </div>*/}
        
      </nav>
    </div>
  );
};

export default HomeNavbar;

