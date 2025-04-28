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
      <WhyImp/>
      {/* <Component1 /> */}
      <Component10 />
      <HowItWork/>
      {/* <WhyImp/> */}
      {/* <Component2 /> */}
      <Component10 />
      <Component11 />
      <Component7 />
      <Component8 />

    </>
  );
};

export default VetConsultation;
