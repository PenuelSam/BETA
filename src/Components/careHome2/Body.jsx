import { CareHomeButtons } from "../../data"
import image from '../../assets/Figma-Images/Care/Beta-Care-Approach.png'
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
    <div className="flex flex-col bodyBg">
        <div data-aos="zoom-in" className="maxcontainer2 care-bodyGrid">
                {CareHomeButtons.map((btn, i)=>(
                    <img key={i} src={btn.button} alt="" className="cursor-pointer" />
                ))}
        </div>

        <div className="care-bodyBelow maxcontainer2 lg:w-full">
            <div data-aos="zoom-in" className="care-approach">
                <p className=" startsm">Every individual is unique; we apply working theories in practice to understand the specific needs of our clients. Our certified and dependable team is trained to always study the progressive changes in patients and adjust the care strategies accordingly.</p>
                <h1 className="startsmh1">Did you know that the human body reacts positively to constructive care?</h1>
                <p className="startsmp">The <span className="care-approachp-s">Beta Care Approach</span> is built on such positivity, to align the condition of the body and mind to the external environment. With a friendly supportive approach from Beta Care, our client’s recover faster than envisaged.</p>
            </div>
            <div className="lg:hidden">
                <p className="care-approachImg-p">THE BETA CARE APPROACH </p>
                <img src={image} alt="" className="care-approachImg" />
            </div>
            <div data-aos="zoom-in" className="care-approachImgContainer hidden lg:flex">
                <p className="care-approachImg-p">THE BETA CARE APPROACH </p>
                <img src={image} alt="" className="care-approachImg2" />
            </div>
        </div>
    </div>
  )
}

export default Body