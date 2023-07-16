import { Link, useNavigate } from "react-router-dom"
import line from '../../../assets/Figma-Images/Manufacturing/Line.png'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
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

  const currentYear = new Date().getFullYear();
  const expiryDates = Array.from({ length: 11 }, (_, index) => currentYear + index);

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
        
        <div className={ isOpen2 ? "trainFormContainer":"trainFormContainerID"}>
        <form action="" className="smFormStyle">

        <div className=" sm:h-[70px]">
            <input type="text" placeholder="Badge Title*" className="trainInputI" />
        </div>

        <div className={ isOpen ? `custom-dropdown` : `custom-dropdown mb-[30px]`}>
      <div className={ isOpen ? 'dropdown-header rounded-t-md' : 'dropdown-header rounded-md'} onClick={toggleDropdown}>
        <span className={selectedOption ? 'text-[#434445]' : 'text-gray-400'}>{selectedOption || 'Level of Badge*'}</span>
        <KeyboardArrowDownOutlinedIcon className="KeyDownI" sx={{fill: 'gray'}} />
      </div>
      {isOpen && (
        <ul className="dropdown-options">
          <li className="inputDropText" onClick={() => handleOptionClick('Beginner')}>Beginner</li>
          <li className="inputDropText" onClick={() => handleOptionClick('Intermediate')}>Intermediate</li>
          <li className="inputDropText" onClick={() => handleOptionClick('Advanced')}>Advanced</li>
        </ul>
      )}
      </div>

          {/*<div className="relative">
            <div className="relative z-[10] mb-[50px]">
            <KeyboardArrowDownOutlinedIcon className="KeyDownI" sx={{fill: 'gray'}} />
            <input type="text" placeholder="Level of Badge*" className="trainInput shadow-lg " />
            </div>
            <div className="inputDrop2">
            <p className="inputDropText">Beginner</p>
              <p className="inputDropText">Intermediate</p>
              <p className="inputDropText">Advanced</p>
            </div>
          </div>*/}

          <div className={ isOpen ? `relative sm:h-[70px] mt-[150px]` :`relative sm:h-[70px]`}>
            <AddOutlinedIcon className="addicon" sx={{fill: 'gray'}} />
            <input type="text" placeholder="Badge Image Front*" className="trainInputI" />
          </div>

          <div className="relative sm:h-[70px]">
            <AddOutlinedIcon className="addicon" sx={{fill: 'gray'}} />
            <input type="text" placeholder="Badge Image Back*" className="trainInputI" />
          </div>

          <div className={ isOpen2 ? `custom-dropdown` : `custom-dropdown mb-[30px]`}>
        <div className={ isOpen2 ? 'dropdown-header rounded-t-md' : 'dropdown-header rounded-md'} onClick={toggleDropdown2}>
        <span className={selectedOption2 ? 'text-[#434445]' : 'text-gray-400'}>{selectedOption2 || 'Expiry Date*'}</span>
        <KeyboardArrowDownOutlinedIcon className="KeyDownI" sx={{fill: 'gray'}} />
      </div>
      {isOpen2 && (
        <ul className="dropdown-optionsY">
            {expiryDates.map((date) => (
            <li className="inputDropText" key={date} onClick={() => handleOptionClick2(date)}>
              {date}
            </li>
          ))}

        </ul>
      )}
      </div>

          <div className={ isOpen2 ? `relative mt-[150px]` :`relative`}>
            <AddOutlinedIcon sx={{fill: 'gray', cursor: 'pointer'}} className="addicon" />
            <input type="text" placeholder="Proof of Citizenship*" className="trainInputI" />
          </div>

          <div className="trainbtnsI">
          <Link to='/reference2' onClick={() => handleLinkClick('/reference2')}><button className="trainInputBtnI">Add</button></Link>
          <Link to='/reference2' onClick={() => handleLinkClick('/reference2')}><button className="trainInputBtnII">Next</button></Link>
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






