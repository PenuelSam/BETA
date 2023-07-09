import { PalliativeList } from "../../data"
import image from '../../assets/Figma-Images/Care/Beta-Palliative-Care.png'
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
          <div data-aos="zoom-in" className="s2-bodyCard2Left">
            <div>
              <h1 className="s2-bodyCard2H1">Our services are not limited to clients who needs recovery care, we are also passionate about caring for people living with life threatening illness that requires proper professional care or who has limited time to live.</h1>
              <p className="s2-bodyCard2P">Beta Palliative Care and End of Life Care focus on providing care to patients with illnesses such as Alzheimer’s disease and dementia, cancer, stroke, and other life-limiting illnesses. Considering cultural background and religious orientation, Beta Care Approach develops a unique supportive care for patients that falls in these categories and our team specifically ensures:</p>
            </div>
            <ul className="s2-bodyCard2Lists">
              {PalliativeList.map((care, i) => (
                <li key={i}>{care.title}</li>
              ))}
            </ul>
          </div>
          <div data-aos="zoom-in" className="s2-bodyCard2Right lg:hidden">
            <p className="s2-bodyCard2ImgP">Beta Palliative Care and End of Life Care </p>
            <img src={image} alt="" className="w-[100%] z-[2] h-[100%] object-cover" />
          </div>
          <div data-aos="zoom-in" className="hidden lg:flex">
            <p className="s2-bodyCard2ImgP2">Beta Palliative Care and End of Life Care </p>
            <img src={image} alt="" className="w-[100%] z-[2] h-[100%] object-cover" />
          </div>
      </div>
    </div>
  )
}

export default BodyCard2