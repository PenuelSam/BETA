import { PersonalCareList } from "../../data"
import image from '../../assets/Figma-Images/Care/Beta-Personal-Care.png'
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
    <div id="personalcare" className="servicesBg">
      <div className="maxcontainer2 lg:w-full flex lg:flex-col-reverse items-center  lg:items-start  relative">
          <div data-aos="zoom-in" className="bodyCard1Left">
            <div>
              <h1 className="bodyCard1H1">Building on the Beta Constructive Approach, we make sure to tailor ‘Beta Care Services’ to explicit requirements of our clients with the best private hygiene and practices. </h1>
              <p className="bodyCard1P">The Beta Care Team cares to know the client as a person to understand likes and dislikes, view of situations and most importantly, we value personal opinions. Beta Personal Care incorporates variety of tasks; however, Beta Care Approach is not limited to these:</p>
            </div>
            <ul className="bodyCard1Lists">
              {PersonalCareList.map((care, i) => (
                <li key={i}>{care.title}</li>
              ))}
            </ul>
          </div>
          <div data-aos="zoom-in" className="bodyCard1Right lg:hidden">
            <p className="bodyCard1ImgP">Beta Personal Care </p>
            <img src={image} alt="" className="w-[100%] z-[2] h-[100%] object-cover" />
          </div>
          <div data-aos="zoom-in" className="hidden lg:flex">
            <p className="bodyCard1ImgP2">Beta Personal Care </p>
            <img src={image} alt=""  className="w-[100%] px-[3%]"/>
          </div>
      </div>
    </div>
  )
}

export default BodyCard1