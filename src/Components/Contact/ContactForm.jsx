import { ContactButtons } from "../../data"
import person from "../../assets/Figma-Images/person.png"
import call from "../../assets/Figma-Images/call.png"
import mail from "../../assets/Figma-Images/Mail.png"
import Wechat from "../../assets/Figma-Images/Wechat.png"
import maps from "../../assets/Figma-Images/Maps.png"

const ContactForm = () => {
  
  return (
    <div className=" bodyBg">
        <div className=" maxcontainer2 grid  grid-cols-2 lg:grid-cols-1 place-items-center">
          <div className="z-[5] lg:hidden relative">
                {ContactButtons.map((btn, i) => (
                  <img key={i} src={btn.button} alt="" className="mb-5  cursor-pointer " />
                ))}
          </div>
              
          <form action="" className="sm:flex sm:flex-col sm:items-center sm:justify-center ">
            <div className="relative sm:h-[60px]">
              <img src={person} alt="" className="contactIcon" />
              <input type="text" placeholder="Name" className="inputStyle"/>
            </div>
            <div className="relative sm:h-[60px]">
              <img src={mail} alt="" className="contactIcon" />
              <input type="email" placeholder="Email" className="inputStyle"/>
            </div>
            <div className="relative sm:h-[60px]">
              <img src={call} alt="" className="contactIcon" />
              <input type="text" placeholder="Number" className="inputStyle" />
            </div>
            <div className="relative sm:h-[60px]">
              <img src={maps} alt="" className="contactIcon" />
              <input type="text" placeholder="Location" className="inputStyle" />
            </div>
            <div className="relative sm:h-[150px]">
              <img src={Wechat} alt="" className="contactIconarea" />
              <textarea name="" id="" cols="30" rows="10" placeholder="Message" className="textareaStyle" />
            </div>
            <button type="submit" className="formSubmit">Submit</button>
          </form>
        </div>
    </div>
  )
}

export default ContactForm