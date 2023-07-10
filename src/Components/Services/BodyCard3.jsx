import image from '../../assets/Figma-Images/Care/Beta-Nursing-Care.png'
import { NursingList } from '../../data'
import Next from '../../assets/Figma-Images/Care/Next.png'
import { Link } from 'react-router-dom'
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
      <div className="maxcontainer2 lg:w-full lg:items-start flex lg:flex-col-reverse items-center relative">
          <div data-aos="zoom-in" className="bodyCard3Left">
            <div>
              <h1 className="bodyCard3H1">The family caregiver has a lot to do, but sometimes medical needs may require more attention. </h1>
              <p className="bodyCard3P">The purpose of the Beta Personal Nursing Care is to complement and supplement the family caregivers for specific medical care. We provide nurses for the medical care of clients with the aim of achieving a positive outcome in line with the Beta Care Approach. Beta nurses take responsibility for:</p>
            </div>
            <ul className="bodyCard1Lists">
              {NursingList.map((care, i) => (
                <li key={i}>{care.title}</li>
              ))}
            </ul>
            <Link to='/services2'>
              <img src={Next} alt="" className='sm:w-[100px] object-cover' />
            </Link>
          </div>
          <div data-aos="zoom-in" className="bodyCard1Right lg:hidden">
            <p className="bodyCard1ImgP">Beta Personal Nursing Care </p>
            <img src={image} alt="" className="w-[100%] z-[2] h-[100%] object-cover" />
          </div>
          <div data-aos="zoom-in" className=" hidden lg:flex">
            <p className="bodyCard3ImgP2">Beta Personal Nursing Care </p>
            <img src={image} alt="" className="w-[100%] px-[2%] z-[2] h-[100%] object-cover" />
          </div>
      </div>
    </div>
  )
}

export default BodyCard3