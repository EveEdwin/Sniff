import { useEffect, useState } from 'react';
import { FaPaw } from 'react-icons/fa';
import { getTerms } from '../termsApi';
import './ItemManager.css';

const TandC = () => {
  const [terms, setTerms] = useState([]);

  useEffect(() => {
    const fetchTerms = async () => {
      try {
        const res = await getTerms();
        setTerms(res.data);
      } catch (err) {
        console.error('Failed to fetch Terms:', err);
      }
    };

    fetchTerms();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-red-100/50 py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-wide mb-6">
            <span className="text-[#3F3D56]">Terms & </span>
            <span className="text-[#FE5F62]">Conditions</span>
          </h1>
          <p className="text-[#3F3D56] text-base md:text-xl max-w-3xl mx-auto mb-6">
            Please read these terms carefully before using our services. By accessing or using Sniffi's pet care services, you agree to be bound by these terms and conditions.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 bg-white">
        <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-gray-100">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#3F3D56] mb-6">Terms of Service</h2>

          <ul className="im-list">
            {terms.map((item) => (
              <li key={item._id} className="im-item">
                <strong className="im-item-label">{item.title}</strong>
                {item.subtitle && <p className="im-item-sub">{item.subtitle}</p>}
                {item.paragraph && <p className="im-item-para">{item.paragraph}</p>}
                {item.description && (
                  <ul className="im-item-bullets">
                    {item.description
                      .replace(/\/{2,}/g, '//')
                      .split('//')
                      .map(b => b.trim())
                      .filter(b => b.length > 0)
                      .map((b, i) => <li key={i}>{b}</li>)
                    }
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-center mt-8 mb-4">
            <FaPaw className="text-red-200 text-4xl" />
          </div>

          <div className="mt-10 pt-6 border-t border-gray-200">
            <h3 className="text-xl font-medium text-[#3F3D56] mb-4">Questions or Concerns?</h3>
            <p className="text-gray-700 mb-4">
              If you have any questions about these Terms & Conditions, please contact us:
            </p>
            <div className="bg-red-100/50 p-4 rounded-lg inline-flex flex-col sm:flex-row gap-4 sm:gap-10">
              <div>
                <div className="font-medium text-[#FE5F62]">Email</div>
                <div>sniffi@gmail.com</div>
              </div>
              <div>
                <div className="font-medium text-[#FE5F62]">Phone</div>
                <div>+91-9175129919</div>
              </div>
              <div>
                <div className="font-medium text-[#FE5F62]">Address</div>
                <div>Office no. 320, 10 Biz Park, Viman Nagar, Pune 411014</div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button className="px-6 py-3 bg-[#FE5F62] text-white rounded-md hover:bg-[#e45457] transition-colors">
              I Agree to Terms & Conditions
            </button>
          </div>
        </div>
      </div>

      <div className="bg-red-100/50 py-12 px-4 mt-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">
            <span className="text-[#3F3D56]">Stay Updated with </span>
            <span className="text-[#FE5F62]">Policy Changes</span>
          </h2>
          <p className="text-[#3F3D56] text-lg max-w-3xl mx-auto mb-8">
            Subscribe to receive notifications about updates to our Terms and Conditions, Privacy Policy, and other important documents.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FE5F62] w-full max-w-md"
            />
            <button className="px-6 py-3 bg-[#FE5F62] text-white rounded-md hover:bg-[#e45457] transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TandC;
