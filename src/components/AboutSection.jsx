import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="section bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary-900 mb-6">
              Meet Caroline Blum
            </h2>
            <p className="text-secondary-700 mb-4">
              I'm Caroline Blum BA (Hons), PG Adv Dip, MBACP, a qualified Integrative Therapist working as an adult counsellor and psychotherapist. I offer a direct, robust approach to therapy—no endless "how does that make you feel?" questions.
            </p>
            <p className="text-secondary-700 mb-4">
              As a BACP registered member, I follow their ethical framework and attend continuing professional education to ensure I provide the highest standard of care.
            </p>
            <p className="text-secondary-700 mb-6">
              I specialise in helping clients with self-esteem issues, bereavement, and the unique pressures associated with being a carer, though my expertise extends to anxiety, depression, relationship issues, and more. Having been a client myself, I understand what it's like to sit in that chair.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <img src="https://i.ibb.co/J6s5h1F/BACPRegistered.png" alt="BACP Registered member" className="h-16" />
              <img src="https://i.ibb.co/LGhMKTP/ProfStds.png" alt="Professional Standards" className="h-16" />
            </div>
            <Link to="/about" className="btn btn-primary">
              Learn More About Caroline
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
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
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-md z-20">
                <div className="flex items-center gap-3">
                  <div className="bg-primary-100 rounded-full p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-700">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-secondary-800 font-medium">Qualified Professional</p>
                    <p className="text-secondary-600 text-sm">BA (Hons), PG Adv Dip, MBACP</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
