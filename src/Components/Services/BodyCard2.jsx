
import image from '../../assets/Figma-Images/Care/Beta-Respite-CareImg.png'
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

const BodyCard2 = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      delay: 200,
      easing: "ease-in-out", 
    })
    Aos.refresh()
  },[])

  return (
    <div className="servicesBg2">
      <div className="maxcontainer2 lg:w-full flex lg:flex-col-reverse flex-row-reverse lg:items-start items-center lg:gap-10 relative">
          <div data-aos="zoom-in" className="bodyCard2Left">
            <div>
              <h1 className="bodyCard2H1">Beta Respite Care services integrates Beta Personal Care tasks in a respite view </h1>
              <p className="bodyCard2P">The Beta care team is well trained and equipped for planned or emergency services; this is the purpose of the Beta Respite Care. Knowing that care needs differ from time to time, we provide short term services for emergency situations or prearranged conditions in accordance with patients’ requirements. Beta Respite Care represents the ‘short break’ for the family caregivers to replenish emotionally and physically.</p>
            </div>
          </div>
          <div data-aos="zoom-in" className="bodyCard2Right lg:hidden">
            <p className='bodyCard2ImgP'>Beta Respite Care</p>
            <img src={image} alt="" className="w-[100%] z-[2] h-[100%] object-cover" />
          </div>
          <div data-aos="zoom-in" className=" hidden lg:flex">
            <p className='bodyCard2ImgP2'>Beta Respite Care</p>
            <img src={image} alt="" className="w-[100%] z-[2] h-[100%] object-cover" />
          </div>
      </div>
    </div>
  )
}

export default BodyCard2