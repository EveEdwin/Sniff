import React from "react";
import BookApointment from "./Pages/BookApointment";
import HomePage from "./Pages/HomePage";
import LearningPage from "./Pages/LearningPage";
import ServicesPage from "./Pages/ServicesPage";
import SocialPage from "./Pages/SocialPage";
import TandC from "./Pages/TandC";
import Component16 from "./preComponent/C19";
import { Routes, Route } from 'react-router-dom'

import routes from "./routes/service";


function App() {
  return (
    <>
      <Component16 />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/learning" element={<LearningPage />} />
        <Route path="/social" element={<SocialPage />} />
        <Route path="/tandc" element={<TandC />} />
        <Route path="/bookappointment" element={<BookApointment />} />
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </>
  );
}

export default App;
