import Banner from "../Components/Contact/Banner"
import ContactBody from "../Components/Contact/Body"
import ContactForm from "../Components/Contact/ContactForm"
import Navbar from "../Components/Manufacturing/Navbar"
import Title from "../Components/Title"

const Contact2 = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <ContactBody />
      <Title title='Contact us today' />
      <ContactForm />
    </div>
  )
}

export default Contact2