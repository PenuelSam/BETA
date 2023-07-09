import Card2 from "../Card2"
import image from '../../assets/Figma-Images/Team.png'
import ellipse from '../../assets/Figma-Images/onboard-Ellipse.png'
const Team = () => {
  return (
    <div className="relative">
      <img src={ellipse} alt="" className="absolute top-[-150px] left-[20%]" />
      <Card2 
      Title='A Dedicated Team'
      Paragraph='Our team are experienced professionals who are dedicated to finding the right candidate for your business - no matter how complex your requirements may be.'
      Image={image}
      />
      <img src={ellipse} alt="" className="absolute lg:hidden right-[-100px] top-[70%]" />
    </div>
  )
}

export default Team