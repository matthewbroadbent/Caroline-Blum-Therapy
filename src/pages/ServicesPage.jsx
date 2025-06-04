import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CtaSection from '../components/CtaSection';

const services = [
  {
    id: 1,
    title: 'Anxiety & Stress Management',
    description: "Anxiety and stress can be overwhelming, affecting your daily life, relationships, and wellbeing. I provide a direct, practical approach to explore the root causes of your anxiety and develop effective coping strategies. We'll work on techniques to manage worry, panic, and stress responses, helping you regain a sense of control—without endless analysis of your feelings.",
    image: 'https://images.pexels.com/photos/3807738/pexels-photo-3807738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <path d="M12 18v-6"></path>
        <path d="M8 18v-1"></path>
        <path d="M16 18v-3"></path>
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Depression Support',
    description: "Depression can leave you feeling isolated, hopeless, and disconnected from joy. I offer straightforward support to help you navigate through these difficult feelings. We'll explore the factors contributing to your depression and work on rebuilding meaning, connection, and hope in your life. My approach combines practical strategies with deeper emotional work—no trickling streams or endless 'how does that make you feel?' questions.",
    image: 'https://images.pexels.com/photos/3807755/pexels-photo-3807755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
        <path d="m9 12 2 2 4-4"></path>
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Bereavement & Loss Counselling',
    description: "Grief is a deeply personal experience that can be overwhelming and isolating. I provide a direct, honest space to process your grief and navigate the complex emotions that come with loss. Whether you're dealing with the death of a loved one, the end of a relationship, or other significant losses, I'll support you through your unique grief journey with compassion and practical guidance—not empty platitudes.",
    image: 'https://images.pexels.com/photos/7176305/pexels-photo-7176305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Self-Esteem & Confidence Building',
    description: "Low self-esteem can impact every aspect of your life, from relationships to career choices. I specialise in helping clients build a stronger sense of self-worth and develop confidence in their abilities. Together, we'll explore the roots of negative self-perception, challenge unhelpful beliefs, and develop a more robust relationship with yourself. My direct approach has proven particularly effective for clients seeking genuine change rather than just reassurance.",
    image: 'https://images.pexels.com/photos/7176325/pexels-photo-7176325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Carer Support',
    description: "Caring for others can be both rewarding and challenging, often leading to stress, burnout, and feelings of isolation. I offer specialised support for carers, providing a space to process your experiences, address compassion fatigue, and develop practical self-care strategies. My approach acknowledges the unique pressures you face and helps you maintain your own wellbeing while supporting others—with concrete strategies, not just sympathetic nods.",
    image: 'https://images.pexels.com/photos/7551617/pexels-photo-7551617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
  },
  {
    id: 6,
    title: 'Relationship Counselling',
    description: "Relationships are fundamental to our wellbeing, yet they can also be sources of conflict and distress. I work with individuals to explore relationship patterns, improve communication skills, and navigate conflicts. Whether you're dealing with family issues, friendship challenges, or romantic relationships, my direct approach can help you build healthier connections with others through practical strategies and honest conversations.",
    image: 'https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600">
        <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2"></path>
        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
        <circle cx="12" cy="10" r="2"></circle>
        <line x1="8" x2="8" y1="2" y2="4"></line>
        <line x1="16" x2="16" y1="2" y2="4"></line>
      </svg>
    ),
  },
];

const ServicesPage = () => {
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
              Therapy Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-secondary-600"
            >
              Direct, effective support for a range of emotional and psychological challenges
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-secondary-900 mb-6">
              How My Therapy Approach Works
            </h2>
            <p className="text-secondary-600 text-lg">
              I offer a direct, practical approach to therapy—no endless "how does that make you feel?" questions. I provide a confidential space where we can have honest conversations about your challenges and develop effective strategies to address them.
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative">
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-100 rounded-full z-0 opacity-70"></div>
                    <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent-100 rounded-full z-0 opacity-70"></div>
                    <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="bg-primary-50 p-3 rounded-full w-fit mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-secondary-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-secondary-700 mb-6">
                    {service.description}
                  </p>
                  <Link to="/contact" className="btn btn-primary">
                    Book a Consultation
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary-900 mb-4">
              Session Information
            </h2>
            <p className="text-secondary-600 text-lg">
              What to expect when working with me
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-100">
              <h3 className="text-xl font-serif font-bold text-secondary-900 mb-4">
                Individual Therapy
              </h3>
              <ul className="space-y-3 text-secondary-700 mb-6">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600 mr-2 mt-1">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  50-minute sessions
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600 mr-2 mt-1">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  £45 per session
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600 mr-2 mt-1">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Direct, practical approach
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600 mr-2 mt-1">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Flexible scheduling options
                </li>
              </ul>
              <Link to="/contact" className="btn btn-primary w-full">
                Book Individual Session
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-100">
              <h3 className="text-xl font-serif font-bold text-secondary-900 mb-4">
                Couples Therapy
              </h3>
              <ul className="space-y-3 text-secondary-700 mb-6">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600 mr-2 mt-1">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  50-minute sessions
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600 mr-2 mt-1">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  £50 per session
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600 mr-2 mt-1">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Focus on practical communication
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600 mr-2 mt-1">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Honest conversations in a safe space
                </li>
              </ul>
              <Link to="/contact" className="btn btn-primary w-full">
                Book Couples Session
              </Link>
            </div>
          </div>

          <div className="max-w-2xl mx-auto mt-8 bg-primary-50 p-6 rounded-lg border border-primary-100 text-center">
            <p className="text-secondary-700 font-medium">
              Some concessions are available for those experiencing financial hardship. Please enquire during your initial consultation.
            </p>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
};

export default ServicesPage;
