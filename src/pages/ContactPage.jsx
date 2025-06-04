import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server
    // For this demo, we'll simulate a successful submission
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Thank you for your message. I will get back to you soon!'
    });
  };

  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-primary-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-serif font-bold text-secondary-900 mb-6"
            >
              Contact Caroline
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-secondary-600"
            >
              Get in touch to schedule a consultation or ask any questions
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-serif font-bold text-secondary-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-secondary-700 mb-8">
                I offer therapy sessions both in-person and online. Feel free to reach out with any questions or to schedule an initial consultation.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary-50 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-secondary-900">Phone</h3>
                    <p className="text-secondary-700">+44 7700 900000</p>
                    <p className="text-secondary-500 text-sm mt-1">Available Monday-Friday, 9am-5pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary-50 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600">
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-secondary-900">Email</h3>
                    <p className="text-secondary-700">caroline@carolineblum.co.uk</p>
                    <p className="text-secondary-500 text-sm mt-1">I aim to respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary-50 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-secondary-900">Location</h3>
                    <p className="text-secondary-700">123 Therapy Street, London, UK</p>
                    <p className="text-secondary-500 text-sm mt-1">In-person and online sessions available</p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary-50 p-6 rounded-lg border border-secondary-100">
                <h3 className="font-serif font-bold text-secondary-900 mb-3">Session Information</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600 mr-2 mt-1">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="text-secondary-700">50-minute sessions</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600 mr-2 mt-1">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="text-secondary-700">£60 per session</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600 mr-2 mt-1">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="text-secondary-700">Flexible scheduling options</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600 mr-2 mt-1">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="text-secondary-700">24-hour cancellation policy</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-secondary-100">
                <h2 className="text-2xl font-serif font-bold text-secondary-900 mb-6">
                  Send a Message
                </h2>

                {formStatus.submitted ? (
                  <div className="bg-primary-50 border border-primary-100 text-primary-700 p-4 rounded-lg">
                    {formStatus.message}
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="name" className="block text-secondary-700 mb-2">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="email" className="block text-secondary-700 mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="phone" className="block text-secondary-700 mb-2">Phone (optional)</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>

                    <div className="mb-6">
                      <label htmlFor="message" className="block text-secondary-700 mb-2">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary w-full">
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-secondary-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-secondary-600">
              Common questions about booking and sessions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-100">
              <h3 className="text-xl font-serif font-bold text-secondary-900 mb-2">
                How do I book a session?
              </h3>
              <p className="text-secondary-700">
                You can book a session by filling out the contact form, sending an email, or calling directly. I'll get back to you within 24 hours to arrange a suitable time.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-100">
              <h3 className="text-xl font-serif font-bold text-secondary-900 mb-2">
                What happens in the first session?
              </h3>
              <p className="text-secondary-700">
                The first session is an opportunity for us to meet, discuss what brings you to therapy, and determine if we're a good fit. I'll explain my approach and answer any questions you might have.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-100">
              <h3 className="text-xl font-serif font-bold text-secondary-900 mb-2">
                Do you offer online sessions?
              </h3>
              <p className="text-secondary-700">
                Yes, I offer both in-person and online therapy sessions via secure video platforms. Online therapy provides the same quality of care with added convenience and flexibility.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-100">
              <h3 className="text-xl font-serif font-bold text-secondary-900 mb-2">
                What is your cancellation policy?
              </h3>
              <p className="text-secondary-700">
                I require 24 hours' notice for cancellations. Sessions cancelled with less than 24 hours' notice will be charged the full fee, except in cases of emergency.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
