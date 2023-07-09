import Banner from "../Components/SignUp/Banner"
import SignForm from "../Components/SignUp/SignForm"
import Title from "../Components/Title"


const CreateAccount = () => {
  return (
    <div>
        <Banner />
        <Title title='Create an Account' />
        <SignForm />
    </div>
  )
}

export default CreateAccount