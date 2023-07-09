import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

const BetaCare = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      delay: 200,
      easing: "ease-in-out", 
    })
    Aos.refresh()
  },[])

  return (
    <div  className="BetaCareBg">
        <h1 data-aos="zoom-in" className="BetaCareH1">Beta Care Team</h1>
        <p data-aos="zoom-in" className="BetaCareP">Every individual is unique; we apply working theories in practice to understand the specific needs of our clients. Our certified and dependable team is trained to always study the progressive changes in patients and adjust the care strategies accordingly.Beta Care Team is a qualified direct contact provider of care services. In the bid to contribute to humanity, we offer quality services to individuals in need of care. Our services are in varying dimensions and it certainly includes home care. Our team is made up of professional caretakers who take the interest and comfort of clients to heart, as we see them as part of our care network.</p>
    </div>
  )
}

export default BetaCare