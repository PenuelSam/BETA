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
      <div className="maxcontainer2 sm:w-full flex items-center sm:justify-center pb-[25%] sm:pb-[10px]">
        <img src={line} alt="" className="absolute left-[20%] z-[2] lg:hidden" />
        <TrainBtns />
        
        <div className="trainFormContainerID">
        <form action="" className="smFormStyle">

        <div className=" sm:h-[60px]">
            <input type="text" placeholder="Badge Title*" className="trainInputI" />
        </div>

          <div className="relative">
            <div className="relative z-[10] mb-[50px]">
            <KeyboardArrowDownOutlinedIcon className="KeyDownI" sx={{fill: 'gray'}} />
            <input type="text" placeholder="Level of Badge*" className="trainInput shadow-lg " />
            </div>
            <div className="inputDrop2">
            <p className="inputDropText">Beginner</p>
              <p className="inputDropText">Intermediate</p>
              <p className="inputDropText">Advanced</p>
            </div>
          </div>

          <div className="relative sm:h-[60px]">
            <AddOutlinedIcon className="KeyDown" sx={{fill: 'gray'}} />
            <input type="text" placeholder="Badge Image Front*" className="trainInputI" />
          </div>

          <div className="relative sm:h-[60px]">
            <AddOutlinedIcon className="KeyDown" sx={{fill: 'gray'}} />
            <input type="text" placeholder="Badge Image Back*" className="trainInputI" />
          </div>

          <div className="relative sm:h-[60px]">
            <KeyboardArrowDownOutlinedIcon className="KeyDown" sx={{fill: 'gray'}} />
            <input type="text" placeholder="Expiry Date*" className="trainInputI" />
          </div>

          <div className="relative">
            <AddOutlinedIcon sx={{fill: 'gray', position: 'absolute', right: '10%', top: '15%', cursor: 'pointer'}} />
            <input type="text" placeholder="Proof of Citizenship*" className="trainInputI" />
          </div>

          <div className="trainbtnsI">
          <Link to='/reference'><button className="trainInputBtnI">Add</button></Link>
          <Link to='/reference'><button className="trainInputBtnII">Next</button></Link>
          </div>          
          <div className="w-[444px] h-[181px] rounded-md bg-white text-gray-500 flex items-center justify-center lg:hidden">
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






