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
        
        <div className="trainFormContainer">
        <form action="" className="smFormStyle">

        <div className="relative">
            <AddOutlinedIcon sx={{fill: 'gray', position: 'absolute', right: '10%', top: '15%', cursor: 'pointer'}} />
            <input type="text" placeholder="Upload Right to work ID*" className="trainInputI" />
          </div>

        <div className="relative">
            <KeyboardArrowDownOutlinedIcon sx={{fill: 'gray', position: 'absolute', right: '10%', top: '15%', cursor: 'pointer'}} />
            <input type="text" placeholder="Year Obtained*" className="trainInputI" />
          </div>

        
        <div className="relative">
            <KeyboardArrowDownOutlinedIcon sx={{fill: 'gray', position: 'absolute', right: '10%', top: '15%', cursor: 'pointer'}} />
            <input type="text" placeholder="Country of Validity*" className="trainInputI" />
          </div>

          <Link to='/cv'>
            <button className="trainInputBtn" type="submit">Next</button>
          </Link>

          <div className="w-[423px] sm:w-[340px] h-[29px] flex  items-center justify-between sm:justify-center sm:pl-[10%] sm:gap-10 ">
            <input type="checkbox" className="w-[27.43px] h-[29px] rounded-md outline-none cursor-pointer"/>
            <p className="font-[300] text-[20px]  leading-[25.83px] text-[#3E3C38]">Upload additional documentations</p>
          </div>

          <div className="w-[383.29px] sm:w-[340px] h-[21.95px] mx-auto my-20">
            <h1 className="font-[700] text-[25px] leading-[37.5px] text-center text-[#515151]">Additional Documentations</h1>
          </div>

        <div>
            <input type="text" placeholder="Document Name*" className="trainInputI" />
        </div>

        <div>
            <input type="text" placeholder="Document Description*" className="trainInputI" />
        </div>

        <div className="relative">
            <KeyboardArrowDownOutlinedIcon sx={{fill: 'gray', position: 'absolute', right: '10%', top: '15%', cursor: 'pointer'}} />
            <input type="text" placeholder="Country of Validity*" className="trainInputI" />
          </div>

        <div className="relative">
            <AddOutlinedIcon sx={{fill: 'gray', position: 'absolute', right: '10%', top: '15%', cursor: 'pointer'}} />
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









