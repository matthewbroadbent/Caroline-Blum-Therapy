import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import TestimonialsSection from '../components/TestimonialsSection';
import CtaSection from '../components/CtaSection';

const AboutPage = () => {
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
              About Caroline Blum
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-secondary-600"
            >
              Qualified Integrative Therapist, Counsellor and Psychotherapist
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-100 rounded-full z-0"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent-100 rounded-full z-0"></div>
                <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://i.ibb.co/DgbPvybV/Caroline-Blum.png" 
                    alt="Caroline Blum, Professional therapist" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-4 justify-center">
                <img src="https://i.ibb.co/J6s5h1F/BACPRegistered.png" alt="BACP Registered member" className="h-16" />
                <img src="https://i.ibb.co/LGhMKTP/ProfStds.png" alt="Professional Standards" className="h-16" />
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-serif font-bold text-secondary-900 mb-6">
                My Approach to Therapy
              </h2>
              <p className="text-secondary-700 mb-4">
                I'm pretty direct, and the therapy I offer is pretty direct. When creating my practice, I deliberately avoided the "touchy-feely" approach with trickling streams that seems so common. Instead, I focus on providing robust, practical support that gets results.
              </p>
              <p className="text-secondary-700 mb-4">
                As a qualified Integrative Therapist (BA (Hons), PG Adv Dip, MBACP), I specialise in helping clients with self-esteem issues, bereavement, and the unique pressures associated with being a carer. My experience extends to supporting individuals dealing with anxiety, depression, relationship issues, and confidence concerns.
              </p>
              <p className="text-secondary-700 mb-6">
                I've also had quite a bit of therapy myself—both as part of my training and to help with some of life's trials. I know what it feels like to sit in the client chair, and I know what therapy approach worked for me. That's what I try to offer my clients: effective support without endless repetition of "hmmm... so how does that make you feel?"
              </p>
              <div className="bg-primary-50 p-6 rounded-lg border border-primary-100 mb-6">
                <h3 className="text-xl font-serif font-bold text-secondary-900 mb-3">
                  My Qualifications
                </h3>
                <ul className="space-y-2 text-secondary-700">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600 mr-2 mt-1">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    BA (Hons) - Bachelor of Arts with Honours
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600 mr-2 mt-1">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    PG Adv Dip - Postgraduate Advanced Diploma
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600 mr-2 mt-1">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    MBACP - Registered Member of the British Association for Counselling and Psychotherapy
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600 mr-2 mt-1">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Continuing Professional Development
                  </li>
                </ul>
              </div>
              <Link to="/contact" className="btn btn-primary">
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary-900 mb-4">
              My Therapeutic Approach
            </h2>
            <p className="text-secondary-600 text-lg">
              What makes my therapy style different
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-100">
              <div className="bg-primary-50 p-3 rounded-full w-fit mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold text-secondary-900 mb-2">
                Direct & Practical
              </h3>
              <p className="text-secondary-600">
                I believe in being straightforward. My approach creates a supportive but honest space where we can address your challenges directly, without endless circling around issues or vague platitudes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-100">
              <div className="bg-primary-50 p-3 rounded-full w-fit mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 16v-4"></path>
                  <path d="M12 8h.01"></path>
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold text-secondary-900 mb-2">
                Integrative
              </h3>
              <p className="text-secondary-600">
                I draw from various therapeutic approaches, tailoring my methods to what actually works for you. This isn't a one-size-fits-all approach—it's about finding effective strategies for your specific situation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-100">
              <div className="bg-primary-50 p-3 rounded-full w-fit mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold text-secondary-900 mb-2">
                Results-Focused
              </h3>
              <p className="text-secondary-600">
                I'm interested in what works. My approach has attracted clients who appreciate directness—particularly men and intellectually-minded women who want practical strategies rather than endless exploration of feelings.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <CtaSection />
    </>
  );
};

export default AboutPage;
