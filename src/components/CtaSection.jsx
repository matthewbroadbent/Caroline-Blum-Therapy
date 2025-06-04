import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CtaSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="section bg-primary-600 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500 rounded-full opacity-30 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-700 rounded-full opacity-30 transform -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-serif font-bold mb-6"
          >
            Ready to Begin Your Journey to Wellbeing?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto"
          >
            Take the first step towards positive change. Book a consultation with Caroline today and discover how therapy can help you navigate life's challenges with confidence.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-lg p-6 md:p-8 shadow-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-6">
              <div>
                <h3 className="text-secondary-900 font-serif font-bold text-xl mb-3">Individual Sessions</h3>
                <p className="text-secondary-600 mb-2">50 minutes - £45</p>
                <p className="text-secondary-500 text-sm">Focused one-to-one therapy tailored to your needs</p>
              </div>
              <div>
                <h3 className="text-secondary-900 font-serif font-bold text-xl mb-3">Couples Sessions</h3>
                <p className="text-secondary-600 mb-2">50 minutes - £50</p>
                <p className="text-secondary-500 text-sm">Supportive space to work through relationship challenges</p>
              </div>
            </div>
            <p className="text-secondary-600 mb-6 text-center">Some concessions available - please inquire during consultation</p>
            <div className="text-center">
              <Link to="/contact" className="btn btn-primary">
                Book Your Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
