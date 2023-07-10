import { ContactButtons } from "../../data"

import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';

const ContactForm = () => {
  
  return (
    <div className=" bodyBg">
        <div className=" maxcontainer2 grid  grid-cols-2 lg:grid-cols-1 place-items-center">
          <div className="lg:hidden">
          <div className="relative z-[5]">
                {ContactButtons.map((btn, i) => (
                  <img key={i} src={btn.button} alt="" className="mb-5  cursor-pointer" />
                ))}
          </div>
          </div>
              
          <form action="" className="sm:flex sm:flex-col sm:items-center sm:justify-center">
            <div className="relative">
              <Person2OutlinedIcon className="contactIcon" sx={{fill: 'black' }}/>
              <input type="text" placeholder="Name" className="inputStyle"/>
            </div>
            <div className="relative">
              <EmailOutlinedIcon className="contactIcon" sx={{fill: 'black' }} />
              <input type="email" placeholder="Email" className="inputStyle"/>
            </div>
            <div className="relative">
              <PhoneOutlinedIcon className="contactIcon" sx={{fill: 'black' }} />
              <input type="text" placeholder="Number" className="inputStyle" />
            </div>
            <div className="relative">
              <LocationOnOutlinedIcon className="contactIcon" sx={{fill: 'black' }} />
              <input type="text" placeholder="Location" className="inputStyle" />
            </div>
            <div className="relative">
              <ContactSupportOutlinedIcon className="contactIconarea" sx={{fill: 'black'}} />
              <textarea name="" id="" cols="30" rows="10" placeholder="message" className="textareaStyle" />
            </div>
            <button type="submit" className="formSubmit">Submit</button>
          </form>
        </div>
    </div>
  )
}

export default ContactForm