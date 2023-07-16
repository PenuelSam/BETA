import { Link, useNavigate } from "react-router-dom";
import line from '../../../assets/Figma-Images/Manufacturing/Line.png'
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import TrainBtns from "../../TrainBtns2";
import { useState } from "react";
import TrainTitle2 from "../../TrainTitle2";

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

  const racialCategories = [
    "White/Caucasian",
    "Black/African",
    "Asian",
    "Indigenous/Native",
    "Pacific Islander",
    "Latino/Hispanic",
    "Arab/Middle Eastern",
    "Indigenous Peoples of the Americas",
    "Multiracial/Mixed race",
    "Other/Miscellaneous",
  ];

  const navigate = useNavigate();

  const handleLinkClick = (link) => {
    navigate(link);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <TrainTitle2 />
      <div className="maxcontainer2 sm:w-full flex items-center sm:justify-center pb-[25%]">
        <img
          src={line}
          alt=""
          className="absolute left-[20%] z-[2] lg:hidden"
        />
        <TrainBtns />

        <div className="trainFormContainerBG">
          <form action="" className="smFormStyle">
            <div className="relative sm:h-[70px]">
              <AddOutlinedIcon className="addicon" sx={{ fill: "gray" }} />
              <input
                type="text"
                placeholder="Upload Passport*"
                className="trainInputI"
              />
            </div>

            <div
              className={
                isOpen ? `custom-dropdown` : `custom-dropdown mb-[30px]`
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
                  {selectedOption || "Means of ID*"}
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
                    onClick={() => handleOptionClick("National ID")}
                  >
                    National ID
                  </li>
                  <li
                    className="inputDropText"
                    onClick={() => handleOptionClick("International Passport")}
                  >
                    International Passport
                  </li>
                  <li
                    className="inputDropText"
                    onClick={() => handleOptionClick("Other")}
                  >
                    Other
                  </li>
                </ul>
              )}
            </div>

            {/*<div className="relative">
            <div className="relative z-[10] mb-[50px]">
            <KeyboardArrowDownOutlinedIcon className="KeyDownI" sx={{fill: 'gray'}} />
            <input type="text" placeholder="Means of ID*" className="trainInput shadow-lg " />
            </div>
            <div className="inputDrop2">
              <p className="inputDropText">National ID</p>
              <p className="inputDropText">International Passport</p>
              <p className="inputDropText">Other</p>
            </div>
          </div>*/}

            <div className={isOpen ? `sm:h-[70px] mt-[150px]` : `sm:h-[70px]`}>
              <input
                type="text"
                placeholder="Detailed Address*"
                className="trainInputI"
              />
            </div>

            <div className="relative sm:h-[70px]">
              <AddOutlinedIcon
                sx={{
                  fill: "gray",
                  cursor: "pointer",
                }}
                className="addicon"
              />
              <input
                type="text"
                placeholder="Recent Utility Bill*"
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
                  {selectedOption2 || "Race*"}
                </span>
                <KeyboardArrowDownOutlinedIcon
                  className="KeyDownI"
                  sx={{ fill: "gray" }}
                />
              </div>
              {isOpen2 && (
                <ul className="dropdown-optionsY">
                  {racialCategories.map((category) => (
                    <li
                      className="inputDropText"
                      key={category}
                      onClick={() => handleOptionClick2(category)}
                    >
                      {category}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className={isOpen2 ? ` mt-[150px] relative` : `relative`}>
              <AddOutlinedIcon
                sx={{
                  fill: "gray",
                  cursor: "pointer",
                }}
                className="addicon"
              />
              <input
                type="text"
                placeholder="Proof of Citizenship*"
                className="trainInputI"
              />
            </div>

            <Link to="/ids2" onClick={() => handleLinkClick("/ids2")}>
              <button className="trainInputBtn" type="submit">
                Next
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
