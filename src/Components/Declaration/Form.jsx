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
        
        <div className="trainFormContainerBG">
        <form action="" className="smFormStyle">

        <div>
            <input type="text" placeholder="Name*" className="trainInputI" />
        </div>

        <div className="relative">
            <KeyboardArrowDownOutlinedIcon className="KeyDown" sx={{fill: 'gray'}} />
            <input type="text" placeholder="Date*" className="trainInputI" />
          </div>

          <div className="w-[444px] sm:w-[300px] sm:h-[300px] h-[267px] flex  items-start p-5 shadow-md mb-10 bg-white justify-between sm:gap-5 ">
            <input type="checkbox" className="w-[27.43px] h-[29px] rounded-md outline-none cursor-pointer"/>
            <p className="font-[300] text-[13px] leading-[30px]  text-[#3E3C38] w-[335px] ">I declare that the information provided is true and accurate to the best of my knowledge. I take full responsibility for its authenticity and understand the consequences of providing false or misleading information.</p>
          </div>

          <Link to='/vaccination'>
            <button className="trainInputBtn" type="submit">Next</button>
          </Link>   

        </form>
        </div>
      </div>
    </div>
  )
}

export default Form









