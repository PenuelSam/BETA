import image from '../../assets/Figma-Images/Care/Hospital&Post-operative-Care.png'
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

const BodyCard1 = () => {
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
      <div className="maxcontainer2  lg:w-full flex lg:flex-col-reverse items-center lg:items-start lg:gap-10 relative">
          <div data-aos="zoom-in" className="s2-bodyCard1Left">
            <div>
              <h1 className="s2-bodyCard1H1">Recovery care is very important; we first seek to understand the condition of patients before make a personalized plan. However, our team is always ready to care. </h1>
              <p className="s2-bodyCard1P">Our team assesses patients upon discharge and then, carefully develops a care plan that is not devoid of the recommendations of the attending medical practitioner and the Beta Care Approach. </p>
            </div>
          </div>
          <div data-aos="zoom-in" className="s2-bodyCard1Right lg:hidden">
            <p className='s2-bodyCard1ImgP'>Beta After Hospital and Post-operative Care </p>
            <img src={image} alt="" className="w-[100%] z-[2] h-[100%] object-cover" />
          </div>
          <div data-aos="zoom-in" className="hidden lg:flex">
            <p className='s2-bodyCard1ImgP2'>Beta After Hospital and Post-operative Care </p>
            <img src={image} alt="" className="w-[100%] z-[2] h-[100%] object-cover" />
          </div>
      </div>
    </div>
  )
}

export default BodyCard1