import { Link, useNavigate } from "react-router-dom"
import line from '../../../assets/Figma-Images/Manufacturing/Line.png'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import TrainBtns from "../../TrainBtns2";
import { useState } from "react";
import TrainTitle2 from "../../TrainTitle2";


const Form = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  // Generate an array of dates (from 1 to 31)
  const startDate = new Date(2020, 0, 1);
  const endDate = new Date(2030, 11, 31);
  const dates = [];
  let currentDate = startDate;
  while (currentDate <= endDate) {
    const year = currentDate.getFullYear();
    const month = currentDate.toLocaleString('default', { month: 'long' });
    const day = currentDate.getDate();
    const dateString = `${month} ${day}, ${year}`;
    dates.push(dateString);
    currentDate.setDate(currentDate.getDate() + 1);
  }

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
        
        <div className={isOpen ? "trainFormContainerID" :"trainFormContainerCv"}>
        <form action="" className="smFormStyle">

        <div className=" sm:h-[60px] sm:mt-[5%]">
            <input type="text" placeholder="Name*" className="trainInputI" />
        </div>

        <div className="custom-dropdown mb-[30px]">
      <div className={ isOpen ? 'dropdown-header rounded-t-md' : 'dropdown-header rounded-md'} onClick={toggleDropdown}>
      <span className={selectedOption ? 'text-[#434445]' : 'text-gray-400'}>{selectedOption || 'Date*'}</span>
        <KeyboardArrowDownOutlinedIcon className="KeyDownI" sx={{fill: 'gray'}} />
      </div>
      {isOpen && (
        <ul className="dropdown-optionsY">
          {dates.map((date) => (
            <li className="inputDropText" key={date} onClick={() => handleOptionClick(date)}>
              {date}
            </li>
          ))}
        </ul>
      )}
    </div>

        {/*<div className="relative sm:h-[70px]">
            <KeyboardArrowDownOutlinedIcon className="KeyDown" sx={{fill: 'gray'}} />
            <input type="text" placeholder="Date*" className="trainInputI" />
          </div>*/}

          <div className={ isOpen ? "w-[444px] sm:w-[300px] sm:h-[200px] h-[140px] flex  items-start p-5 shadow-md mb-10 bg-white justify-between sm:gap-5 mt-[150px]" :"w-[444px] sm:w-[300px] sm:h-[200px] h-[140px] flex  items-start p-5 shadow-md mb-10 bg-white justify-between sm:gap-5 "}>
            <input type="checkbox" className="w-[27.43px] h-[29px] rounded-md outline-none cursor-pointer"/>
            <p className="font-[300] text-[15px] leading-[30px] text-[#041E3E] w-[335px] h-[93px]">I confirm receiving the flu vaccine to prioritize health and community well-being. </p>
          </div>

          <Link to='/carehome' onClick={() => handleLinkClick('/carehome')}>
            <button className="trainInputBtn" type="submit">Save</button>
          </Link>   

        </form>
        </div>
      </div>
    </div>
  )
}

export default Form









