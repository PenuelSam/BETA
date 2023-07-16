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
import Personal2 from "./Pages/CareWorkerOnboard/Personal"
import BGchecks2 from "./Pages/CareWorkerOnboard/BGchecks"
import CV2 from "./Pages/CareWorkerOnboard/CV"
import Declaration2 from "./Pages/CareWorkerOnboard/Declaration"
import ID2 from "./Pages/CareWorkerOnboard/IDs"
import NextOfkin2 from "./Pages/CareWorkerOnboard/NextOfKin"
import Payment2 from "./Pages/CareWorkerOnboard/Payment"
import Reference2 from "./Pages/CareWorkerOnboard/Reference"
import Train2 from "./Pages/CareWorkerOnboard/Train"
import Vaccination2 from "./Pages/CareWorkerOnboard/Vaccination"
import Work2 from "./Pages/CareWorkerOnboard/Work"

function App() {

  return (
    <div className="w-full overflow-x-hidden">
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
        <Route path="/personal2" element={<Personal2 />}/>
        <Route path="/train2" element={<Train2 />}/>
        <Route path="/bgchecks2" element={<BGchecks2 />}/>
        <Route path="/cv2" element={<CV2 />}/>
        <Route path="/declaration2" element={<Declaration2 />}/>
        <Route path="/ids2" element={<ID2 />}/>
        <Route path="/nextofkin2" element={<NextOfkin2 />}/>
        <Route path="/payment2" element={<Payment2 />}/>
        <Route path="/reference2" element={<Reference2 />}/>
        <Route path="/vaccination2" element={<Vaccination2 />}/>
        <Route path="/work2" element={<Work2 />}/> 
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
