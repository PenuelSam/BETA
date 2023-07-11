import { Link } from "react-router-dom"
import TrainTitle from "../TrainTitle"
import line from '../../assets/Figma-Images/Manufacturing/Line.png'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import TrainBtns from "../TrainBtn";

const Form = () => {

  return (
    <div>
      <TrainTitle />
      <div className="maxcontainer2 sm:w-full flex items-center sm:justify-center pb-[25%] sm:pb-[10%]">
        <img src={line} alt="" className="absolute left-[20%] z-[2] lg:hidden" />
        <TrainBtns />
        
        <div className="trainFormContainer">
        <form action="" className="smFormStyle">
          <div className="relative">
            <div className="relative z-[10] my-[50px]">
            <KeyboardArrowDownOutlinedIcon className="KeyDownI" sx={{fill: 'gray'}} />
            <input type="text" placeholder="Level of Training*" className="trainInput shadow-lg " />
            </div>
            <div className="inputDrop">
              <p className="inputDropText">Beginner</p>
              <p className="inputDropText">Intermediate</p>
              <p className="inputDropText">Advanced</p>
            </div>
          </div>
          <div className=" sm:h-[60px]">
            <input type="text" placeholder="Institution Name*" className="trainInputI" />
          </div>
          <div className=" sm:h-[60px]">
            <input type="text" placeholder="Course Title*" className="trainInputI" />
          </div>
          <div className=" sm:h-[60px]">
            <input type="text" placeholder="Program Duration*" className="trainInputI" />
          </div>
          <div className=" sm:h-[60px]">
            <input type="text" placeholder="Qualification Obtained*" className="trainInputI" />
          </div>
          <div className="relative sm:h-[60px]">
            <KeyboardArrowDownOutlinedIcon className="KeyDown" sx={{fill: 'gray'}} />
            <input type="text" placeholder="Year*" className="trainInputI" />
          </div>
          <div className="relative sm:h-[60px]">
            <AddOutlinedIcon className="KeyDownI" sx={{fill: 'gray'}} />
            <input type="text" placeholder="Upload Certification*" className="trainInputI" />
          </div>
          <div className="trainbtns">
          <Link to='/bgchecks'><button className="trainInputBtnI">Add</button></Link>
          <Link to='/bgchecks'><button className="trainInputBtnII">Next</button></Link>
          </div>          
          <div className="w-[444px] h-[181px] rounded-md lg:hidden bg-white text-gray-500 flex items-center justify-center">
              <div className="w-[383px] h-[142px] flex items-center justify-between">
                <div>
                <h1 className="font-[700] text-[20px] leading-[30px]">Beta Medical Centre</h1>
                <span className="font-[300] text-[20px] leading-[28.2px]">Advanced | Elder Care <br /> </span>
                <span className="font-[300] text-[20px] leading-[28.2px]">3 Months | 2023 </span>
                <span className="font-[300] text-[20px] leading-[28.2px]">Certification <br /></span>
                <span className="font-[300] text-[20px] leading-[30px]">Elder Care Cert......pdf</span>
                </div>
                <CloseOutlinedIcon sx={{fill: "gray", fontSize: '50px', cursor: 'pointer'}} />
              </div>

          </div>
        </form>
        </div>
      </div>
    </div>
  )
}

export default Form






