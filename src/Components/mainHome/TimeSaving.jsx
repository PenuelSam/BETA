import Card2 from "../Card2"
import image from '../../assets/Figma-Images/time-saving.png'
import ellipse from '../../assets/Figma-Images/onboard-Ellipse.png'

const TimeSaving = () => {
  return (
    <div className="relative">
      <img src={ellipse} alt="" className="absolute top-[-150px] left-[20%]" />
      <Card2 
      Title='Time-saving Solutions'
      Paragraph='BetaCare Staffing uses the latest software and recruitment processes to ensure our clients are provided with qualified candidates quickly and efficiently.'
      Image={image}
      />
      <img src={ellipse} alt="" className="absolute right-[-50px] top-[90%]" />

    </div>
  )
}

export default TimeSaving