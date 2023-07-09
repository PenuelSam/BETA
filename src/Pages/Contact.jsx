import Banner from "../Components/Contact/Banner"
import ContactBody from "../Components/Contact/Body"
import ContactForm from "../Components/Contact/ContactForm"
import Title from "../Components/Title"

const Contact = () => {
  return (
    <div>
      <Banner />
      <ContactBody />
      <Title title='Contact us today' />
      <ContactForm />
    </div>
  )
}

export default Contact