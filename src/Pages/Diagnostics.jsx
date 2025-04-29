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

const Diagnostics = () => {
  return (
    <div>
        <ServiceHeading
  headingParts={[
    { text: "Why ", highlight: false },
    { text: "Sniffi", highlight: true },
    { text: " for ", highlight: false },
    { text: "Diagnostics?", highlight: true },
  ]}
  contentParts={[
    { text: "With Sniffi, ", highlight: false },
    { text: "pet diagnostics have never been easier!", highlight: true },
    { text: " We bring veterinary expertise right to your doorstep, ensuring a stress-free experience for both pets and owners. Our ", highlight: false },
    { text: "at-home diagnostic services", highlight: true },
    { text: " provide ", highlight: false },
    { text: "professional vet guidance", highlight: true },
    { text: " during tests, so you can make informed decisions about your pet’s health. Plus, with our digital report maintenance, you’ll have secure access to your pet’s health records anytime, anywhere—no more lost paperwork or confusion. ", highlight: false },
    { text: "Convenience, expert care, and seamless record-keeping", highlight: true },
    { text: "—that’s the Sniffi way!", highlight: false },
  ]}
  imageSrc={dog}
  imageAlt="Dog in Diagnostics"
/>
        <Component17 />
        <Component12 />
        <Component10 />
        <Component3 />
        <Component19 />
        <Component_10 />
        {/* <Component11 /> */}
        <Component7 />
        <Component8 />
    </div>
  );
};

export default Diagnostics;
