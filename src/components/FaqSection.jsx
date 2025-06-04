import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FaqSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is the difference between counselling and psychotherapy?",
      answer: "While there's overlap between counselling and psychotherapy, counselling typically focuses on specific issues and is often shorter-term. Psychotherapy tends to explore deeper patterns and may continue longer. I'm qualified to provide both, adapting my approach to your specific needs."
    },
    {
      question: "How long does therapy usually last?",
      answer: "The duration varies greatly depending on your needs. Some clients benefit from just a few sessions to work through a specific issue, while others prefer longer-term support. We'll regularly review progress together and decide on the best path forward."
    },
    {
      question: "Is therapy right for me if I'm not in crisis?",
      answer: "Absolutely. Therapy isn't just for crisis situations. Many clients use therapy for personal growth, better self-understanding, improving relationships, or preparing for future challenges. It can be valuable at any stage of life."
    },
    {
      question: "What happens in our first session?",
      answer: "The first session is about getting to know each other. I'll ask about what brings you to therapy, your background, and what you hope to achieve. You can ask questions about my approach and we'll discuss practical matters like scheduling. There's no pressure to share more than you're comfortable with."
    },
    {
      question: "How does your approach to therapy work?",
      answer: "I believe that we are a product of our histories. Through therapy, we can explore aspects of your life that may have created coping mechanisms which once served you well but are no longer helpful. My approach is direct and practical, focusing on what works for you rather than a one-size-fits-all method."
    }
  ];

  return (
    <section ref={ref} className="section bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-serif font-bold text-secondary-900 mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-secondary-600 max-w-2xl mx-auto"
          >
            Common questions about therapy and my approach
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => toggleFaq(index)}
                className={`w-full text-left p-6 rounded-lg flex justify-between items-center transition-all ${
                  openIndex === index 
                    ? 'bg-primary-50 shadow-sm border border-primary-100' 
                    : 'bg-secondary-50 hover:bg-primary-50/50 border border-secondary-100'
                }`}
              >
                <span className="font-serif font-bold text-lg text-secondary-900">{faq.question}</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className={`text-primary-600 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-4 text-secondary-700">
                  {faq.answer}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
