import { ContactButtons } from "../../data"
import OR  from '../../assets/Figma-Images/OR.png'
import Facebook  from '../../assets/Figma-Images/facebookBtn.png'
import Google  from '../../assets/Figma-Images/GoogleBtn.png'
import { Link } from "react-router-dom"

const SignForm = () => {
  

  return (
    <div className="bodyBg py-[5%]">
        <div className=" maxcontainer2 grid grid-cols-2 lg:grid-cols-1 place-items-center">
          <div className="lg:hidden">
          <div className="relative z-[5]">
                {ContactButtons.map((btn, i) => (
                  <img key={i} src={btn.button} alt="" className="mb-5  cursor-pointer" />
                ))}
          </div>
          </div>
              
          <div>
          <form className="smFormStyle">
            <div className="sm:h-[60px]">
              <input type="text" placeholder="Username" className="input2Style"/>
            </div>
            <div className="sm:h-[60px]">
              <input type="email" placeholder="Email" className="input2Style"/>
            </div>
            <div className="sm:h-[60px]">
              <input type="password" placeholder="Password" className="input2Style" />
            </div>
            <div className="sm:h-[60px]">
              <input type="password" placeholder="Confirm Password" className="input2Style" />
            </div>
            <div className="check">
                <input type="checkbox" className="checkbox" />
                <p className="inputP">I accept the Betacare <a href="#" className="inputPa">Terms and Conditions, Product Disclosure and Settlement Statement</a> and our Financial Services System</p>
            </div>
            <div className="check">
                <input type="checkbox" className="checkbox" />
                <p className="inputP">I acknowledge that my information will be used in accordance with the <a href="#" className="inputPa">Private Policy</a> and <a href="#" className="inputPa">Cookie Policy</a></p>
            </div>
            <button className="SignSubmit">Create Account</button>
          </form>
            <div className="smFormStyle">
                <img src={OR} alt="" className="py-10 sm:py-5 sm:w-[200px]"/>
                <div className="flex flex-col sm:w-[300px]">
                    <img src={Facebook} alt="" />
                    <img src={Google} alt="" />
                </div>
                <div className="flex flex-col items-center justify-center">
                <span className="signSpan">Have an account?<Link to='/login' className="signlink"> Sign in</Link></span>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default SignForm