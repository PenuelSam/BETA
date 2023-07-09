import { Link } from "react-router-dom"
import TrainTitle from "../TrainTitle"
import line from '../../assets/Figma-Images/Manufacturing/Line.png'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
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

        <div className="relative">
            <AddOutlinedIcon sx={{fill: 'gray', position: 'absolute', right: '10%', top: '15%', cursor: 'pointer'}} />
            <input type="text" placeholder="Upload CV*" className="trainInputI" />
          </div>

        <div className="relative">
            <AddOutlinedIcon sx={{fill: 'gray', position: 'absolute', right: '10%', top: '15%', cursor: 'pointer'}} />
            <input type="text" placeholder="Upload Cover Letter*" className="trainInputI" />
          </div>

          <Link to='/nextofkin'>
            <button className="trainInputBtn" type="submit">Next</button>
          </Link>   

        </form>
        </div>
      </div>
    </div>
  )
}

export default Form









