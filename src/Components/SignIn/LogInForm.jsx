import { ContactButtons } from "../../data"
import OR  from '../../assets/Figma-Images/OR.png'
import Facebook  from '../../assets/Figma-Images/facebookBtn.png'
import Google  from '../../assets/Figma-Images/GoogleBtn.png'
import { Link } from "react-router-dom"

const LogInForm = () => {

  return (
    <div className="bodyBg py-[5%]">
        <div className=" maxcontainer2 grid grid-cols-2 lg:grid-cols-1 place-items-center">
          <div  className="lg:hidden">
          <div className="relative z-[5]">
                {ContactButtons.map((btn, i) => (
                  <img key={i} src={btn.button} alt="" className="mb-2  cursor-pointer" />
                ))}
          </div>
          </div>
              
          <div>
          <form className="smFormStyle">
            <div>
              <input type="text" placeholder="Username" className="input2Style"/>
            </div>
            <div>
              <input type="password" placeholder="Password" className="input2Style" />
            </div>
            <Link to='/personal'><button className="SignSubmit">Sign In</button></Link>
          </form>
            <div className="smFormStyle">
                <img src={OR} alt="" className="py-10 w-[200px]"/>
                <div className="flex flex-col sm:w-[340px]">
                    <img src={Facebook} alt="" />
                    <img src={Google} alt="" />
                </div>
                <div className="flex flex-col items-center justify-center">
                <span className="signSpan">Don&lsquo;t an account?<Link to='/register' className="signlink"> Sign up</Link></span>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default LogInForm