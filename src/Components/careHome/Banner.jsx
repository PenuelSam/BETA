import { Link } from "react-router-dom"


const Banner = () => {
  return (
    <div className="m-bannerbg pt-[15%]   sm:pt-[70%]">
        <div className="flex flex-col justify-center items-center">
          <h1 className="banner-c-H1">Welcome to Betacare</h1>
          <p className="banner-c-P">
          The Best Temporary staffing agency.
          </p>
          <div className="banner-c-Btns lg:hidden">
          <Link to='/register'><button className="banner-c-BtnLeft">Register as care worker</button></Link>
          <Link to='/carehome'><button className="banner-c-BtnRight">Continue as a care home</button></Link>
          </div>
          <div className="banner-c-Btnsm hidden lg:flex">
          <Link to='/register'><button className="bannerBtnLeftsm">Register as care worker</button></Link>
          <Link to='/carehome'><button className="bannerBtnRightsm">Continue as a care home</button></Link>
          </div>
        </div>
      </div>
  )
}

export default Banner