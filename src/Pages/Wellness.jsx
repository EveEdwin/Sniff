import React from 'react';
import { useEffect, useState } from 'react';
import dog from '../assets/dogInDiagnoistic.svg';
import ServiceHeading from '../preComponent/ServiceHeading';
import WhyImp from '../Components/WhyImp';
import Component10 from '../Components/C8';
import HowItWork from '../Components/HowItWork';
import FAQ from '../Components/FAQ';
import Component11 from '../preComponent/C15'
import Component7 from '../Components/C5'
import Component8 from '../Components/C6'
import { getHomes } from '../welllApi';
const Wellness = () => {
   const [faqs, setFaqs] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await getHomes();
      const formatted = res.data.map(item => ({
        question: item.title,
        answer: item.description
      }));
      setFaqs(formatted);
    } catch (err) {
      console.error('Failed to fetch vet consultation FAQs:', err);
    }
  };

  fetchData();
}, []);
  return (
    <div>
      <ServiceHeading
  headingParts={[
    { text: "Why ", highlight: false },
    { text: "Wellness", highlight: true },
    { text: " with ", highlight: false },
    { text: "Sniffi?", highlight: true },
  ]}
  contentParts={[
    { text: "At Sniffi, ", highlight: false },
    { text: "wellness means proactive care.", highlight: true },
    { text: " We offer ", highlight: false },
    { text: "personalized wellness plans", highlight: true },
    { text: " focused on ", highlight: false },
    { text: "preventive check-ups, nutrition, and early detection,", highlight: true },
    { text: " making it easier to keep your pets healthy, happy, and thriving every day.", highlight: false },
]}

imageSrc={dog}
imageAlt="Dog in Diagnostics"
  
/>

<WhyImp
  title="Why"
  highlightText="It Important?"
  points={[
    "Pets can seem healthy while silently developing conditions.",
    "Annual wellness exams detect early signs of diseases like arthritis, diabetes, heart issues.",
    "Preventive care increases life expectancy and quality of life.",
    "Early detection = early action = better outcomes."
  ]}
/>
<WhyImp
  title="Why At-Home "
  highlightText="with Sniffi?"
  points={[
    "No stressful rides or anxious clinic experiences.",
    "Your pet stays calm, making the examination more accurate.",
    "Vets observe your pet’s behavior in their natural environment.",
    "Personalized time and attention without the rush of a clinic."
  ]}
/>
<Component10 />

<HowItWork
  title="How It Works"
  steps={[
    { step: "Step 1", description: "Schedule a home wellness exam via Sniffi’s app or website." },
    { step: "Step 2", description: "Our vet comes home, fully equipped." },
    { step: "Step 3", description: "Detailed health evaluation, consultation, and preventive care recommendations." }
  ]}
/>

<WhyImp
  title="What's"
  highlightText="Included?"
  points={[
    "Full-body check (ears, eyes, teeth, heart, lungs, skin, joints).",
    "Weight assessment and dietary advice.",
    "Preventive health plan personalized to your pet’s needs.",
    "Early signs detection and next steps planning."
  ]}
/>

<Component10 />
<FAQ
  title="Frequently Asked Questions"
  faqs={faqs}
/>
{/* <FAQ
    title="Frequently Asked Questions"
    faqs={[
        { question: "How often should wellness exams be done?", answer: "Ideally once every year; senior pets or pets with existing conditions may need more frequent checks." },
        { question: "What happens if a health issue is found?", answer: "The vet will advise on immediate care and, if needed, recommend further diagnostics." },
        { question: "Is a wellness exam different from a consultation?", answer: "Yes — wellness exams focus on preventive health even if your pet seems healthy." }
    ]}
/> */}

      {/* <Component11 /> */}
      <Component7 />
      <Component8 />

    </div>
  );
};

export default Wellness;
