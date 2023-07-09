import image from '../../assets/Figma-Images/Manufacturing/whatweoffer.png'
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

const Offer = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      delay: 200,
      easing: "ease-in-out", 
    })
    Aos.refresh()
  },[])

  return (
    <div className=''>
        <div className='flex items-center lg:flex-col lg:gap-10 lg:mb-20 gap-40'>
            <div data-aos="zoom-in">
                <img src={image} alt="" />
            </div>
            <ul data-aos="zoom-in" className='m-OfferLinks'>
                <li className='m-OfferLi'>Production Operatives</li>
                <li className='m-OfferLi'>Hygiene Operatives</li>
                <li className='m-OfferLi'>Despatch Operatives</li>
            </ul>
        </div>
    </div>
  )
}

export default Offer