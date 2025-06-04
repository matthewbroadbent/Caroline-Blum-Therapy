import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
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
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ ...formStatus, loading: true });
    
    try {
      // Option 1: Email client approach (fallback)
      // Construct email body
      const emailBody = `
        Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.phone}
        Preferred Contact Method: ${formData.preferredContact}
        Message: ${formData.message}
      `;
      
      // Create mailto link
      const mailtoLink = `mailto:caroline@carolineblum.co.uk?subject=Therapy Consultation Request from ${formData.name}&body=${encodeURIComponent(emailBody)}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      // Set form as submitted
      setFormStatus({
        submitted: true,
        error: false,
        loading: false,
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
      });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
      {formStatus.submitted ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center py-8"
        >
          <div className="bg-primary-100 rounded-full p-3 w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          <h3 className="text-2xl font-serif font-bold text-secondary-900 mb-2">Thank You!</h3>
          <p className="text-secondary-600 mb-6">
            Your consultation request has been sent. Caroline will get back to you soon.
          </p>
          <button
            onClick={() => setFormStatus({ submitted: false, error: false, loading: false })}
            className="btn btn-secondary"
          >
            Send Another Message
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h3 className="text-2xl font-serif font-bold text-secondary-900 mb-6">Book a Consultation</h3>
          
          {formStatus.error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-md">
              There was an error sending your message. Please try again or contact Caroline directly via email.
            </div>
          )}
          
          <div className="mb-4">
            <label htmlFor="name" className="block text-secondary-700 mb-2">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-secondary-300 rounded-md focus:ring-2 focus:ring-primary-300 focus:border-primary-500 transition-colors"
              placeholder="Your name"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-secondary-700 mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-secondary-300 rounded-md focus:ring-2 focus:ring-primary-300 focus:border-primary-500 transition-colors"
              placeholder="your.email@example.com"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="phone" className="block text-secondary-700 mb-2">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-secondary-300 rounded-md focus:ring-2 focus:ring-primary-300 focus:border-primary-500 transition-colors"
              placeholder="Your phone number (optional)"
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
            <label htmlFor="message" className="block text-secondary-700 mb-2">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-4 py-2 border border-secondary-300 rounded-md focus:ring-2 focus:ring-primary-300 focus:border-primary-500 transition-colors"
              placeholder="Please share a bit about what brings you to therapy..."
            ></textarea>
          </div>
          
          <div className="text-center">
            <button 
              type="submit" 
              className="btn btn-primary w-full md:w-auto"
              disabled={formStatus.loading}
            >
              {formStatus.loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : "Send Consultation Request"}
            </button>
          </div>
          
          <p className="text-secondary-500 text-sm mt-4 text-center">
            Your information is kept confidential in accordance with BACP ethical guidelines.
          </p>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
