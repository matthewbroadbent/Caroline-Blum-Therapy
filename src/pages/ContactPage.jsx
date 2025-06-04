import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import { FiMail, FiClock } from 'react-icons/fi';

const ContactPage = () => {
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
              Take the first step towards positive change
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-serif font-bold text-secondary-900 mb-6">
                Book a Consultation
              </h2>
              <p className="text-secondary-700 mb-8">
                I understand that reaching out for therapy can feel like a big step. I'm here to make the process as comfortable as possible. Fill out the form to request a consultation, and I'll get back to you promptly to discuss how I can support you.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-primary-50 p-3 rounded-full mr-4">
                    <FiMail className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-secondary-900 mb-1">
                      Email
                    </h3>
                    <p className="text-secondary-700">
                      <a href="mailto:caro.m.blum@hotmail.co.uk" className="text-primary-600 hover:text-primary-700 transition-colors">
                        caro.m.blum@hotmail.co.uk
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-50 p-3 rounded-full mr-4">
                    <FiClock className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-secondary-900 mb-1">
                      Session Information
                    </h3>
                    <p className="text-secondary-700 mb-1">
                      Individual Sessions: £45 for 50 minutes
                    </p>
                    <p className="text-secondary-700 mb-1">
                      Couples Sessions: £50 for 50 minutes
                    </p>
                    <p className="text-secondary-700">
                      Some concessions available
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-secondary-50 p-6 rounded-lg border border-secondary-100">
                <h3 className="text-xl font-serif font-bold text-secondary-900 mb-4">
                  What to Expect
                </h3>
                <ul className="space-y-3 text-secondary-700">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600 mr-2 mt-1">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    I'll respond to your inquiry within 24-48 hours
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600 mr-2 mt-1">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    We'll arrange an initial consultation to discuss your needs
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600 mr-2 mt-1">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    All communications are confidential and secure
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600 mr-2 mt-1">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    No obligation to continue after initial consultation
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary-900 mb-4">
              Professional Accreditations
            </h2>
            <p className="text-secondary-600 text-lg">
              Caroline is a fully qualified and registered therapist
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 items-center">
            <div className="text-center">
              <img src="https://i.ibb.co/J6s5h1F/BACPRegistered.png" alt="BACP Registered member" className="h-24 mx-auto mb-4" />
              <p className="text-secondary-700 font-medium">BACP Registered Member</p>
            </div>
            <div className="text-center">
              <img src="https://i.ibb.co/LGhMKTP/ProfStds.png" alt="Professional Standards" className="h-24 mx-auto mb-4" />
              <p className="text-secondary-700 font-medium">Professional Standards</p>
            </div>
          </div>

          <div className="max-w-2xl mx-auto mt-12 bg-white p-6 rounded-lg border border-secondary-100 text-center">
            <p className="text-secondary-700">
              As a registered member of the British Association for Counselling and Psychotherapy (BACP), Caroline adheres to their ethical framework and professional standards. This ensures you receive therapy that is ethical, confidential, and of the highest professional quality.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
