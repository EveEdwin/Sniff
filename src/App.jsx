import React from "react";
import BookApointment from "./Pages/BookApointment";
import HomePage from "./Pages/HomePage";
import LearningPage from "./Pages/LearningPage";
import ServicesPage from "./Pages/ServicesPage";
import SocialPage from "./Pages/SocialPage";
import TandC from "./Pages/TandC";
import Component16 from "./preComponent/C19";
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import ThankYouPage from "./Pages/ThankYouPage"
import routes from "./routes/service";
import VetConsultation from "./Pages/VetConsultation";
import Vaccination from "./Pages/Vaccination";
import Wellness from "./Pages/Wellness";
import Diagnostics from "./Pages/Diagnostics";
import PetRegistration from "./Pages/PetRegistration";
import Mating from "./Pages/Mating";
import ScrollToTop from "./Components/ScrollToTop";


function App() {
  return (
    <>
    
    <ScrollToTop />
      <Component16 />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        {/* <Route path="/learning" element={<LearningPage />} /> */}
        {/* <Route path="/social" element={<SocialPage />} /> */}
        <Route path="/tandc" element={<TandC />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        
        <Route path="/bookappointment" element={<BookApointment />} />
        <Route path="/services/service1" element={<VetConsultation />} />
        <Route path="/services/service2" element={<Vaccination />} />
        <Route path="/services/service3" element={<Wellness />} />
        <Route path="/services/service4" element={<Diagnostics />} />
        <Route path="/services/service5" element={<PetRegistration />} />  
        <Route path="/services/service6" element={<Mating />} />
      
      </Routes>
    
    </>
  );
}

export default App;
