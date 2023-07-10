/* eslint-disable react/prop-types */
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

const Card2 = ({Title, Paragraph, Image}) => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      delay: 200,
      easing: "ease-in-out", 
    })
    Aos.refresh()
  },[])

  return (
    <div  className="w-[100%]">
        <div data-aos="zoom-in" data-aos-duration="800" data-aos-delay="200" className="flex justify-center lg:my-20 my-10"><h1 className="cardTitle" >{Title}</h1></div>
        <div className="flex flex-row-reverse lg:flex-col lg:items-start items-center gap-[11rem]">
            <div data-aos="zoom-in" data-aos-duration="800" data-aos-delay="200" className="w-[729px] sm:w-[100%] sm:h-[400px] h-[729px] relative lg:left-0 sm:left-0 xsm:left-0 right-[-50px] sm:cardImageCenter z-[10]"><img src={Image} alt="" /></div>
            <div data-aos="zoom-in"  data-aos-duration="800" data-aos-delay="200"><p className="card2Paragraph">{Paragraph}</p></div>
        </div>
    </div>
  )
}

export default Card2