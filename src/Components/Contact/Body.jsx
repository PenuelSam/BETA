import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"


const ContactBody = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      delay: 200,
      easing: "ease-in-out", 
    })
    Aos.refresh()
  },[])

  return (
    <div className="contactBody">
      <h1 data-aos="zoom-in" className="contactBodyh1">Our team is made up of professional caretakers who take the interest and comfort of clients to heart. As we see them as part of our care network, we are always ready to listen to all suggestions, feedback or complaints. Feel free to contact us any time to get the best possible care available out there.</h1>
    </div>
  )
}

export default ContactBody