import { WhatweOffer } from "../../data"
import image from "../../assets/Figma-Images/Care/Offer.png"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

const Body = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      delay: 200,
      easing: "ease-in-out", 
    })
    Aos.refresh()
  },[])

  return (
    <div className="bodyBg">
        <div data-aos="zoom-in" className="flex flex-col py-20 justify-center items-center">
        <h1 className="bodyH1">BetaCare offers quality services to individuals in need of care. We have services are in varying dimensions which includes Home, Live-in, Overnight, Respite, End-of-life care and many more.</h1>
        <p className="bodyP">Our carers are games friendly and can play at least two different types of games which can help in keeping our clients busy, social and active.</p>
        </div>
        <div data-aos="zoom-in" className="bodyOffer">
            <div className="bodyOfferImg"><img src={image} alt="" className="sm:px-[2%]" /></div>
            <h2 className="bodyOfferH2">What we offer our care workers</h2>
            <ul className="bodyOfferList">
                {WhatweOffer.map((offer, i) => (
                    <li className="bodyOfferLi" key={i}>{offer.title}</li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Body