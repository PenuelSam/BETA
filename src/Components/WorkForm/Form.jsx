import { Link } from "react-router-dom"
import TrainTitle from "../TrainTitle"
import line from '../../assets/Figma-Images/Manufacturing/Line.png'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import TrainBtns from "../TrainBtn";


const Form = () => {
  return (
    <div>
      <TrainTitle />
      <div className="maxcontainer2 sm:w-full flex items-center sm:justify-center pb-[25%] sm:pb-[10px]">
        <img src={line} alt="" className="absolute left-[20%] z-[2] lg:hidden" />
        <TrainBtns />
        
        <div className="trainFormContainerPay">
        <form action="" className="smFormStyle">

        <div className="relative sm:h-[60px]">
            <AddOutlinedIcon className="KeyDown" sx={{fill: 'gray'}} />
            <input type="text" placeholder="Upload Right to work ID*" className="trainInputI" />
          </div>

        <div className="relative sm:h-[60px]">
            <KeyboardArrowDownOutlinedIcon className="KeyDown" sx={{fill: 'gray'}} />
            <input type="text" placeholder="Year Obtained*" className="trainInputI" />
          </div>

        
        <div className="relative sm:h-[90px]">
            <KeyboardArrowDownOutlinedIcon className="KeyDownI" sx={{fill: 'gray'}} />
            <input type="text" placeholder="Country of Validity*" className="trainInputI" />
          </div>

          <Link to='/cv'>
            <button className="trainInputBtn" type="submit">Next</button>
          </Link>

          <div className="w-[423px] sm:w-[300px] sm:h-[1px] h-[29px] flex  items-center justify-between sm:justify-center sm:pl-[10%] sm:gap-5 ">
            <input type="checkbox" className="w-[25px] h-[29px] rounded-md outline-none cursor-pointer"/>
            <p className="font-[300] text-[16px]  leading-[25.83px] text-[#3E3C38]">Upload additional documentations</p>
          </div>

          <div className="w-[383.29px] sm:w-[370px] h-[21.95px] sm:h-[10px] mx-auto my-10">
            <h1 className="font-[700] text-[18px] leading-[37.5px] text-center text-[#515151]">Additional Documentations</h1>
          </div>

        <div className="sm:h-[60px]">
            <input type="text" placeholder="Document Name*" className="trainInputI" />
        </div>

        <div className="sm:h-[60px]">
            <input type="text" placeholder="Document Description*" className="trainInputI" />
        </div>

        <div className="relative sm:h-[60px]">
            <KeyboardArrowDownOutlinedIcon className="KeyDown" sx={{fill: 'gray'}} />
            <input type="text" placeholder="Country of Validity*" className="trainInputI" />
          </div>

        <div className="relative">
            <AddOutlinedIcon className="KeyDownI" sx={{fill: 'gray'}} />
            <input type="text" placeholder="Upload Document*" className="trainInputI" />
          </div>

          <Link to='/cv'>
            <button className="trainInputBtn" type="submit">Add</button>
          </Link>   

        </form>
        </div>
      </div>
    </div>
  )
}

export default Form









