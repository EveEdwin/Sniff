import React from 'react'
import Component1 from '../Components/C2'
import Component2 from '../Components/C3'
import Component10 from '../Components/C8'
import Component11 from '../preComponent/C15'
import Component7 from '../Components/C5'
import Component8 from '../Components/C6'
const services = [
  {
    title: 'Vet Consultation',
    desc: 'Get expert advice and personalized care from professional veterinarians, ensuring your pet’s well-being at every stage.',
    status: 'Explore →',
    route: '/services/vet-consultation'
  },
  {
    title: 'Wellness Exam',
    desc: 'At Sniffi, wellness means proactive care. We offer personalized wellness plans focused on preventive check-ups, nutrition, and early detection, making it easier to keep your pets healthy, happy, and thriving every day.',
    status: 'Explore →',
    route: '/services/wellness'
  },
  {
    title: 'Vaccination',
    desc: 'Keep your pet safe with essential vaccinations, protecting them from diseases and ensuring a long, healthy life.',
    status: 'Explore →',
    route: '/services/vaccination'
  },
  {
    title: 'Pet Registration',
    desc: 'Hassle-free registration to maintain your pet’s health records digitally for easy access anywhere, anytime.',
    status: 'Explore →',
    route: '/services/pet-registration'
  },
  {
    title: 'Diagnostics',
    desc: 'Advanced lab tests and screenings for accurate disease detection, early treatment, and better health management.',
    status: 'Explore →',
    route: '/services/diagnostics'
  },
  {
    title: 'Mating',
    desc: '(COMING SOON)',
    status: 'Explore →',
    route: '/services/mating'
  },
];

const heading = {
  prefix: 'We Provide ',
  highlight: 'Best Services'
};

const ServicePage = () => {
  return (
    <>
      <Component1
  titleLines={[
    <>Sniffi – Quality <span className="text-[#FE5F62]">Pet Care,</span></>,
    <>Right at <span className="text-[#FE5F62]">Your Doorstep!</span></>,
  ]}
  heading={<>Why Choose At-<span className="text-[#FE5F62]">Home Pet Care?</span></>}
  benefits={[
    {
      title: 'Comfort & Less Stress',
      description: 'Pets feel more relaxed in their familiar environment, reducing anxiety and fear.'
    },
    {
      title: 'Convenience & Time-Saving',
      description: 'No more hectic clinic visits or waiting in long queues—care comes to you!'
    },
    {
      title: 'One-on-One Attention',
      description: 'Our vets provide personalized consultations and thorough check-ups without distractions.'
    },
    {
      title: 'Safe & Hygienic',
      description: 'Minimize exposure to contagious illnesses and ensure a cleaner, safer experience.'
    }
  ]}
  imageSrc="/women.jpg"
  imageAlt="Professional veterinarian with dog"
/>


<Component2 services={services} heading={heading} />

      <Component10 />
      {/* <Component11 /> */}
      <Component7 />
      <Component8 />

    </>

  )
}

export default ServicePage
