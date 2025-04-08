// File: src/App.jsx
// Importing React and the HomePage component
import BookApointment from "./Pages/BookApointment";
import HomePage from "./Pages/HomePage";
import LearningPage from "./Pages/LearningPage";
import ServicesPage from "./Pages/ServicesPage";
import SocialPage from "./Pages/SocialPage";
import TandC from "./Pages/TandC";
import Component16 from "./preComponent/component16";
import { Routes, Route } from 'react-router-dom'


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
      </Routes>


    </>
  );
}

export default App;
