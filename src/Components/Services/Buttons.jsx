import { WhatweOfferBtn } from "../../data"
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
      <div data-aos="zoom-in" className="maxcontainer2 servicesGrid">
      {WhatweOfferBtn.map((offer,i)=>(
        <img key={i} src={offer.button} alt="" className="cursor-pointer" />
      ))}
    </div>
    </div>
  )
}

export default Buttons