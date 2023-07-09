import { Link } from "react-router-dom"

const Banner = () => {
  return (
    <div className="m-bannerBg pt-[15%] lg:pt-[40%] sm:pt-[70%]">
        <div className="flex flex-col justify-center items-center">
          <h1 className="m-bannerH1">Welcome to Betacare</h1>
          <p className="m-bannerP">
            Warehousing, Manufacturing, Production  Staffing
          </p>
          <div className="m-bannerBtns">
          <Link to='/personal'><button className="m-bannerBtnLeft">Register as an Operative</button></Link>
          <Link to='/company'><button className="m-bannerBtnRight">Continue as a company</button></Link>
          </div>
        </div>
      </div>
  )
}

export default Banner