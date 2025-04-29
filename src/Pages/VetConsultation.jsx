import React from 'react';
import Component1 from '../Components/C2'
import Component2 from '../Components/C3'
import Component10 from '../Components/C8'
import Component11 from '../preComponent/C15'
import Component7 from '../Components/C5'
import Component8 from '../Components/C6'
import ExpertVet from '../Components/ExpertVet';
import WhyImp from '../Components/WhyImp';
import HowItWork from '../Components/HowItWork';

const VetConsultation = () => {
  return (
    <>
      <ExpertVet/>
      {/* <Component10 /> */}
      <WhyImp
  title="Why"
  highlightText="It Important?"
  points={[
    "Pets often hide symptoms — early detection is key.",
    "80% of chronic illnesses are preventable with timely consultations.",
    "Regular check-ups detect behavioral issues, allergies, infections early.",
    "Peace of mind knowing your pet’s health is monitored professionally."
  ]}
/>


      {/* <Component1 /> */}
      <Component10 />
      <HowItWork
  title="How It Works"
  steps={[
    { step: "Step 1", description: "Book an appointment through Sniffi's app or website." },
    { step: "Step 2", description: "Vet arrives at your doorstep, fully equipped." },
    { step: "Step 3", description: "Consultation, diagnosis, care advice, and prescriptions provided instantly." }
  ]}
/>
<WhyImp
  title="Why At-Home with "
  highlightText="Sniffi?"
  points={[
    "No travel stress or clinic anxiety for pets.",
    "Zero waiting rooms or exposure to other sick animals.",
    "Personalized, one-on-one attention by a trusted vet.",
    "Comfortable, familiar environment improves examination quality."
  ]}
/>

      {/* <WhyImp/> */}
      {/* <Component2 /> */}
      <Component10 />
      {/* <Component11 /> */}
      <Component7 />
      <Component8 />

    </>
  );
};

export default VetConsultation;
