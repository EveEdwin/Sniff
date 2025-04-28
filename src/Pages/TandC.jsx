import React, { useState } from 'react'
import { FaPaw } from 'react-icons/fa'
import { IoPawOutline } from "react-icons/io5"

const TandC = () => {
  const [activeSection, setActiveSection] = useState('terms')

  const sections = [
    { id: 'terms', title: 'Terms of Service' },
    { id: 'privacy', title: 'Privacy Policy' },
    { id: 'refunds', title: 'Refund Policy' },
    { id: 'appointments', title: 'Appointments' },
    { id: 'liability', title: 'Liability' }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-red-100/50 py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-wide mb-6">
            <span className="text-[#3F3D56]">Terms & </span>
            <span className="text-[#FE5F62]">Conditions</span>
          </h1>
          <p className="text-[#3F3D56] text-base md:text-xl max-w-3xl mx-auto mb-6">
            Please read these terms carefully before using our services. By accessing or using Sniffi's pet care services, you agree to be bound by these terms and conditions.
          </p>
          <div className="flex justify-center">
            <div className="bg-white py-2 px-4 rounded-full shadow-sm inline-flex items-center">
              <IoPawOutline className="text-[#FE5F62] mr-2" />
              <span className="text-[#3F3D56]">Last Updated: May 15, 2023</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-6xl mx-auto px-4 mt-8">
        <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-6 border-b border-gray-200 overflow-x-auto pb-2">
          {sections.map((section) => (
            <button
              key={section.id}
              className={`py-2 px-4 text-sm md:text-base font-medium rounded-t-lg transition-colors whitespace-nowrap
                ${activeSection === section.id ? 
                  'bg-red-100/80 text-[#FE5F62] border-b-2 border-[#FE5F62]' : 
                  'text-gray-600 hover:text-[#FE5F62]'
                }`}
              onClick={() => setActiveSection(section.id)}
            >
              {section.title}
            </button>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-8 bg-white">
        <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-gray-100">
          {activeSection === 'terms' && (
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#3F3D56] mb-6">Terms of Service</h2>
              
              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="text-xl text-[#FE5F62] font-medium mb-3">1. Acceptance of Terms</h3>
                  <p className="mb-3">By accessing or using our website, mobile application, or any of our services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, please do not use our services.</p>
                </div>

                <div>
                  <h3 className="text-xl text-[#FE5F62] font-medium mb-3">2. Service Description</h3>
                  <p className="mb-3">Sniffi provides pet care services including but not limited to veterinary consultations, diagnostics, pharmacy services, vaccinations, and pet registration. All services are subject to availability and may vary based on location.</p>
                  <p className="mb-3">Our at-home services are designed to provide convenience but may not be suitable for all pet health conditions. Our veterinarians and staff reserve the right to recommend clinic visits when deemed necessary for the well-being of your pet.</p>
                </div>

                <div>
                  <h3 className="text-xl text-[#FE5F62] font-medium mb-3">3. User Accounts</h3>
                  <p className="mb-3">To access certain services, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.</p>
                  <p className="mb-3">You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.</p>
                </div>

                <div>
                  <h3 className="text-xl text-[#FE5F62] font-medium mb-3">4. Service Eligibility</h3>
                  <p className="mb-3">Our services are available to pet owners who are at least 18 years of age. By using our services, you represent and warrant that you meet this eligibility requirement.</p>
                </div>

                <div>
                  <h3 className="text-xl text-[#FE5F62] font-medium mb-3">5. Service Modifications</h3>
                  <p className="mb-3">Sniffi reserves the right to modify, suspend, or discontinue any part of our services at any time, with or without notice. We will not be liable to you or any third party for any modification, suspension, or discontinuation of our services.</p>
                </div>

                <div className="flex items-center justify-center mt-8 mb-4">
                  <FaPaw className="text-red-200 text-4xl" />
                </div>
              </div>
            </div>
          )}

          {activeSection === 'privacy' && (
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#3F3D56] mb-6">Privacy Policy</h2>
              
              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="text-xl text-[#FE5F62] font-medium mb-3">1. Information Collection</h3>
                  <p className="mb-3">We collect personal information that you voluntarily provide when using our services, including but not limited to your name, email address, phone number, pet information, and payment details.</p>
                  <p className="mb-3">We may also collect information about how you use our services, including your IP address, browser type, referring/exit pages, and date/time stamps.</p>
                </div>

                <div>
                  <h3 className="text-xl text-[#FE5F62] font-medium mb-3">2. Use of Information</h3>
                  <p className="mb-3">We use the information we collect to provide, maintain, and improve our services, communicate with you, and comply with legal obligations.</p>
                  <p className="mb-3">Your pet's medical records are used to provide appropriate veterinary care and may be shared with other veterinary professionals when necessary for your pet's treatment.</p>
                </div>

                <div>
                  <h3 className="text-xl text-[#FE5F62] font-medium mb-3">3. Information Sharing</h3>
                  <p className="mb-3">We do not sell, trade, or rent your personal information to third parties. We may share your information with service providers who assist us in operating our services, conducting our business, or serving you.</p>
                  <p className="mb-3">We may disclose your information if required by law or if we believe that such action is necessary to comply with legal processes or protect our rights, property, or safety.</p>
                </div>

                <div>
                  <h3 className="text-xl text-[#FE5F62] font-medium mb-3">4. Data Security</h3>
                  <p className="mb-3">We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.</p>
                  <p className="mb-3">Despite our efforts, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee the absolute security of your information.</p>
                </div>

                <div className="flex items-center justify-center mt-8 mb-4">
                  <FaPaw className="text-red-200 text-4xl" />
                </div>
              </div>
            </div>
          )}

          {activeSection === 'refunds' && (
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#3F3D56] mb-6">Refund Policy</h2>
              
              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="text-xl text-[#FE5F62] font-medium mb-3">1. Service Refunds</h3>
                  <p className="mb-3">Refund requests for services must be submitted within 48 hours of the service being provided. Refunds are issued at our discretion based on the nature of the service and the circumstances of the request.</p>
                  <p className="mb-3">For diagnostic tests, no refunds will be provided once testing has been initiated. For medications, no refunds will be provided once medications have been dispensed.</p>
                </div>

                <div>
                  <h3 className="text-xl text-[#FE5F62] font-medium mb-3">2. Cancellation Policy</h3>
                  <p className="mb-3">Appointments cancelled with less than 24 hours' notice may be subject to a cancellation fee equal to 50% of the scheduled service cost.</p>
                  <p className="mb-3">No-show appointments without prior notification will be charged the full service fee.</p>
                </div>

                <div>
                  <h3 className="text-xl text-[#FE5F62] font-medium mb-3">3. Satisfaction Guarantee</h3>
                  <p className="mb-3">If you are not satisfied with our services, please contact our customer support team within 7 days of service completion. We will work with you to address your concerns and may offer partial or full refunds on a case-by-case basis.</p>
                </div>

                <div>
                  <h3 className="text-xl text-[#FE5F62] font-medium mb-3">4. Refund Process</h3>
                  <p className="mb-3">Approved refunds will be issued using the original payment method. Refund processing times vary depending on your payment provider and may take 5-10 business days to appear in your account.</p>
                </div>

                <div className="flex items-center justify-center mt-8 mb-4">
                  <FaPaw className="text-red-200 text-4xl" />
                </div>
              </div>
            </div>
          )}

          {activeSection === 'appointments' && (
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#3F3D56] mb-6">Appointment Terms</h2>
              
              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="text-xl text-[#FE5F62] font-medium mb-3">1. Scheduling Appointments</h3>
                  <p className="mb-3">Appointments can be scheduled through our mobile application, website, or by phone. All appointments are subject to veterinarian availability and service area coverage.</p>
                  <p className="mb-3">Emergency appointments may be requested but cannot be guaranteed and may incur additional fees.</p>
                </div>

                <div>
                  <h3 className="text-xl text-[#FE5F62] font-medium mb-3">2. Appointment Preparation</h3>
                  <p className="mb-3">For at-home appointments, please ensure your pet is secured in a safe environment and that you have all relevant medical history and information available for our veterinarian.</p>
                  <p className="mb-3">For diagnostic appointments, please follow any pre-testing instructions provided, such as fasting requirements.</p>
                </div>

                <div>
                  <h3 className="text-xl text-[#FE5F62] font-medium mb-3">3. Late Arrivals</h3>
                  <p className="mb-3">If you anticipate being late for an appointment, please contact us as soon as possible. Late arrivals may result in abbreviated appointment times or rescheduling if necessary to accommodate other scheduled appointments.</p>
                </div>

                <div>
                  <h3 className="text-xl text-[#FE5F62] font-medium mb-3">4. Follow-up Care</h3>
                  <p className="mb-3">Our veterinarians may recommend follow-up appointments as part of your pet's treatment plan. It is your responsibility to schedule and attend these appointments for the continued well-being of your pet.</p>
                </div>

                <div className="flex items-center justify-center mt-8 mb-4">
                  <FaPaw className="text-red-200 text-4xl" />
                </div>
              </div>
            </div>
          )}

          {activeSection === 'liability' && (
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#3F3D56] mb-6">Liability Limitations</h2>
              
              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="text-xl text-[#FE5F62] font-medium mb-3">1. Service Liability</h3>
                  <p className="mb-3">While we strive to provide the highest quality pet care, we cannot guarantee specific outcomes or results from our services. Pet health conditions can vary and may respond differently to treatments.</p>
                  <p className="mb-3">By using our services, you acknowledge that there are inherent risks in veterinary care and that results cannot be guaranteed.</p>
                </div>

                <div>
                  <h3 className="text-xl text-[#FE5F62] font-medium mb-3">2. Limitation of Liability</h3>
                  <p className="mb-3">To the maximum extent permitted by law, Sniffi and its affiliates, officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from or related to your use of our services.</p>
                  <p className="mb-3">Our liability is limited to the amount paid by you for the specific service giving rise to the claim.</p>
                </div>

                <div>
                  <h3 className="text-xl text-[#FE5F62] font-medium mb-3">3. Indemnification</h3>
                  <p className="mb-3">You agree to defend, indemnify, and hold harmless Sniffi and its affiliates, officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, costs, or expenses arising from your use of our services or your violation of these Terms and Conditions.</p>
                </div>

                <div>
                  <h3 className="text-xl text-[#FE5F62] font-medium mb-3">4. Force Majeure</h3>
                  <p className="mb-3">Sniffi shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, including but not limited to acts of God, natural disasters, pandemic, civil unrest, government actions, or other unforeseen circumstances.</p>
                </div>

                <div className="flex items-center justify-center mt-8 mb-4">
                  <FaPaw className="text-red-200 text-4xl" />
                </div>
              </div>
            </div>
          )}

          {/* Contact information */}
          <div className="mt-10 pt-6 border-t border-gray-200">
            <h3 className="text-xl font-medium text-[#3F3D56] mb-4">Questions or Concerns?</h3>
            <p className="text-gray-700 mb-4">If you have any questions about these Terms & Conditions, please contact us:</p>
            <div className="bg-red-100/50 p-4 rounded-lg inline-flex flex-col sm:flex-row gap-4 sm:gap-10">
              <div>
                <div className="font-medium text-[#FE5F62]">Email</div>
                <div>support@sniffi.com</div>
              </div>
              <div>
                <div className="font-medium text-[#FE5F62]">Phone</div>
                <div>+1 (800) 123-4567</div>
              </div>
              <div>
                <div className="font-medium text-[#FE5F62]">Address</div>
                <div>123 Pet Care Lane, Animal City</div>
              </div>
            </div>
          </div>

          {/* Agreement Button */}
          <div className="mt-8 text-center">
            <button className="px-6 py-3 bg-[#FE5F62] text-white rounded-md hover:bg-[#e45457] transition-colors">
              I Agree to Terms & Conditions
            </button>
          </div>
        </div>
      </div>

      {/* Join Newsletter */}
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
  )
}

export default TandC
