import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CtaSection from '../components/CtaSection';

const ServicesPage = () => {
  return (
    <>
      <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Therapy background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-900/70 to-primary-800/80"></div>
        </div>
        
        {/* Content */}
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/20 backdrop-blur-sm text-white font-medium"
            >
              Professional Therapy Services
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6"
            >
              Therapy Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/90 mb-8"
            >
              Professional counselling and psychotherapy to help you navigate life's challenges and find your path to wellbeing
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link to="/contact" className="btn btn-white">
                Book Your First Session
              </Link>
            </motion.div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
        <div className="absolute -bottom-1 left-0 right-0 h-1 bg-white z-10"></div>
      </section>

      {/* Visual separator */}
      <div className="py-12 bg-white">
        <div className="container">
          <div className="flex justify-center items-center gap-8">
            <div className="hidden md:flex items-center gap-3 px-6 py-3 rounded-lg bg-primary-50">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
              </svg>
              <span className="text-primary-700 font-medium">Compassionate Care</span>
            </div>
            
            <div className="hidden md:flex items-center gap-3 px-6 py-3 rounded-lg bg-primary-50">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
              <span className="text-primary-700 font-medium">BACP Registered</span>
            </div>
            
            <div className="flex items-center gap-3 px-6 py-3 rounded-lg bg-primary-50">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600">
                <path d="M8 3v3a2 2 0 0 1-2 2H3"></path>
                <path d="M21 8h-3a2 2 0 0 1-2-2V3"></path>
                <path d="M3 16h3a2 2 0 0 1 2 2v3"></path>
                <path d="M16 21v-3a2 2 0 0 1 2-2h3"></path>
              </svg>
              <span className="text-primary-700 font-medium">Personalized Approach</span>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 md:py-24 bg-secondary-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary-900 mb-4">
              My Therapeutic Specialties
            </h2>
            <p className="text-secondary-600 text-lg">
              Areas where I can provide expert support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-100">
              <div className="bg-primary-50 p-3 rounded-full w-fit mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold text-secondary-900 mb-2">
                Self-Esteem Issues
              </h3>
              <p className="text-secondary-600">
                Building confidence and a stronger sense of self-worth through targeted therapeutic techniques and supportive dialogue.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-100">
              <div className="bg-primary-50 p-3 rounded-full w-fit mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold text-secondary-900 mb-2">
                Bereavement
              </h3>
              <p className="text-secondary-600">
                Compassionate support through the grief process, helping you navigate loss and find a path forward while honoring your feelings.
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
                Carer Support
              </h3>
              <p className="text-secondary-600">
                Specialized assistance for those in caregiving roles, addressing the unique emotional challenges and pressures of caring for others.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-100">
              <div className="bg-primary-50 p-3 rounded-full w-fit mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold text-secondary-900 mb-2">
                Anxiety
              </h3>
              <p className="text-secondary-600">
                Effective strategies to manage anxiety symptoms and address underlying causes, helping you regain control and peace of mind.
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
                Depression
              </h3>
              <p className="text-secondary-600">
                Supportive therapy to help navigate through depression, focusing on practical steps toward recovery and renewed engagement with life.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-100">
              <div className="bg-primary-50 p-3 rounded-full w-fit mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600">
                  <path d="M3 3v18h18"></path>
                  <path d="m19 9-5 5-4-4-3 3"></path>
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold text-secondary-900 mb-2">
                Relationship Issues
              </h3>
              <p className="text-secondary-600">
                Guidance through relationship challenges, improving communication patterns and understanding interpersonal dynamics.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary-900 mb-6">
              How I Can Help You
            </h2>
            <p className="text-lg text-secondary-600">
              I offer a range of therapeutic services tailored to your specific needs. My approach is direct, practical, and focused on achieving meaningful results.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 justify-center">
              <Link to="/about#understanding-therapy" className="text-primary-600 font-medium hover:text-primary-700 transition-colors flex items-center gap-2">
                Learn about therapy
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
              <Link to="/about#who-is-therapy-for" className="text-primary-600 font-medium hover:text-primary-700 transition-colors flex items-center gap-2">
                Who is therapy for?
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-100 rounded-full z-0"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent-100 rounded-full z-0"></div>
                <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Supportive therapy session" 
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-md z-20">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary-100 rounded-full p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-700">
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-secondary-800 font-medium">Personalized Support</p>
                      <p className="text-secondary-600 text-sm">Tailored to your unique needs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="space-y-6">
                <div className="bg-secondary-50 p-6 rounded-lg border border-secondary-100">
                  <h3 className="text-xl font-serif font-bold text-secondary-900 mb-3 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    Individual Therapy
                  </h3>
                  <p className="text-secondary-600">
                    One-on-one sessions focused on your personal challenges and growth. I provide a safe, confidential space where you can explore your thoughts and feelings without judgment.
                  </p>
                </div>
                
                <div className="bg-secondary-50 p-6 rounded-lg border border-secondary-100">
                  <h3 className="text-xl font-serif font-bold text-secondary-900 mb-3 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                    Online Sessions
                  </h3>
                  <p className="text-secondary-600">
                    Flexible therapy options via secure video conferencing, offering the same quality of care as in-person sessions but with the convenience of connecting from your preferred location.
                  </p>
                </div>
                
                <div className="bg-secondary-50 p-6 rounded-lg border border-secondary-100">
                  <h3 className="text-xl font-serif font-bold text-secondary-900 mb-3 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600">
                      <path d="M8 3v3a2 2 0 0 1-2 2H3"></path>
                      <path d="M21 8h-3a2 2 0 0 1-2-2V3"></path>
                      <path d="M3 16h3a2 2 0 0 1 2 2v3"></path>
                      <path d="M16 21v-3a2 2 0 0 1 2-2h3"></path>
                    </svg>
                    Short & Long-Term Support
                  </h3>
                  <p className="text-secondary-600">
                    Whether you need brief, solution-focused therapy for a specific issue or longer-term support for complex challenges, I offer flexible arrangements to suit your circumstances.
                  </p>
                </div>
              </div>
              
              <div className="mt-8">
                <Link to="/contact" className="btn btn-primary">
                  Schedule Your First Session
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-md border border-secondary-100">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-secondary-900 mb-6 text-center">
                My Therapy Process
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary-50 p-3 rounded-full w-fit mt-1">
                    <span className="text-primary-600 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-secondary-900 mb-2">
                      Initial Consultation
                    </h3>
                    <p className="text-secondary-700">
                      We'll discuss what brings you to therapy and what you hope to achieve. This helps me understand your needs and determine if we're a good fit to work together.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary-50 p-3 rounded-full w-fit mt-1">
                    <span className="text-primary-600 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-secondary-900 mb-2">
                      Tailored Approach
                    </h3>
                    <p className="text-secondary-700">
                      Based on your specific situation, I'll develop a therapeutic approach that addresses your unique needs, drawing from various evidence-based techniques.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary-50 p-3 rounded-full w-fit mt-1">
                    <span className="text-primary-600 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-secondary-900 mb-2">
                      Regular Sessions
                    </h3>
                    <p className="text-secondary-700">
                      We'll meet regularly to work through your challenges. I provide a safe, confidential space where you can express yourself freely without judgment.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary-50 p-3 rounded-full w-fit mt-1">
                    <span className="text-primary-600 font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-secondary-900 mb-2">
                      Progress Review
                    </h3>
                    <p className="text-secondary-700">
                      We'll regularly assess your progress and adjust our approach as needed. Therapy is a collaborative process, and your feedback is essential to ensure we're moving in the right direction.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <Link to="/contact" className="btn btn-primary">
                  Book Your Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-accent-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-secondary-600 text-lg">
              Common questions about therapy and my services
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-100">
                <h3 className="text-xl font-serif font-bold text-secondary-900 mb-3">
                  How long does each therapy session last?
                </h3>
                <p className="text-secondary-700">
                  Standard therapy sessions last 50 minutes. This timeframe allows us to dive deep into your concerns while maintaining focus and energy throughout our conversation.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-100">
                <h3 className="text-xl font-serif font-bold text-secondary-900 mb-3">
                  How many sessions will I need?
                </h3>
                <p className="text-secondary-700">
                  The number of sessions varies greatly depending on your specific situation and goals. Some clients benefit from short-term therapy (6-12 sessions), while others prefer ongoing support. We'll discuss your needs during our initial consultation and regularly review your progress.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-100">
                <h3 className="text-xl font-serif font-bold text-secondary-900 mb-3">
                  Is everything I share confidential?
                </h3>
                <p className="text-secondary-700">
                  Yes, confidentiality is a cornerstone of therapy. Everything you share remains private, with limited exceptions required by law (such as risk of harm to yourself or others). I'll explain these boundaries clearly during our first session.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-100">
                <h3 className="text-xl font-serif font-bold text-secondary-900 mb-3">
                  What if I need to cancel a session?
                </h3>
                <p className="text-secondary-700">
                  I understand that life can be unpredictable. I request at least 48 hours' notice for cancellations. Late cancellations or missed sessions may incur a fee, as that time has been reserved specifically for you.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-100">
                <h3 className="text-xl font-serif font-bold text-secondary-900 mb-3">
                  Do you offer online therapy?
                </h3>
                <p className="text-secondary-700">
                  Yes, I offer secure online therapy sessions via video conferencing. Online therapy provides the same quality of care as in-person sessions, with the added convenience of connecting from your preferred location.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
};

export default ServicesPage;
