import {Routes, Route } from "react-router-dom"
import Company from "./Pages/Company"
import Contact from "./Pages/Contact"
import Landing from "./Pages/manufacturing/Landing"
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


const Manufacture = () => {
  return (
    <div>
        <Navbar />
        <Routes>
        <Route path="/company" element={<Company/>} />
        <Route path="/contact" element={<Contact />} />
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
    </div>
  )
}

export default Manufacture