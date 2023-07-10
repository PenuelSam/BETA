import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

const TrainTitle = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      delay: 200,
      easing: "ease-in-out", 
    })
    Aos.refresh()
  },[])

  return (
    <div data-aos="zoom-in" className="flex items-center justify-center py-[10%] lg:py-[15%]">
        <div className="w-[992px] lg:h-[90px] sm:h-[79px] h-[79px]">
        <h1 className="font-[700] sm:text-[20px] sm:leading-[40px] lg:leading-[55px] lg:text-[50px] text-[40px]  leading-[99px] text-[#021A71] text-center uppercase">Register as an Operative</h1>
    </div>
    </div>
  )
}

export default TrainTitle