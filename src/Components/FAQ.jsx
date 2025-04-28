import { FaQuestionCircle } from "react-icons/fa";

const FAQ = ({ title, faqs }) => {
    return (
        <div className="bg-white mx-auto w-full px-6 py-0 md:px-20 py-0 ml-10 mb-16">
            <div>
                <div className="flex-1 justify-between flex">
                    <section className="w-[60vw] flex flex-col justify-center">
                        <h2 className="text-xl md:text-4xl font-semibold text-[#3F3D56]">
                            {title}
                        </h2>

                        <ul className="mt-6 space-y-4 text-base md:text-2xl text-black">
                            {faqs.map((faq, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <FaQuestionCircle className="text-[#FE5F62] mt-1" />
                                    <div>
                                        <strong>{faq.question}</strong>
                                        <p>{faq.answer}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
