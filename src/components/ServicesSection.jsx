import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      title: "What is Therapy?",
      description: "Therapy is a meeting or series of meetings between a therapist and client. The client talks about what is unsettling them, and the work helps to resolve these problematic issues.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 16v-4"></path>
          <path d="M12 8h.01"></path>
        </svg>
      ),
      image: "https://i.ibb.co/PvKLWzpn/brain-954816-1.jpg"
    },
    {
      title: "Feelings",
      description: "Therapy can be primarily listening, allowing the client to experience and vocalise what they are feeling. This outpouring of emotion is beneficial and can lead to constructive ongoing work.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
        </svg>
      ),
      image: "https://i.ibb.co/PsdKZmpt/flower-1025329-1920.jpg"
    },
    {
      title: "Liberating",
      description: "Through careful discussion, clients can discover things about themselves which allows them to have greater autonomy over their thoughts and actions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
          <path d="m9 12 2 2 4-4"></path>
        </svg>
      ),
      image: "https://i.ibb.co/j9t0b7zX/recycling-401397-1280.png"
    }
  ];

  return (
    <section ref={ref} className="section bg-secondary-50">
      <div className="container">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-serif font-bold text-secondary-900 mb-4"
          >
            Benefits of Therapy
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-secondary-600 max-w-2xl mx-auto"
          >
            The benefits that clients gain are many and varied - from short term relief to a longer term difference of perspective, attitude and behaviour.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm border border-secondary-100 flex flex-col"
            >
              <div className="bg-primary-50 p-3 rounded-full w-fit mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-serif font-bold text-secondary-900 mb-2">
                {service.title}
              </h3>
              <p className="text-secondary-600 mb-4 flex-grow">
                {service.description}
              </p>
              <div className="mt-4 rounded-lg overflow-hidden flex justify-center">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="max-h-48 w-auto object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/services" className="btn btn-primary">
              Explore All Services
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
