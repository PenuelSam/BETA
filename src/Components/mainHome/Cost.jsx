import Card from "../Card"
import image from '../../assets/Figma-Images/cost.png'
const Cost = () => {
  return (
    <div>
      <Card 
      Title='Cost-effective Solutions'
      Paragraph='Our recruitment services are competitively priced, so you can find the right employees without having to break the bank.'
      Image={image}
      />
    </div>
  )
}

export default Cost