import { Link } from "react-router-dom"
import TrainTitle from "../TrainTitle"
import line from '../../assets/Figma-Images/Manufacturing/Line.png'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import TrainBtns from "../TrainBtn";


const Form = () => {
  return (
    <div>
      <TrainTitle />
      <div className="maxcontainer2 sm:w-full flex items-center sm:justify-center pb-[25%] sm:pb-[10px]">
        <img src={line} alt="" className="absolute left-[20%] z-[2] lg:hidden" />
        <TrainBtns />
        
        <div className="trainFormContainerCv">
        <form action="" className="smFormStyle">

        <div className=" sm:h-[60px] sm:mt-[5%]">
            <input type="text" placeholder="Name*" className="trainInputI" />
        </div>

        <div className="relative sm:h-[60px]">
            <KeyboardArrowDownOutlinedIcon className="KeyDown" sx={{fill: 'gray'}} />
            <input type="text" placeholder="Date*" className="trainInputI" />
          </div>

          <div className="w-[444px] sm:w-[300px] sm:h-[200px] h-[140px] flex  items-start p-5 shadow-md mb-10 bg-white justify-between sm:gap-5 ">
            <input type="checkbox" className="w-[27.43px] h-[29px] rounded-md outline-none cursor-pointer"/>
            <p className="font-[300] text-[15px] leading-[30px] text-[#041E3E] w-[335px] h-[93px]">I confirm receiving the flu vaccine to prioritize health and community well-being. </p>
          </div>

          <Link to='/manufacturing'>
            <button className="trainInputBtn" type="submit">Save</button>
          </Link>   

        </form>
        </div>
      </div>
    </div>
  )
}

export default Form









