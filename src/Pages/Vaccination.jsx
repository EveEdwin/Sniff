import React from 'react';
import dog from '../assets/dogInDiagnoistic.svg';
import ServiceHeading from '../preComponent/ServiceHeading';
import WhyImp from '../Components/WhyImp';
import Component10 from '../Components/C8';
import HowItWork from '../Components/HowItWork';
import FAQ from '../Components/FAQ';
import Component11 from '../preComponent/C15'
import Component7 from '../Components/C5'
import Component8 from '../Components/C6'

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

<WhyImp
  title="Why"
  highlightText="It Important?"
  points={[
    "Vaccines prevent deadly diseases like rabies, distemper, parvovirus.",
    "Core vaccinations are essential for puppies, kittens, and adult pets alike.",
    "Ensures public safety and protects other animals in your neighborhood.",
    "Missed vaccines can expose your pet to life-threatening risks."
  ]}
/>
<WhyImp
  title="Why At-Home "
  highlightText="with Sniffi?"
  points={[
    "No crowded clinic visits risking infection exposure.",
    "Pets stay relaxed in familiar surroundings.",
    "Personalized vaccine schedule planning.",
    "Quick, professional administration by licensed veterinarians."
  ]}
/>
<Component10 />

<HowItWork
  title="How It Works"
  steps={[
    { step: "Step 1", description: "Book vaccination appointment through the Sniffi app." },
    { step: "Step 2", description: "Vet visits home with necessary vaccines." },
    { step: "Step 3", description: "Vaccination administered safely + vaccination records updated digitally." }
  ]}
/>

<WhyImp
  title="What's"
  highlightText="Included?"
  points={[
    "Core vaccinations (Rabies, DHPPi, Lepto, etc.).",
    "Non-core vaccines based on lifestyle risk (Kennel Cough, Lyme, etc.).",
    "Digital vaccination record maintenance.",
    "Post-vaccine monitoring and advice."
  ]}
/>

<Component10 />

<FAQ
    title="Frequently Asked Questions"
    faqs={[
        { question: "Which vaccines are mandatory?", answer: "Core vaccines like Rabies are legally required." },
        { question: "Will my pet be observed after the shot?", answer: "Yes, the vet will stay back briefly to monitor immediate reactions." },
        { question: "How often are boosters needed?", answer: "Depends on the vaccine; typically annually or every 3 years." }
    ]}
/>

      {/* <Component11 /> */}
      <Component7 />
      <Component8 />

    </div>
  );
};

export default Vaccination;
