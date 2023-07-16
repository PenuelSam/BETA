import { Link, useNavigate } from "react-router-dom"
import TrainTitle from "../TrainTitle"
import line from '../../assets/Figma-Images/Manufacturing/Line.png'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import TrainBtns from "../TrainBtn";
import { useState } from "react";


const Form = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const [selectedOption3, setSelectedOption3] = useState('');

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


  const years = Array.from({ length: new Date().getFullYear() - 1970 + 1 }, (_, index) => 1970 + index);

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
"Zimbabwe"
  ];

  const navigate = useNavigate();

  const handleLinkClick = (link) => {
    navigate(link);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  return (
    <div>
      <TrainTitle />
      <div className="maxcontainer2 sm:w-full flex items-center sm:justify-center pb-[25%] sm:pb-[10px]">
        <img src={line} alt="" className="absolute left-[20%] z-[2] lg:hidden" />
        <TrainBtns />
        
        <div className="trainFormContainerPay">
        <form action="" className="smFormStyle">

        <div className="relative sm:h-[70px]">
            <AddOutlinedIcon className="addicon" sx={{fill: 'gray'}} />
            <input type="text" placeholder="Upload Right to work ID*" className="trainInputI" />
          </div>

          <div className={`custom-dropdown mb-[30px]`}>
        <div className={ isOpen ? 'dropdown-header rounded-t-md' : 'dropdown-header rounded-md'} onClick={toggleDropdown}>
        <span className={selectedOption ? 'text-[#434445]' : 'text-gray-400'}>{selectedOption || 'Year Obtained*'}</span>
        <KeyboardArrowDownOutlinedIcon className="KeyDownI" sx={{fill: 'gray'}} />
      </div>
      {isOpen && (
        <ul className="dropdown-optionsY">
          {years.map((year) => (
            <li className="inputDropText" key={year} onClick={() => handleOptionClick(year)}>
              {year}
            </li>
          ))}
        </ul>
      )}
      </div>

        {/*<div className="relative sm:h-[70px]">
            <KeyboardArrowDownOutlinedIcon className="KeyDown" sx={{fill: 'gray'}} />
            <input type="text" placeholder="Year Obtained*" className="trainInputI" />
        </div>*/}


      <div className={ isOpen ? `custom-dropdown mt-[150px] mb-[30px]` : `custom-dropdown mb-[30px]`}>
        <div className={ isOpen2 ? 'dropdown-header rounded-t-md' : 'dropdown-header rounded-md'} onClick={toggleDropdown2}>
        <span className={selectedOption2 ? 'text-[#434445]' : 'text-gray-400'}>{selectedOption2 || 'Country of Validity*'}</span>
        <KeyboardArrowDownOutlinedIcon className="KeyDownI" sx={{fill: 'gray'}} />
      </div>
      {isOpen2 && (
        <ul className="dropdown-optionsY">
          {countries.map((country) => (
            <li className="inputDropText" key={country} onClick={() => handleOptionClick2(country)}>
              {country}
            </li>
          ))}
        </ul>
      )}
      </div>
        
        {/*<div className="relative sm:h-[90px]">
            <KeyboardArrowDownOutlinedIcon className="KeyDownI" sx={{fill: 'gray'}} />
            <input type="text" placeholder="Country of Validity*" className="trainInputI" />
        </div>*/}

          <Link to='/cv' onClick={() => handleLinkClick('/cv')} className={isOpen2 ? 'mt-[150px]' : ''}>
            <button className="trainInputBtn" type="submit">Next</button>
          </Link>

          <div className="w-[423px] sm:w-[300px] sm:h-[1px] h-[29px] flex  items-center justify-between sm:justify-center sm:pl-[10%] sm:gap-5 ">
            <input type="checkbox" className="w-[25px] h-[29px] rounded-md outline-none cursor-pointer"/>
            <p className="font-[300] text-[16px]  leading-[25.83px] text-[#3E3C38]">Upload additional documentations</p>
          </div>

          <div className="w-[383.29px] sm:w-[370px] h-[21.95px] sm:h-[10px] mx-auto my-10">
            <h1 className="font-[700] text-[18px] leading-[37.5px] text-center text-[#515151]">Additional Documentations</h1>
          </div>

        <div className="sm:h-[70px]">
            <input type="text" placeholder="Document Name*" className="trainInputI" />
        </div>

        <div className="sm:h-[70px]">
            <input type="text" placeholder="Document Description*" className="trainInputI" />
        </div>

        <div className={`custom-dropdown mb-[30px]`}>
        <div className={ isOpen3 ? 'dropdown-header rounded-t-md' : 'dropdown-header rounded-md'} onClick={toggleDropdown3}>
        <span className={selectedOption3 ? 'text-[#434445]' : 'text-gray-400'}>{selectedOption3 || 'Country of Validity*'}</span>
        <KeyboardArrowDownOutlinedIcon className="KeyDownI" sx={{fill: 'gray'}} />
      </div>
      {isOpen3 && (
        <ul className="dropdown-optionsY">
          {countries.map((country) => (
            <li className="inputDropText" key={country} onClick={() => handleOptionClick3(country)}>
              {country}
            </li>
          ))}
        </ul>
      )}
      </div>

        {/*<div className="relative sm:h-[70px]">
            <KeyboardArrowDownOutlinedIcon className="KeyDown" sx={{fill: 'gray'}} />
            <input type="text" placeholder="Country of Validity*" className="trainInputI" />
          </div>*/}

        <div className={isOpen3 ? "relative mt-[150px]" :"relative"}>
            <AddOutlinedIcon className="addicon" sx={{fill: 'gray'}} />
            <input type="text" placeholder="Upload Document*" className="trainInputI" />
          </div>

          <Link to='/cv' onClick={() => handleLinkClick('/cv')}>
            <button className="trainInputBtn" type="submit">Add</button>
          </Link>   

        </form>
        </div>
      </div>
    </div>
  )
}

export default Form









