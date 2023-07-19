import Banner from "../Components/Services/Banner"
import BodyCard1 from "../Components/Services/Body1"
import BodyCard2 from "../Components/Services/BodyCard2"
import BodyCard3 from "../Components/Services/BodyCard3"
import Buttons from "../Components/Services/Buttons"
import Navbar from "../Components/mainHome/Navbar"

const Services = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Buttons />
      <BodyCard1 />
      <BodyCard2 />
      <BodyCard3 />
    </div>
  )
}

export default Services