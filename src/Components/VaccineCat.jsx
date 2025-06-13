import { useEffect, useState } from 'react';
import { FaPaw } from 'react-icons/fa';
import { getHomes } from '../VaccineCat'; // or your appropriate API hook

const VaccineCat = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await getHomes();
        const formatted = res.data.map((item) => item.title);
        setCategories(formatted);
      } catch (err) {
        console.error('Failed to fetch diagnostic categories:', err);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="w-full min-h-[300px] md:h-auto relative bg-[#FEC8C8]/50 mt-10 overflow-hidden px-4 md:px-8 lg:px-[102px] py-8">
      <div className="text-center md:text-justify mb-8">
        <span className="text-[#3F3D56] text-2xl md:text-4xl font-semibold tracking-wide">
          Vaccine Categories by{' '}
        </span>
        <span className="text-[#FE5F62] text-2xl md:text-4xl font-semibold tracking-wide">
          Symptoms
        </span>
      </div>

      <div className="w-full flex flex-wrap justify-center md:justify-start items-start gap-4 md:gap-6 lg:gap-10 mb-8">
        {categories.map((category, index) => (
          <div
            key={index}
            className="w-36 sm:w-44 md:w-52 px-3 md:px-3.5 py-3 md:py-4 bg-[#FFFFFF] rounded-xl outline outline-[#FE5F62]/50 outline-[0.6px] inline-flex flex-col justify-start items-start gap-2 hover:shadow-md transition-shadow"
          >
            <div className="self-stretch inline-flex justify-start items-center gap-3">
              <div className="w-7 h-7 md:w-9 md:h-9 bg-[#FFFFFF] rounded-full outline outline-[#FE5F62]/50 outline-[0.5px] flex justify-center items-center">
                <FaPaw className="text-[#FE5F62] text-base md:text-xl" />
              </div>
              <div className="text-justify text-[#3F3D56] text-sm md:text-lg font-medium tracking-tight">
                {category}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center text-center md:text-justify text-[#FE5F62] text-xl underline tracking-tight">
        <a href="#" className="cursor-pointer">
          See More
        </a>
      </div>
    </div>
  );
};

export default VaccineCat;
