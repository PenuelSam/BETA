import Banner from "../Components/mainHome/Banner"
import Cost from "../Components/mainHome/Cost"
import OnBoard from "../Components/mainHome/OnBoard"
import Team from "../Components/mainHome/Team"
import TimeSaving from "../Components/mainHome/TimeSaving"

const Home = () => {
  
  return (
    <div className="w-[100%] overflow-x-hidden">
      <Banner />
      <OnBoard />
      <TimeSaving />
      <Cost />
      <Team />
    </div>
  )
}

export default Home