import { Link, useNavigate } from "react-router-dom"
import line from '../../../assets/Figma-Images/Manufacturing/Line.png'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import TrainBtns from "../../TrainBtns2";
import { useState } from "react";
import TrainTitle2 from "../../TrainTitle2";

const Form = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };

  const handleOptionClick2 = (option) => {
    setSelectedOption2(option);
    setIsOpen2(false);
  };

  const navigate = useNavigate();

  const handleLinkClick = (link) => {
    navigate(link);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <TrainTitle2 />
      <div className="maxcontainer2 sm:w-full flex items-center sm:justify-center pb-[25%] sm:pb-[10px]">
        <img src={line} alt="" className="absolute left-[20%] z-[2] lg:hidden" />
        <TrainBtns />
        
        <div className="trainFormContainerPay">
        <form action="" className="smFormStyle">

        <div className={ isOpen ? `custom-dropdown` : `custom-dropdown mb-[30px]`}>
      <div className={ isOpen ? 'dropdown-header rounded-t-md' : 'dropdown-header rounded-md'} onClick={toggleDropdown}>
        <span className={selectedOption ? 'text-[#434445]' : 'text-gray-400'}>{selectedOption || 'Payment Method*'}</span>
        <KeyboardArrowDownOutlinedIcon className="KeyDownI" sx={{fill: 'gray'}} />
      </div>
      {isOpen && (
        <ul className="dropdown-options">
          <li className="inputDropText" onClick={() => handleOptionClick('Paypal')}>Paypal</li>
          <li className="inputDropText" onClick={() => handleOptionClick('Wire Transfer')}>Wire Transfer</li>
          <li className="inputDropText" onClick={() => handleOptionClick('Skrill')}>Skrill</li>
        </ul>
      )}
      </div>

        {/*<div className="relative mt-[10%]">
            <div className="relative z-[10] mb-[50px] sm:mb-[5px]">
            <KeyboardArrowDownOutlinedIcon className="KeyDownI" sx={{fill: 'gray'}} />
            <input type="text"  placeholder="Payment Method*" className="trainInput shadow-lg " />
            </div>
            <div className="inputDrop2">
            <p className="inputDropText">Paypal</p>
              <p className="inputDropText">Wire Transfer</p>
              <p className="inputDropText">Skrill</p>
            </div>
          </div>*/}

          <div className={isOpen ? 'w-[383.29px] h-[21.95px] mb-20 mt-[150px]' : 'w-[383.29px] h-[21.95px] my-20 sm:mt-20'}>
            <h1 className="font-[700] text-[20px] leading-[37.5px] text-center text-[#515151]">Wire Transfer</h1>
          </div>

        <div className="sm:h-[70px]">
            <input type="text" placeholder="Bank Name*" className="trainInputI" />
        </div>

        <div className="sm:h-[70px]">
            <input type="text" placeholder="Account Name*" className="trainInputI" />
        </div>


        <div className={ isOpen2 ? `custom-dropdown` : `custom-dropdown mb-[30px]`}>
      <div className={ isOpen2 ? 'dropdown-header rounded-t-md' : 'dropdown-header rounded-md'} onClick={toggleDropdown2}>
        <span className={selectedOption2 ? 'text-[#434445]' : 'text-gray-400'}>{selectedOption2 || 'Account Type*'}</span>
        <KeyboardArrowDownOutlinedIcon className="KeyDownI" sx={{fill: 'gray'}} />
      </div>
      {isOpen2 && (
        <ul className="dropdown-options">
          <li className="inputDropText" onClick={() => handleOptionClick2('Checking')}>Checking</li>
          <li className="inputDropText" onClick={() => handleOptionClick2('Savings')}>Savings</li>
          <li className="inputDropText" onClick={() => handleOptionClick2('Dom')}>Dom</li>
        </ul>
      )}
      </div>

          {/*<div className="relative">
            <div className="relative z-[10] mb-[50px]">
            <KeyboardArrowDownOutlinedIcon className="KeyDownI" sx={{fill: 'gray'}} />
            <input type="text" placeholder="Account Type*" className="trainInput shadow-lg " />
            </div>
            <div className="inputDrop2">
            <p className="inputDropText">Checking</p>
              <p className="inputDropText">Savings</p>
              <p className="inputDropText">Dom</p>
            </div>
          </div>*/}

          <div className={ isOpen2 ? "sm:h-[70px] mt-[150px]" :"sm:h-[70px]"}>
            <input type="text" placeholder="Account Number*" className="trainInputI" />
        </div>

        <div className="sm:h-[70px]">
            <input type="text" placeholder="Swift Number*" className="trainInputI" />
        </div>

        <div className="">
            <input type="text" placeholder="Billing Address*" className="trainInputI" />
        </div>

          <Link to='/work2' onClick={() => handleLinkClick('/work2')}>
            <button className="trainInputBtn" type="submit">Next</button>
          </Link>   

        </form>
        </div>
      </div>
    </div>
  )
}

export default Form









