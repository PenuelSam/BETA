import { Link } from 'react-router-dom'
import logo from '../../assets/Figma-Images/logo.png'
import { NavLinks1 } from '../../data'
const Navbar = () => {
  return (
    <div className="navbg">
      <nav className="maxcontainer lg:w-full">
        {/* Logo */}
        <Link to='/'>
          <img src={logo} alt="logo" />
        </Link>
        {/* Links */}
          <ul className='UL-Style'>
            {NavLinks1.map((nav)=>(
              <li key={nav.id} className='text-[18px] font-[700] '>
                <a href={nav.path}>{nav.name}</a>
              </li>
            ))}
          </ul>
      </nav>
    </div>
  )
}

export default Navbar