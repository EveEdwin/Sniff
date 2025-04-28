import { FaCheckCircle } from "react-icons/fa";

const HowItWork = ({ title, steps }) => {
    return (
        <div className="bg-white mx-auto w-full px-6 py-0 md:px-20 py-0 ml-10 mb-16">
            <div>
                <div className="flex-1 justify-between flex">
                    <section className="w-[60vw] flex flex-col justify-center">
                        <h2 className="text-xl md:text-4xl font-semibold text-[#3F3D56] hover:text-[#FE5F62] transition-colors duration-300">
                            {title}
                        </h2>

                        <ul className="mt-6 space-y-4 text-base md:text-2xl text-black">
                            {steps.map((item, index) => (
                                <li key={index} className="flex items-start gap-3 transition-colors duration-300">
                                    <FaCheckCircle className="text-[#FE5F62] mt-1" />
                                    <span className="hover:text-[#FE5F62] transition-colors duration-300">
                                        <strong>{item.step}: </strong> {item.description}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default HowItWork;
