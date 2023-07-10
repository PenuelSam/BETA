/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

const Card = ({Title, Paragraph, Image}) => {
  
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
        <div data-aos="zoom-in" className="flex justify-center sm:my-5 my-10"><h1 className="cardTitle" >{Title}</h1></div>
        <div className="flex lg:flex-col lg:items-start   items-center gap-[11rem] sm:gap-32 xsm:gap-10">
            <div data-aos="zoom-in"  className="w-[729px] sm:w-[100%] sm:h-[300px] h-[729px] z-[10] sm:px-5"><img src={Image} alt="" /></div>
            <div data-aos="zoom-in"><p className="cardParagraph">{Paragraph}</p></div>
        </div>
    </div>
  )
}

export default Card