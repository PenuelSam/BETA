/* eslint-disable react/prop-types */
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"


const Title = ({title}) => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      delay: 200,
      easing: "ease-in-out", 
    })
    Aos.refresh()
  },[])

  return (
    <div className="TitleBg">
      <h1 data-aos="zoom-in" className="TitleH1">{title}</h1>
    </div>
  )
}

export default Title