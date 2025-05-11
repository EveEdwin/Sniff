import React from 'react'
import Component15 from '../preComponent/C18'
import Component14 from '../preComponent/C17'
import Component9 from '../Components/C7'
import Component6 from '../preComponent/C14'
import Component11 from '../preComponent/C15'
import Component13 from '../preComponent/C16'
import Component10 from '../Components/C8'
import Component7 from '../Components/C5'
import Component8 from '../Components/C6'
const pawPositions = [
  "top-4 left-4",
  "bottom-4 right-4",
  "top-1/2 left-1/4",
  "top-1/3 right-1/3",
  "bottom-1/4 left-1/3",
  "top-10 right-10",
  "bottom-10 left-10",
  "top-1/4 right-1/4",
];


const HomePage = () => {
  return (
    <div>
      <Component15 />
      <Component14 />
      <Component9
  images={["/doc3.jpeg", "/doc2.jpeg"]}
  headingParts={[
    { text: "Why ", color: "text-[#3F3D56]" },
    { text: "Choose", color: "text-[#FE5F62]" },
    { text: " Us?", color: "text-[#3F3D56]" },
  ]}
  features={[
    {
      title: "Expert Care",
      description: "Our skilled veterinarians and support staff ensure your pet receives the best medical attention.",
    },
    {
      title: "Modern Facilities",
      description: "Equipped with state-of-the-art technology for accurate diagnoses and treatments.",
    },
    {
      title: "Emergency Services",
      description: "Available when you need us the most, providing immediate care in critical situations.",
    },
    {
      title: "Compassionate Approach",
      description: "We treat every pet like family, ensuring a caring and comfortable experience.",
    },
    {
      title: "Convenient Booking",
      description: "Easy online appointment scheduling for hassle-free visits.",
    },
  ]}
  pawPositions={pawPositions}
/>
      <Component6 headingParts={[
    { text: "We Provide ", color: "text-[#3F3D56]" },
    { text: "Best Services", color: "text-[#FE5F62]" },
  ]}
  services={[
    {
      title: "Doggy Day Care",
      description: "Your dog deserves a fun day with friends and caring supervision.",
    },
    {
      title: "Pet Grooming",
      description: "Professional grooming services to keep your pet looking fabulous.",
    },
    {
      title: "Vet Consultation",
      description: "Expert vet care and health checkups to keep your pet healthy.",
    },
  ]}
/>
      {/* <Component11 /> */}
      <Component13 />
      <Component10 />
      <Component7 />
      <Component8 />
    </div>
  )
}

export default HomePage

