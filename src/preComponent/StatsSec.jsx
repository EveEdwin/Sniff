import { useEffect, useState } from 'react';
import { getHomes } from '../statsApi';

const fixedIcons = ['❤️', '🦴', '👍', '🐾'];

const StatsSec = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await getHomes();
        const data = res.data;

        const formatted = data.slice(0, 4).map((item, index) => ({
          value: item.title,
          label: item.description,
          icon: fixedIcons[index] || '📊'
        }));

        setStats(formatted);
      } catch (err) {
        console.error('Failed to fetch vaccination stats:', err);
      }
    };

    fetchStats();
  }, []);

  return (
    <section className="w-full overflow-hidden bg-[#FFDADA] py-8 sm:py-12 md:py-16 relative px-4 mt-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-4 sm:p-5 md:p-6 flex flex-col items-center gap-1 sm:gap-2 transition-shadow duration-300 hover:shadow-lg"
          >
            <div className="text-2xl sm:text-3xl bg-pink-100 p-2 sm:p-3 rounded-full">
              {item.icon}
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold text-pink-500 mt-2">
              {item.value}
            </h3>
            <p className="text-gray-700 text-xs sm:text-sm md:text-base text-center">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSec;
