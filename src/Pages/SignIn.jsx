import Banner from "../Components/SignIn/Banner"
import LogInForm from "../Components/SignIn/LogInForm"
import Title from "../Components/Title"


const SignIn = () => {
  return (
    <div>
        <Banner />
        <Title title='Log into your account' />
        <LogInForm />
    </div>
  )
}

export default SignIn