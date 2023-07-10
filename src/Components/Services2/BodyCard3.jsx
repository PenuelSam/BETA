import { Link } from "react-router-dom"
import { AlzheimerList } from "../../data"
import image from '../../assets/Figma-Images/Care/Dementia-Care.png'
import Back from '../../assets/Figma-Images/Care/Back.png'
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

const BodyCard3 = () => {
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
      <div className="maxcontainer2 lg:w-full lg:flex-col-reverse lg:gap-10 flex items-center relative">
          <div data-aos="zoom-in" className="s2-bodyCard3Left">
            <div>
              <h1 className="s2-bodyCard3H1">Our team understands that taking care of Alzheimer&lsquo;s and dementia patients requires focus, patience and flexibility because the daily tasks increases as the disease progresses.  </h1>
              <p className="s2-bodyCard3P">We care with pure expression of love and with the Beta Care Approach; our patients are definitely in safe hands. We help reduce the frustration and intense emotional stress of family caregivers through counseling. The benefits of Beta Alzheimer&lsquo;s and Dementia Care are not limited to the following:</p>
            </div>
            <ul className="s2-bodyCard3Lists">
              {AlzheimerList.map((care, i) => (
                <li key={i}>{care.title}</li>
              ))}
            </ul>
            <Link to='/services'>
              <img src={Back} alt="" className='sm:w-[100px] object-cover'/>
            </Link>
          </div>
          <div data-aos="zoom-in" className="s2-bodyCard3Right lg:hidden">
            <p className="s2-bodyCard3ImgP">Beta Alzheimer&lsquo;s and Dementia Care  </p>
            <img src={image} alt="" className="w-[100%] z-[2] h-[100%] object-cover" />
          </div>
          <div data-aos="zoom-in" className="hidden lg:flex">
            <p className="s2-bodyCard3ImgP2">Beta Alzheimer&lsquo;s and Dementia Care  </p>
            <img src={image} alt="" className="w-[100%] px-[3%]  z-[2] object-cover" />
          </div>
      </div>
    </div>
  )
}

export default BodyCard3