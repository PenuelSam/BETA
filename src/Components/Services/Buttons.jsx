import {WhatweOfferBtn } from "../../data"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

const Buttons = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      delay: 200,
      easing: "ease-in-out", 
    })
    Aos.refresh()
  },[])

  return (
    <div className="servicesBg">
      <div data-aos="zoom-in" className="maxcontainer2 sm:w-full sm:gap-2   servicesGrid">
        {WhatweOfferBtn.map((offer,i)=>(
        <img key={i} src={offer.button} alt="" className="cursor-pointer sm:h-[60px] sm:w-[170px]" />
      ))}

    </div>
    </div>
  )
}

export default Buttons


      {/*{OfferBtns.map((offer, i)=>(
          <div key={i} className="flex items-center justify-between w-[210px] h-[70px] bg-blue-300 rounded-2xl">
            <div className={`w-[50px] h-[70px] flex items-center justify-center bg-[${offer.logoBg}] rounded-l-2xl`}>
            <img src={offer.logo} alt="" />
            </div>
            <p className={`sm:w-[160px] sm:h-[70px] font-Poppins font-[300] sm:text-[13px] px-[10px] rounded-r-2xl sm:leading-[20px] flex items-center capitalize bg-[${offer.textBg}] text-[${offer.textcolor}]`}>{offer.title}</p>
          </div>
        ))} */}