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
        <div data-aos="zoom-in" data-aos-duration="800" data-aos-delay="200" className="flex justify-center  my-10"><h1 className="cardTitle" >{Title}</h1></div>
        <div className="flex flex-row-reverse lg:flex-col lg:items-start items-center gap-[11rem] sm:gap-32 xsm:gap-[50px] ">
            <div data-aos="zoom-in" data-aos-duration="800" data-aos-delay="200" className="w-[729px] sm:w-[100%] sm:h-[300px] h-[729px] relative lg:left-0 sm:left-0 xsm:left-0 sm:px-5 right-[-50px] sm:cardImageCenter z-[10]"><img src={Image} alt="" /></div>
            <div data-aos="zoom-in"  data-aos-duration="800" data-aos-delay="200"><p className="card2Paragraph">{Paragraph}</p></div>
        </div>
    </div>
  )
}

export default Card2