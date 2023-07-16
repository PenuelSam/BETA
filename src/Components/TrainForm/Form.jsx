import { Link, useNavigate } from "react-router-dom";
import TrainTitle from "../TrainTitle";
import line from "../../assets/Figma-Images/Manufacturing/Line.png";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import TrainBtns from "../TrainBtn";
import { useState } from "react";

const Form = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");

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

  const years = Array.from(
    { length: new Date().getFullYear() - 1990 + 1 },
    (_, index) => 1990 + index
  );

  const navigate = useNavigate();

  const handleLinkClick = (link) => {
    navigate(link);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <TrainTitle />
      <div className="maxcontainer2 sm:w-full flex items-center sm:justify-center pb-[25%] sm:pb-[10%]">
        <img
          src={line}
          alt=""
          className="absolute left-[20%] z-[2] lg:hidden"
        />
        <TrainBtns />

        <div className="trainFormContainer">
          <form action="" className="smFormStyle">
            <div
              className={
                isOpen ? `custom-dropdown` : `custom-dropdown my-[30px]`
              }
            >
              <div
                className={
                  isOpen
                    ? "dropdown-header rounded-t-md"
                    : "dropdown-header rounded-md"
                }
                onClick={toggleDropdown}
              >
                <span
                  className={
                    selectedOption ? "text-[#434445]" : "text-gray-400"
                  }
                >
                  {selectedOption || "Level of Training*"}
                </span>
                <KeyboardArrowDownOutlinedIcon
                  className="KeyDownI"
                  sx={{ fill: "gray" }}
                />
              </div>
              {isOpen && (
                <ul className="dropdown-options">
                  <li
                    className="inputDropText"
                    onClick={() => handleOptionClick("Beginner")}
                  >
                    Beginner
                  </li>
                  <li
                    className="inputDropText"
                    onClick={() => handleOptionClick("Intermediate")}
                  >
                    Intermediate
                  </li>
                  <li
                    className="inputDropText"
                    onClick={() => handleOptionClick("Advanced")}
                  >
                    Advanced
                  </li>
                </ul>
              )}
            </div>
            {/*<div className="relative">
            <div className="relative z-[10] my-[50px]">
            <KeyboardArrowDownOutlinedIcon className="KeyDownI" sx={{fill: 'gray'}} />
            <input type="text" placeholder="Level of Training*" className="trainInput shadow-lg " />
            </div>
            <div className="inputDrop">
              <p className="inputDropText">Beginner</p>
              <p className="inputDropText">Intermediate</p>
              <p className="inputDropText">Advanced</p>
            </div>
          </div>*/}
            <div className={isOpen ? `sm:h-[70px] mt-[150px]` : `sm:h-[70px]`}>
              <input
                type="text"
                placeholder="Institution Name*"
                className="trainInputI"
              />
            </div>
            <div className=" sm:h-[70px]">
              <input
                type="text"
                placeholder="Course Title*"
                className="trainInputI"
              />
            </div>
            <div className=" sm:h-[70px]">
              <input
                type="text"
                placeholder="Program Duration*"
                className="trainInputI"
              />
            </div>
            <div className=" sm:h-[70px]">
              <input
                type="text"
                placeholder="Qualification Obtained*"
                className="trainInputI"
              />
            </div>

            <div
              className={
                isOpen2 ? `custom-dropdown` : `custom-dropdown mb-[30px]`
              }
            >
              <div
                className={
                  isOpen2
                    ? "dropdown-header rounded-t-md"
                    : "dropdown-header rounded-md"
                }
                onClick={toggleDropdown2}
              >
                <span
                  className={
                    selectedOption2 ? "text-[#434445]" : "text-gray-400"
                  }
                >
                  {selectedOption2 || "Year*"}
                </span>
                <KeyboardArrowDownOutlinedIcon
                  className="KeyDownI"
                  sx={{ fill: "gray" }}
                />
              </div>
              {isOpen2 && (
                <ul className="dropdown-optionsY">
                  {years.map((year) => (
                    <li
                      className="inputDropText"
                      key={year}
                      onClick={() => handleOptionClick2(year)}
                    >
                      {year}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className={isOpen2 ? `sm:h-[70px] mt-[150px]` : `sm:h-[70px]`}>
              <AddOutlinedIcon className="KeyDownI" sx={{ fill: "gray" }} />
              <input
                type="text"
                placeholder="Upload Certification*"
                className="trainInputI"
              />
            </div>
            <div className="trainbtns">
              <Link to="/bgchecks" onClick={() => handleLinkClick("/bgchecks")}>
                <button className="trainInputBtnI">Add</button>
              </Link>
              <Link to="/bgchecks" onClick={() => handleLinkClick("/bgchecks")}>
                <button className="trainInputBtnII">Next</button>
              </Link>
            </div>
            <div className="w-[444px] h-[181px] rounded-md lg:hidden bg-white text-gray-500 flex items-center justify-center">
              <div className="w-[383px] h-[142px] flex items-center justify-between">
                <div>
                  <h1 className="font-[700] text-[20px] leading-[30px]">
                    Beta Medical Centre
                  </h1>
                  <span className="font-[300] text-[20px] leading-[28.2px]">
                    Advanced | Elder Care <br />{" "}
                  </span>
                  <span className="font-[300] text-[20px] leading-[28.2px]">
                    3 Months | 2023{" "}
                  </span>
                  <span className="font-[300] text-[20px] leading-[28.2px]">
                    Certification <br />
                  </span>
                  <span className="font-[300] text-[20px] leading-[30px]">
                    Elder Care Cert......pdf
                  </span>
                </div>
                <CloseOutlinedIcon
                  sx={{ fill: "gray", fontSize: "50px", cursor: "pointer" }}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
