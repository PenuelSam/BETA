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
        
        <div className="trainFormContainerPay">
        <form action="" className="smFormStyle">

        <div className="relative">
            <div className="relative z-[10] mb-[50px]">
            <KeyboardArrowDownOutlinedIcon className="KeyDownI" sx={{fill: 'gray'}} />
            <input type="text"  placeholder="Payment Method*" className="trainInput shadow-lg " />
            </div>
            <div className="inputDrop2">
            <p className="inputDropText">Paypal</p>
              <p className="inputDropText">Wire Transfer</p>
              <p className="inputDropText">Skrill</p>
            </div>
          </div>

          <div className="w-[383.29px] h-[21.95px] my-20 sm:my-10">
            <h1 className="font-[700] text-[20px] leading-[37.5px] text-center text-[#515151]">Wire Transfer</h1>
          </div>

        <div className="sm:h-[60px]">
            <input type="text" placeholder="Bank Name*" className="trainInputI" />
        </div>

        <div className="sm:h-[60px]">
            <input type="text" placeholder="Account Name*" className="trainInputI" />
        </div>

          <div className="relative">
            <div className="relative z-[10] mb-[50px]">
            <KeyboardArrowDownOutlinedIcon className="KeyDownI" sx={{fill: 'gray'}} />
            <input type="text" placeholder="Account Type*" className="trainInput shadow-lg " />
            </div>
            <div className="inputDrop2">
            <p className="inputDropText">Checking</p>
              <p className="inputDropText">Savings</p>
              <p className="inputDropText">Dom</p>
            </div>
          </div>

          <div className="sm:h-[60px]">
            <input type="text" placeholder="Account Number*" className="trainInputI" />
        </div>

        <div className="sm:h-[60px]">
            <input type="text" placeholder="Swift Number*" className="trainInputI" />
        </div>

        <div className="">
            <input type="text" placeholder="Billing Address*" className="trainInputI" />
        </div>

          <Link to='/work'>
            <button className="trainInputBtn" type="submit">Next</button>
          </Link>   

        </form>
        </div>
      </div>
    </div>
  )
}

export default Form









