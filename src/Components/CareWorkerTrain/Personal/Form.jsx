import { Link, useNavigate } from "react-router-dom";
import line from '../../../assets/Figma-Images/Manufacturing/Line.png'
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import TrainBtns from "../../TrainBtns2";
import { useState } from "react";
import TrainTitle2 from "../../TrainTitle2";

const Form = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  const [selectedOption3, setSelectedOption3] = useState("");
  const [selectedOption4, setSelectedOption4] = useState("");

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

  const toggleDropdown3 = () => {
    setIsOpen3(!isOpen3);
  };

  const handleOptionClick3 = (option) => {
    setSelectedOption3(option);
    setIsOpen3(false);
  };
  4;

  const toggleDropdown4 = () => {
    setIsOpen4(!isOpen4);
  };

  const handleOptionClick4 = (option) => {
    setSelectedOption4(option);
    setIsOpen4(false);
  };

  const genderOptions = ["Male", "Female", "Non-binary", "Prefer not to say"];

  const stateOptions = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
    "Abia",
    "Adamawa",
    "Akwa Ibom",
    "Anambra",
    "Bauchi",
    "Bayelsa",
    "Benue",
    "Borno",
    "Cross River",
    "Delta",
    "Ebonyi",
    "Edo",
    "Ekiti",
    "Enugu",
    "Federal Capital Territory",
    "Gombe",
    "Imo",
    "Jigawa",
    "Kaduna",
    "Kano",
    "Katsina",
    "Kebbi",
    "Kogi",
    "Kwara",
    "Lagos",
    "Nasarawa",
    "Niger",
    "Ogun",
    "Ondo",
    "Osun",
    "Oyo",
    "Plateau",
    "Rivers",
    "Sokoto",
    "Taraba",
    "Yobe",
    "Zamfara",
  ];

  const maritalStatusOptions = [
    "Single",
    "Married",
    "Divorced",
    "Widowed",
    "Separated",
    "In a relationship",
    "Engaged",
  ];

  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea, North",
    "Korea, South",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States of America",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
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

        <div className="trainFormContainer">
          <form action="" className="smFormStyle">
            <div className=" sm:h-[70px]">
              <input
                type="text"
                placeholder="First Name*"
                className="trainInput"
              />
            </div>
            <div className=" sm:h-[70px]">
              <input
                type="text"
                placeholder="Last Name*"
                className="trainInput"
              />
            </div>

            <div className="custom-dropdown mb-[50px] sm:mb-[30px]">
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
                  {selectedOption || "Gender*"}
                </span>
                <KeyboardArrowDownOutlinedIcon
                  className="KeyDownI"
                  sx={{ fill: "gray" }}
                />
              </div>
              {isOpen && (
                <ul className="dropdown-optionsY">
                  {genderOptions.map((option) => (
                    <li
                      className="inputDropText"
                      key={option}
                      onClick={() => handleOptionClick(option)}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/*<div className="relative sm:h-[70px]">
            <KeyboardArrowDownOutlinedIcon className="KeyDown" sx={{fill: 'gray'}}/>
            <input type="text" placeholder="Gender*" className="trainInput" />
          </div>*/}

            <div className={isOpen ? "sm:h-[70px]  mt-[150px]" : "sm:h-[70px]"}>
              <input
                type="text"
                placeholder="Phone Number"
                className="trainInput"
              />
            </div>
            <div className="sm:h-[70px]">
              <input type="email" placeholder="Email*" className="trainInput" />
            </div>

            <div className="custom-dropdown mb-[50px] sm:mb-[30px]">
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
                  {selectedOption2 || "Country*"}
                </span>
                <KeyboardArrowDownOutlinedIcon
                  className="KeyDownI"
                  sx={{ fill: "gray" }}
                />
              </div>
              {isOpen2 && (
                <ul className="dropdown-optionsY">
                  {countries.map((country) => (
                    <li
                      className="inputDropText"
                      key={country}
                      onClick={() => handleOptionClick2(country)}
                    >
                      {country}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/*<div className="relative sm:h-[70px]">
            <KeyboardArrowDownOutlinedIcon className="KeyDown" sx={{fill: 'gray'}} />
            <input type="text" placeholder="Country" className="trainInput" />
          </div>*/}

            <div
              className={
                isOpen2
                  ? "custom-dropdown mb-[50px] sm:mb-[30px] mt-[150px]"
                  : "custom-dropdown mb-[50px] sm:mb-[30px]"
              }
            >
              <div
                className={
                  isOpen3
                    ? "dropdown-header rounded-t-md"
                    : "dropdown-header rounded-md"
                }
                onClick={toggleDropdown3}
              >
                <span
                  className={
                    selectedOption3 ? "text-[#434445]" : "text-gray-400"
                  }
                >
                  {selectedOption3 || "State*"}
                </span>
                <KeyboardArrowDownOutlinedIcon
                  className="KeyDownI"
                  sx={{ fill: "gray" }}
                />
              </div>
              {isOpen3 && (
                <ul className="dropdown-optionsY">
                  {stateOptions.map((option) => (
                    <li
                      className="inputDropText"
                      key={option}
                      onClick={() => handleOptionClick3(option)}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/*<div className="relative sm:h-[70px]">
            <KeyboardArrowDownOutlinedIcon className="KeyDown" sx={{fill: 'gray'}} />
            <input type="text" placeholder="State" className="trainInput" />
          </div>*/}

            <div
              className={
                isOpen3
                  ? "custom-dropdown mb-[50px] sm:mb-[30px] mt-[150px]"
                  : "custom-dropdown mb-[50px] sm:mb-[30px]"
              }
            >
              <div
                className={
                  isOpen4
                    ? "dropdown-header rounded-t-md"
                    : "dropdown-header rounded-md"
                }
                onClick={toggleDropdown4}
              >
                <span
                  className={
                    selectedOption4 ? "text-[#434445]" : "text-gray-400"
                  }
                >
                  {selectedOption4 || "Marital Status*"}
                </span>
                <KeyboardArrowDownOutlinedIcon
                  className="KeyDownI"
                  sx={{ fill: "gray" }}
                />
              </div>
              {isOpen4 && (
                <ul className="dropdown-optionsY">
                  {maritalStatusOptions.map((option) => (
                    <li
                      className="inputDropText"
                      key={option}
                      onClick={() => handleOptionClick4(option)}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/*<div className="relative">
            <KeyboardArrowDownOutlinedIcon className="KeyDownI" sx={{fill: 'gray'}}/>
            <input type="text" placeholder="Marital Status" className="trainInput" />
          </div>*/}
            <Link to="/train2" onClick={() => handleLinkClick("/train2")}>
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
