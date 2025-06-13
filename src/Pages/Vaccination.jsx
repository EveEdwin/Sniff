import React from 'react';
import dog from '../assets/dogInDiagnoistic.svg';
import ServiceHeading from '../preComponent/ServiceHeading';
import Component17 from '../Components/C11';
import Component12 from '../Components/C10';
import Component11 from '../preComponent/C15';
import Component7 from '../Components/C5';
import Component8 from '../Components/C6';
import Component_10 from '../Components/C1';
import Component10 from '../Components/C8';
import Component19 from '../Components/C12';
import Component3 from '../Components/C4';
import VaccHowItWork from '../Components/VaccHowItWork';
import VaccinationCards from '../Components/VaccinationCards';
import VaccineCat from '../Components/VaccineCat';
const Vaccination = () => {
  return (
    <div>
      <ServiceHeading
  headingParts={[
    { text: "Vaccination ", highlight: true },
    { text: "at Sniffi", highlight: false },
  ]}
  contentParts={[
    { text: "At Sniffi, we believe that ", highlight: false },
    { text: "vaccination is essential for your pet’s health.", highlight: true },
    { text: " We provide ", highlight: false },
    { text: "tailored vaccination plans", highlight: true },
    { text: " that are customized based on your pet’s specific needs, including their age, breed, and health history.", highlight: false },
    { text: " Our goal is to make sure your pet stays protected from preventable diseases through timely immunization.", highlight: false },
    { text: " With our expert guidance, you can rest assured knowing your pet is receiving ", highlight: false },
    { text: "the right vaccines at the right time", highlight: true },
    { text: " to ensure a long and healthy life.", highlight: false },
    { text: " Vaccines help safeguard your pet’s health, prevent illnesses, and keep them happy and active.", highlight: false },
    { text: " Trust Sniffi to provide your pets with the protection they deserve, every step of the way.", highlight: true }
]}


imageSrc={dog}
imageAlt="Dog in Diagnostics"
  
/>
<VaccineCat />
        {/* <VaccinationCards /> */}
        {/* <Component12 /> */}
        <Component10 />
        <VaccHowItWork />
        <Component19 />
        <Component_10 />
        {/* <Component11 /> */}
        <Component7 />
        <Component8 />
    </div>
  );
};

export default Vaccination;
