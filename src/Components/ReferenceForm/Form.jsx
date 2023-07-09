import { Link } from "react-router-dom"
import TrainTitle from "../TrainTitle"
import line from '../../assets/Figma-Images/Manufacturing/Line.png'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
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

        <div>
            <input type="text" placeholder="Referent's Name*" className="trainInputI" />
        </div>

          <div className="relative">
            <div className="relative z-[10] mb-[50px]">
            <KeyboardArrowDownOutlinedIcon sx={{fill: 'gray', position: 'absolute', right: '10%', top: '15%', cursor: 'pointer'}} />
            <input type="text" placeholder="Referent's Level*" className="trainInput shadow-lg " />
            </div>
            <div className="inputDrop2">
            <p className="inputDropText">Management</p>
              <p className="inputDropText">Medical/operations Director</p>
              <p className="inputDropText">Professional</p>
            </div>
          </div>

          <div>
            <input type="text" placeholder="Referent's Job Title*" className="trainInputI" />
        </div>

        <div>
            <input type="text" placeholder="Referent's Phone*" className="trainInputI" />
        </div>

        <div>
            <input type="email" placeholder="Referent's Email*" className="trainInputI" />
        </div>

        <div>
            <input type="text" placeholder="Referent's Office Address*" className="trainInputI" />
        </div>

        <div>
            <input type="text" placeholder="Relationship Referent*" className="trainInputI" />
        </div>

          <div className="trainbtnsI">
          <Link to='/payment'><button className="trainInputBtnI">Add</button></Link>
          <Link to='/payment'><button className="trainInputBtnII">Next</button></Link>
          </div>          
          <div className="w-[444px] h-[181px] lg:hidden rounded-md bg-white text-gray-500 flex items-center justify-center">
              <div className="w-[383px] h-[142px] flex items-center justify-between">
                <div>
                <h1 className="font-[700] text-[20px] leading-[30px]">DR. Maxwell</h1>
                <span className="font-[300] text-[20px] leading-[28.2px]">HR | Beta Care Centre <br /> </span>
                <span className="font-[300] text-[20px] leading-[28.2px]">Management </span>
                <span className="font-[300] text-[20px] leading-[28.2px]">Employer</span>
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









