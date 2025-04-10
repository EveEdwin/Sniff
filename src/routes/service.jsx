import Diagnostics from "../Pages/Diagnostics";
import Mating from "../Pages/Mating";
import PetRegistration from "../Pages/PetRegistration";
import Pharmacy from "../Pages/Pharmacy";
import Vaccination from "../Pages/Vaccination";
import VetConsultation from "../Pages/VetConsultation";


const routes = [
  { path: '/services/vet-consultation', element: <VetConsultation /> },
  { path: '/services/pharmacy', element: <Pharmacy /> },
  { path: '/services/vaccination', element: <Vaccination /> },
  { path: '/services/pet-registration', element: <PetRegistration /> },
  { path: '/services/diagnostics', element: <Diagnostics /> },
  { path: '/services/mating', element: <Mating /> },
];

export default routes;