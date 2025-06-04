import { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    preferredContact: 'email',
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    loading: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ ...formStatus, loading: true });
    
    try {
      // Construct email body
      const emailBody = `
        Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.phone}
        Preferred Contact Method: ${formData.preferredContact || 'Not specified'}
        Message: ${formData.message}
      `;
      
      // Create mailto link
      const mailtoLink = `mailto:caroline@carolineblum.co.uk?subject=Therapy Inquiry from ${formData.name}&body=${encodeURIComponent(emailBody)}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      // Set form as submitted
      setFormStatus({
        submitted: true,
        error: false,
        loading: false,
        message: 'Thank you for your message. I will get back to you soon!'
      });
      
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        preferredContact: 'email',
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus({
        submitted: false,
        error: true,
        loading: false,
        message: 'There was an error sending your message. Please try again or contact directly via email.'
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Caroline Blum | Counselling & Psychotherapy</title>
        <meta name="description" content="Get in touch with Caroline Blum to schedule a therapy consultation or ask any questions about counselling and psychotherapy services in London." />
      </Helmet>
      
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
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-secondary-900">Email</h3>
                    <a href="mailto:caroline@carolineblum.co.uk" className="text-secondary-700 hover:text-primary-600 transition-colors">caroline@carolineblum.co.uk</a>
                    <p className="text-secondary-500 text-sm mt-1">I aim to respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary-50 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-secondary-900">Location</h3>
                    <p className="text-secondary-700">London, UK</p>
                    <p className="text-secondary-500 text-sm mt-1">In-person and online sessions available</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary-50 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600">
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-secondary-900">Social Media</h3>
                    <div className="flex space-x-4 mt-2">
                      <a href="https://www.facebook.com/profile.php?id=100009294517247" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 transition-colors">
                        Facebook
                      </a>
                      <a href="https://www.linkedin.com/in/caroline-blum-a630b031/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 transition-colors">
                        LinkedIn
                      </a>
                    </div>
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
                  <div className="bg-primary-50 border border-primary-100 text-primary-700 p-6 rounded-lg text-center">
                    <div className="bg-primary-100 rounded-full p-3 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <h3 className="text-xl font-serif font-bold text-secondary-900 mb-2">Thank You!</h3>
                    <p className="mb-6">{formStatus.message}</p>
                    <button
                      onClick={() => setFormStatus({ submitted: false, error: false, loading: false })}
                      className="btn btn-secondary"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    {formStatus.error && (
                      <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-md">
                        {formStatus.message || 'There was an error sending your message. Please try again or contact directly via email.'}
                      </div>
                    )}
                    
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
                        aria-required="true"
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
                        aria-required="true"
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
                    
                    <div className="mb-4">
                      <label className="block text-secondary-700 mb-2">Preferred Contact Method</label>
                      <div className="flex space-x-4">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="email"
                            checked={formData.preferredContact === 'email'}
                            onChange={handleChange}
                            className="mr-2 text-primary-600 focus:ring-primary-500"
                          />
                          Email
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="phone"
                            checked={formData.preferredContact === 'phone'}
                            onChange={handleChange}
                            className="mr-2 text-primary-600 focus:ring-primary-500"
                          />
                          Phone
                        </label>
                      </div>
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
                        aria-required="true"
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      className="btn btn-primary w-full"
                      disabled={formStatus.loading}
                    >
                      {formStatus.loading ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : "Send Message"}
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
                You can book a session by filling out the contact form or sending an email. I'll get back to you within 24 hours to arrange a suitable time.
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
