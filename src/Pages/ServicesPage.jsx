import { useEffect, useState } from 'react';
import Component1 from '../Components/C2';
import Component2 from '../Components/C3';
import Component10 from '../Components/C8';
import Component11 from '../preComponent/C15';
import Component7 from '../Components/C5';
import Component8 from '../Components/C6';
import { getHomes } from '../homeApi';
import { getServices } from '../serviceCardApi';

const heading = {
  prefix: 'We Provide ',
  highlight: 'Best Services'
};

const ServicePage = () => {
  const [homeServices, setHomeServices] = useState([]);
  const [cardServices, setCardServices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const homeRes = await getHomes();
        const cardRes = await getServices();

        const formattedHomes = homeRes.data.map((item) => ({
          title: item.title,
          description: item.description
        }));

        const formattedCards = cardRes.data.map((item) => ({
          title: item.title,
          desc: item.description,
          status: 'Explore →',
          route: '/services/' + item.title.toLowerCase().replace(/\s+/g, '-')
        }));

        setHomeServices(formattedHomes);
        setCardServices(formattedCards);
      } catch (err) {
        console.error('API fetch error:', err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Component1
        titleLines={[
          <>Sniffi – Quality <span className="text-[#FE5F62]">Pet Care,</span></>,
          <>Right at <span className="text-[#FE5F62]">Your Doorstep!</span></>,
        ]}
        heading={<>Why Choose At-<span className="text-[#FE5F62]">Home Pet Care?</span></>}
        benefits={homeServices.map((item) => ({
          title: item.title,
          description: item.description
        }))}
        imageSrc="/women.jpg"
        imageAlt="Professional veterinarian with dog"
      />

      <Component2 heading={heading} services={cardServices} />

      <Component10 />
      <Component11 />
      <Component7 />
      <Component8 />
    </>
  );
};

export default ServicePage;
