import { useEffect, useState } from 'react';
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
import { getHomes } from '../vetApi';


const VetConsultation = () => {
  const [points, setPoints] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getHomes();
        const formatted = res.data.map(item => `${item.title}`);
        setPoints(formatted);
      } catch (err) {
        console.error('Failed to fetch vet consultation data:', err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <ExpertVet />
      <WhyImp
        title="Why"
        highlightText="It Important?"
        points={points}
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
