/* eslint-disable react/prop-types */
import { Link, useLocation, useNavigate } from "react-router-dom"
import {TrainButton } from "../data"

const TrainBtns = () => {
    const navigate = useNavigate();
    const location = useLocation()

    const handleTrainClick = (path) => {
        navigate(path)
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

  return (
    <div className="flex flex-col gap-[4rem] relative z-[5] lg:hidden">
          {TrainButton.map((train,i)=>(
            <Link 
            key={i} 
            to={train.path}
            onClick={() => handleTrainClick(`${train.path}`)}
            className={location.pathname === `${train.path}` ? 'bg-[#04559E] rounded-2xl' : 'bg-[#021A71] rounded-2xl'}
            >
              <div className="w-[406px]  h-[74px]  flex items-center justify-around">
                    <p className="w-[195px] h-[32.99px] font-[500] text-[24px] leading-[25px] flex items-center text-white">{train.name}</p>
                    <img src={train.img} alt="" />
              </div>
            </Link>
          ))}
        </div>
  )
}

export default TrainBtns