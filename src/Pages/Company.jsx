import Banner from "../Components/Company/Banner"
import Despatch from "../Components/Company/Despatch"
import Hygiene from "../Components/Company/Hygiene"
import Production from "../Components/Company/Production"
import Navbar from "../Components/Manufacturing/Navbar"

const Company = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Production />
      <Hygiene />
      <Despatch />
    </div>
  )
}

export default Company