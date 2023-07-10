import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/Figma-Images/logo.png";
import logo2 from "../../assets/Figma-Images/menuLogo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { NavLinks } from "../../data";
import { useState } from "react";
const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [toggleMenu, setToggleMenu] = useState(false);

  const handleLinkClick = (link) => {
    navigate(link);
  };

  return (
    <div className="navbg">
      <nav className="maxcontainer">
        {/* Logo */}
        <Link to="/">
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
              sx={{fill: '#000'}}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <div className="ml-[10%] mt-[10%]">
              <img src={logo2} alt="" className="w-[150px] xsm:w-[100px]" />
            </div>
            <ul className="navbar-smallscreen_links">
            {NavLinks.map((nav) => (
                <>
                  <Link to={nav.path} onClick={() => setToggleMenu(false)} >
                    <div className="flex items-center justify-between">
                    <div
                      key={nav.id}
                      className="flex items-center gap-5 px-5"
                    >
                      <img src={nav.Png} alt="" />
                      <li key={nav.id} className={`text-[#434445]  text-[15px] font-[500]`}>
                        {nav.name}
                      </li>
                    </div>
                    <ArrowRightOutlinedIcon sx={{fill: '#434445'}} className="absolute right-5" />
                    </div>
                  </Link>
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
