import { useEffect, useState } from 'react';
import { getHomes } from '../vaccineHowItApi';

function VaccHowItWork() {
  const [features, setFeatures] = useState([]);

 useEffect(() => {
    const fetchFeatures = async () => {
      try {
        const res = await getHomes();
        const data = res.data;

        const formatted = data.map(item => ({
          title: item.title,
          desc: item.description,
        }));

        setFeatures(formatted);
      } catch (err) {
        console.error('Failed to fetch diagnostic features:', err);
      }
    };

    fetchFeatures();
  }, []);

  return (
    <div className="min-h-[60vh] px-4 sm:px-6 lg:px-8 py-4 sm:py-6 bg-white text-center flex flex-col justify-center">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold relative group">
        How it <span className="text-red-500 font-semibold">works with us?</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-4 sm:gap-y-6 gap-x-6 sm:gap-x-8 lg:gap-x-12 mt-4 sm:mt-6 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`bg-red-200 text-gray-800 rounded-lg min-h-[200px] min-w-[220px] max-w-[280px] w-full px-4 py-6 flex flex-col items-center shadow-sm transition-colors hover:bg-red-300 text-center mx-auto ${
              index === 4
                ? 'sm:col-start-2 sm:row-start-2'
                : index === 5
                ? 'sm:col-start-3 sm:row-start-2'
                : ''
            }`}
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full mb-3 border-2 border-red-300"></div>
            <h3 className="font-semibold text-base sm:text-lg lg:text-xl">{feature.title}</h3>
            <p className="text-xs sm:text-sm lg:text-base text-gray-500 mt-2">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default VaccHowItWork;
