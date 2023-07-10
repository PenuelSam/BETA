import { Link } from "react-router-dom"

import TrainTitle from "../TrainTitle"
import line from '../../assets/Figma-Images/Manufacturing/Line.png'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import TrainBtns from "../TrainBtn";

const Form = () => {

  return (
    <div>
      <TrainTitle />
      <div className="maxcontainer2 sm:w-full flex items-center sm:justify-center pb-[25%]">
        <img src={line} alt="" className="absolute left-[20%] z-[2] lg:hidden" />
        <TrainBtns />
        
        
        <div className="trainFormContainer">
        <form action="" className="smFormStyle">
          <div>
            <input type="text" placeholder="First Name*" className="trainInput" />
          </div>
          <div>
            <input type="text" placeholder="Last Name*" className="trainInput" />
          </div>
          <div className="relative">
            <KeyboardArrowDownOutlinedIcon className="KeyDown" sx={{fill: 'gray'}}/>
            <input type="text" placeholder="Gender*" className="trainInput" />
          </div>
          <div>
            <input type="text" placeholder="Phone Number" className="trainInput" />
          </div>
          <div>
            <input type="email" placeholder="Email*" className="trainInput" />
          </div>
          <div className="relative">
            <KeyboardArrowDownOutlinedIcon className="KeyDown" sx={{fill: 'gray'}} />
            <input type="text" placeholder="Country" className="trainInput" />
          </div>
          <div className="relative">
            <KeyboardArrowDownOutlinedIcon className="KeyDown" sx={{fill: 'gray'}} />
            <input type="text" placeholder="State" className="trainInput" />
          </div>
          <div className="relative">
            <KeyboardArrowDownOutlinedIcon className="KeyDown" sx={{fill: 'gray'}}/>
            <input type="text" placeholder="Marital Status" className="trainInput" />
          </div>
          <Link to='/train'>
            <button className="trainInputBtn" type="submit">Next</button>
          </Link>
        </form>
        </div>
      </div>
    </div>
  )
}

export default Form