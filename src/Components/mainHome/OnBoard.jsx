import Card from "../Card"
import image from '../../assets/Figma-Images/onboard.png'
import ellipse from '../../assets/Figma-Images/onboard-Ellipse.png'

const OnBoard = () => {
  return (
    <div className="relative">
      <img src={ellipse} alt="" className="absolute z-[2] right-[-100px] top-[-150px]" />
      
      <Card 
      Title='Onboard with Ease'
      Paragraph='We understand the complexities of staffing and know that each manufacturing company and care provider has different needs, which is why we offer an easy onboarding process with no long-term obligations.'
      Image={image}
      />
    </div>
  )
}

export default OnBoard