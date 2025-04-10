
// Import the necessary modules and components
import Component7 from "./Components/Component7";
import Component8 from "./Components/Component8";
import Component9 from "./Components/Component9";
import Component10 from "./Components/Component10";
import Component1 from "./Components/Component1";
import Component2 from "./Components/Component2";
import Component3 from "./Components/Component3";
import Component19 from "./Components/Component19";


import BookApointment from "./Pages/BookApointment";
import HomePage from "./Pages/HomePage";
import LearningPage from "./Pages/LearningPage";
import ServicesPage from "./Pages/ServicesPage";
import SocialPage from "./Pages/SocialPage";
import TandC from "./Pages/TandC";
import Component16 from "./preComponent/component16";
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
