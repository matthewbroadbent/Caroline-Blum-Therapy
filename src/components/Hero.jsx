import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary-50 to-white overflow-hidden">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-secondary-900 leading-tight mb-4">
              Direct, Effective <span className="text-primary-600">Therapy</span>
            </h1>
            <p className="text-xl text-secondary-600 mb-8 max-w-lg">
              Professional counselling and psychotherapy with Caroline Blum. No nonsense, no trickling streams—just practical support to help you navigate life's challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn btn-primary">
                Book a Consultation
              </Link>
              <Link to="/services" className="btn btn-secondary">
                Explore Services
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap justify-start gap-2">
              <div className="bg-white px-4 py-2 rounded-full shadow-sm border border-secondary-100">
                <span className="text-primary-700 font-medium">Self-esteem</span>
              </div>
              <div className="bg-white px-4 py-2 rounded-full shadow-sm border border-secondary-100">
                <span className="text-primary-700 font-medium">Bereavement</span>
              </div>
              <div className="bg-white px-4 py-2 rounded-full shadow-sm border border-secondary-100">
                <span className="text-primary-700 font-medium">Carer Support</span>
              </div>
              <div className="bg-white px-4 py-2 rounded-full shadow-sm border border-secondary-100">
                <span className="text-primary-700 font-medium">Anxiety</span>
              </div>
              <div className="bg-white px-4 py-2 rounded-full shadow-sm border border-secondary-100">
                <span className="text-primary-700 font-medium">Depression</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg" 
                alt="Professional therapy session" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                  <p className="text-secondary-800 font-medium">
                    "I have now found myself again. I was lost when I first went to counselling."
                  </p>
                  <p className="text-secondary-500 mt-2 text-sm">— Client Testimonial</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-primary-50 p-4 rounded-lg shadow-lg border border-primary-100 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="bg-primary-100 rounded-full p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-700">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-primary-800 font-medium">BACP Registered</p>
                  <p className="text-primary-600 text-sm">Professional Standards</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-100 rounded-bl-full opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent-100 rounded-tr-full opacity-30"></div>
    </section>
  );
};

export default Hero;
