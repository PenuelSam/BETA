import { Link } from "react-router-dom";

const Banner = () => {

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <div className="bannerBg pt-[20%] lg:pt-[40%] sm:pt-[40%]">
        <div className="flex flex-col justify-center items-center">
          <h1 className="bannerH1 sm:bannerH1sm xsm:text-[25px]">The Recruitment Agency You Can Trust</h1>
          <p className="bannerP sm:bannerPsm">
            BetaCare Staffing is the go-to agency for manufacturing companies
            and healthcare providers in need of temporary staff. Our mission is
            to provide the best quality of candidates for your business needs.
          </p>
        <div className="bannerBtns lg:hidden">
          <Link to='/carecentre' onClick={() => handleClick()} ><button className="bannerBtnLeft">Proceed to care centre</button></Link>
          <Link to='/manufacturing' onClick={() => handleClick()}><button className="bannerBtnRight">Proceed to manufacturing</button></Link>
        </div>
        <div className=" hidden lg:flex bannerBtnsm">
          <Link to='/carecentre'  ><button className="bannerBtnLeftsm">Proceed to care centre</button></Link>
          <Link to='/manufacturing'><button className="bannerBtnRightsm">Proceed to manufacturing</button></Link>
        </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
