import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/Figma-Images/logo.png";
import logo2 from '../../assets/Figma-Images/betacare-logo.jpg'
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { NavLinks } from "../../data";
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { useState } from "react";
const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [toggleMenu, setToggleMenu] = useState(false);

  const handleLinkClick = (link) => {
    navigate(link);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleClick = (link) => {
    navigate(link)
    setToggleMenu(false)
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  return (
    <div className="navbg">
      <nav className="maxcontainer">
        {/* Logo */}
        <Link to="/" onClick={() => handleClick('/')}>
          <img src={logo} alt="logo" />
        </Link>
        {/* Links */}
        <ul className="UL-Style">
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
        </ul>

        {/* Mobile */}
        <div className="hidden lg:flex">
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
            <Link to="/" onClick={() => handleClick('/')}>
              <img src={logo2} alt="" className="w-[120px] relative top-[-15%] " />
            </Link>
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
                      <ArrowRightOutlinedIcon sx={{fill: '#434445'}} className="absolute right-5" />,
                    </div>
                    </div>                  
                  </Link>
                  <div className=" ml-[8%] w-[230px] h-[0.1px] bg-[#d0d0d1]"></div> 
                </>
              ))}
            </ul>
          </div>
        )}
        
      </div>
        
      </nav>
    </div>
  );
};

export default Navbar;

{/*<div className="hidden fixed inset-0 justify-end  lg:flex z-50">
          {open ? (
            <CloseIcon
              fontSize="large"
              className="z-[200] cursor-pointer"
              onClick={showMenu}
            />
          ) : (
            <MenuIcon
              fontSize="large"
              onClick={showMenu}
              className="z-[200] cursor-pointer"
            />
          )}
          <div
            className={
              open
                ? `w-60 bg-white h-screen transform translate-x-0  ease-in-out duration-300`
                : `menuClose`
            }
          >
            <Link to="/" onClick={showMenu}>
              <img src={logo2} alt="" />
            </Link>
            <ul className="flex flex-col items-center justify-center gap-10">
              {NavLinks.map((nav) => (
                <>
                  <Link to={nav.path} onClick={showMenu}>
                    <div
                      key={nav.id}
                      className="w-[248px] h-[28px] flex items-center justify-between shadow-lg px-5"
                    >
                      <li key={nav.id} className={`text-[#021A71] font-[700]`}>
                        {nav.name}
                      </li>
                      <img src={nav.Png} alt="" />
                    </div>
                  </Link>
                </>
              ))}
            </ul>
          </div>
              </div>*/}
