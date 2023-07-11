import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"


const Body = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      delay: 200,
      easing: "ease-in-out", 
    })
    Aos.refresh()
  },[])

  return (
    <div data-aos="zoom-in" className=" flex flex-col items-center justify-center pt-10 sm:pt-5 pb-20 sm:pb-10">
        <p className="m-bodyP">Our operatives are able to communicate in the English language and know the importance of teamwork.</p>
        <h1 className="m-bodyH1">They are also in the know that they are to report any incidents or environmental concerns to their line manager.</h1>
    </div>
  )
}

export default Body