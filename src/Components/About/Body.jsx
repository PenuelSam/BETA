import image from '../../assets/Figma-Images/Care/Beta-Home-Care.png'
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

const Body = () => {
    useEffect(() => {
        Aos.init({
          duration: 800,
          delay: 200,
          easing: "ease-in-out", 
        })
        Aos.refresh()
      },[])
    
  return (
    <div className="bodyBg">
        <div data-aos="fade-right" className="maxcontainer2 lg:w-full aboutBodyCard">
            <div className='lg:hidden'>
                <p className='aboutBodyImgP'>BETA HOME CARE</p>
                <img src={image} alt="" className='aboutBodyImg' />
            </div>
            <div className='hidden lg:flex'>
                <p className='aboutBodyImgP'>BETA HOME CARE</p>
                <img src={image} alt="" className='aboutBodyImg2' />
            </div>
            <div data-aos="fade-left" className='flex flex-col lg:pl-[5%] justify-center'>
                <h1 className='aboutBodyH1'>Generally, Beta Home Care promises family connection, comfort, companionship, independence, personalized care, close attention and quick recovery.</h1>
                <p className='aboutBodyP'>Beta Home Care helps maintain dignity and it allows clients to stay in familiar environment while getting the proper care, in fact it gives confidence and freedom to clients. It helps establish a positive and trust relationship with clients, as it contributes significantly to recovery. For patients with reoccurring conditions, especially the seniors, Beta Home Care prevent hazards that could occur in unfamiliar environment. </p>
            </div>
        </div>
    </div>
  )
}

export default Body