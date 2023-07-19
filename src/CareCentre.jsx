import {Routes, Route } from "react-router-dom"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Services from "./Pages/Services"
import Services2 from "./Pages/Services2"
import CareLanding from "./Pages/careCentre/Landing"
import CareHome from "./Pages/careCentre/Home"
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
import Navbar from "./Components/mainHome/Navbar"


const CareCentre = () => {
  return (
    <div>
        <Navbar />
        <Routes>
        <Route path="/about"  element={<About/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />}/>
        <Route path="/services2" element={<Services2 />}/>
        <Route path="/carecentre" element={<CareLanding/>} />
        <Route path="/carehome" element={<CareHome />}/>
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
    </div>
  )
}

export default CareCentre