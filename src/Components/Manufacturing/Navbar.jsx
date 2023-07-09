import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../../assets/Figma-Images/logo.png'
import logo2 from '../../assets/Figma-Images/menuLogo.png'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { NavLinks } from '../../data'
import { useState } from 'react';
const Navbar = () => {

  const navigate = useNavigate()
  const location = useLocation()

  const [open, setOpen] = useState(false)

    const showMenu = () => {
        setOpen(!open)
    }

  const handleLinkClick = (link) => {
    navigate(link)
  }

  return (
    <div className={`${!open} ? navbg : navmenu`}>
      <nav className="maxcontainer">
        {/* Logo */}
        <Link to='/'>
          <img src={logo} alt="logo" />
        </Link>
        {/* Links */}
          <ul className='UL-Style'>
            {NavLinks.map((nav)=>(
              <li key={nav.id} className='text-[18px] font-[700] '>
                <Link 
                to={nav.path} 
                className={location.pathname === `${nav.path}` ?`active` : `text-white hover:text-[#A0C6FC] duration-500`}
                onClick={() => handleLinkClick(`${nav.path}`)}
                >{nav.name}</Link>
              </li>
            ))}
          </ul>

          <div className='hidden fixed right-0 lg:flex pr-[20px]'>
                {open ? <CloseIcon fontSize='large' className='z-[200] cursor-pointer' onClick={showMenu} /> :<MenuIcon fontSize='large' onClick={showMenu} className='z-[200] cursor-pointer' />} 
                <div className={open ? `menuOpen` : `menuClose`}>
                  <Link to='/' onClick={showMenu}><img src={logo2} alt="" /></Link>
                <ul className='flex flex-col items-center justify-center gap-10'>
                {
                    NavLinks.map((nav)=> (
                      <>
                      <Link to={nav.path} onClick={showMenu}>
                        <div key={nav.id} className='w-[248px] h-[28px] flex items-center justify-between shadow-lg px-5'>
                          <li key={nav.id} className={`text-[#021A71] font-[700]`}>{nav.name}</li>
                          <img src={nav.Png} alt="" />
                        </div>
                      </Link>
                      </>
                    ))
                }
                </ul>
                </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar