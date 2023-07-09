import { BrowserRouter, Routes, Route  } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Services from "./Pages/Services"
import Company from "./Pages/Company"
import Contact from "./Pages/Contact"
import Footer from "./Components/mainHome/Footer"
import Landing from "./Pages/manufacturing/Landing"
import CareLanding from "./Pages/careCentre/Landing"
import CareHome from "./Pages/careCentre/Home"
import Services2 from "./Pages/Services2"
import CreateAccount from "./Pages/CreateAccount"
import SignIn from "./Pages/SignIn"
import Train from "./Pages/Onboarding/Train"
import Personal from "./Pages/Onboarding/Personal"
import BGchecks from "./Pages/Onboarding/BGchecks"
import CVform from "./Pages/Onboarding/CV"
import Declaration from "./Pages/Onboarding/Declaration"
import IDs from "./Pages/Onboarding/IDs"
import NextOfKin from "./Pages/Onboarding/NextOfKin"
import Payment from "./Pages/Onboarding/Payment"
import Reference from "./Pages/Onboarding/Reference"
import Vaccination from "./Pages/Onboarding/Vaccination"
import Work from "./Pages/Onboarding/Work"
import Navbar from "./Components/Manufacturing/Navbar"
import CustomCursor from "./Components/CustomCursor"
import { useEffect, useState } from "react"
import Preloader from "./Components/Preloader"

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Preloader />
      ) : (
        <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about"  element={<About/>} />
        <Route path="/services" element={<Services />}/>
        <Route path="/services2" element={<Services2 />}/>
        <Route path="/company" element={<Company/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/carecentre" element={<CareLanding/>} />
        <Route path="/carehome" element={<CareHome />}/>
        <Route path="/register" element={<CreateAccount />}/>
        <Route path="/login" element={<SignIn />}/>
        <Route path="/manufacturing" element={<Landing />} />
        <Route path="/train" element={<Train />}  />
        <Route path="/personal" element={<Personal />}/>
        <Route path="/bgchecks" element={<BGchecks />}/>
        <Route path="/cv" element={<CVform />}/>
        <Route path="/declaration" element={<Declaration />}/>
        <Route path="/ids" element={<IDs />}/>
        <Route path="/nextofkin" element={<NextOfKin />}/>
        <Route path="/payment" element={<Payment />}/>
        <Route path="/reference" element={<Reference />}/>
        <Route path="/vaccination" element={<Vaccination />}/>
        <Route path="/work" element={<Work />}/>
      </Routes>
      <Footer />
      <CustomCursor />
      </BrowserRouter>
      )}
    </div>
  )
}

export default App
