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
      <div className="maxcontainer2 sm:w-full flex items-center sm:justify-center pb-[25%]">
        <img src={line} alt="" className="absolute left-[20%] z-[2] lg:hidden" />
        <TrainBtns />
        
        <div className="trainFormContainer">
        <form action="" className="smFormStyle">

          <div className="relative">
            <AddOutlinedIcon sx={{fill: 'gray', position: 'absolute', right: '10%', top: '15%', cursor: 'pointer'}} />
            <input type="text" placeholder="Upload Passport*" className="trainInputI" />
          </div>

          <div className="relative">
            <div className="relative z-[10] mb-[50px]">
            <KeyboardArrowDownOutlinedIcon sx={{fill: 'gray', position: 'absolute', right: '10%', top: '15%', cursor: 'pointer'}} />
            <input type="text" placeholder="Means of ID*" className="trainInput shadow-lg " />
            </div>
            <div className="inputDrop2">
              <p className="inputDropText">National ID</p>
              <p className="inputDropText">International Passport</p>
              <p className="inputDropText">Other</p>
            </div>
          </div>

          <div>
            <input type="text" placeholder="Detailed Address*" className="trainInputI" />
          </div>

          <div className="relative">
            <AddOutlinedIcon sx={{fill: 'gray', position: 'absolute', right: '10%', top: '15%', cursor: 'pointer'}} />
            <input type="text" placeholder="Recent Utility Bill*" className="trainInputI" />
          </div>

          <div className="relative">
            <KeyboardArrowDownOutlinedIcon sx={{fill: 'gray', position: 'absolute', right: '10%', top: '15%', cursor: 'pointer'}} />
            <input type="text" placeholder="Race*" className="trainInputI" />
          </div>

          <div className="relative">
            <AddOutlinedIcon sx={{fill: 'gray', position: 'absolute', right: '10%', top: '15%', cursor: 'pointer'}} />
            <input type="text" placeholder="Proof of Citizenship*" className="trainInputI" />
          </div>

          <Link to='/ids'>
            <button className="trainInputBtn" type="submit">Next</button>
          </Link>          
        </form>
        </div>
      </div>
    </div>
  )
}

export default Form






