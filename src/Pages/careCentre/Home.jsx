import Banner from "../../Components/careHome2/Banner"
import Body from "../../Components/careHome2/Body"
import Navbar from "../../Components/mainHome/Navbar"


const CareHome = () => {
  return (
    <div  className="bodyBg">
        <Navbar />
        <Banner />
        <Body />
    </div>
  )
}

export default CareHome