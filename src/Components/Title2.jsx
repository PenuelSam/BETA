/* eslint-disable react/prop-types */
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"


const Title2 = ({title}) => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      delay: 200,
      easing: "ease-in-out", 
    })
    Aos.refresh()
  },[])

  return (
    <div data-aos="zoom-in"  className="flex items-center justify-center my-10">
        <h1 className="w-[803px] lg:w-[500px]  sm:w-[340px] h-[87px] font-[700] text-[30px] sm:text-[20px] leading-[66px] sm:leading-[40px] text-center text-[#041E3E]">
            {title}
        </h1>
    </div>
  )
}

export default Title2