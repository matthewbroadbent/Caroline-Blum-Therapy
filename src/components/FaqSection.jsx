import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiPlus, FiMinus } from 'react-icons/fi';

const faqs = [
  {
    id: 1,
    question: "What can I expect in my first session?",
    answer: "Your first session is an opportunity for us to get to know each other. We'll discuss what brings you to therapy, your background, and what you hope to achieve. This initial consultation helps determine if we're a good fit and allows me to understand how I can best support you. It's also a chance for you to ask any questions about the therapy process."
  },
  {
    id: 2,
    question: "How long does therapy typically last?",
    answer: "The duration of therapy varies depending on your individual needs and goals. Some clients benefit from short-term therapy (6-12 sessions) focused on specific issues, while others prefer longer-term work for deeper exploration. We'll regularly review your progress and adjust our approach as needed. You're always in control of how long you wish to continue."
  },
  {
    id: 3,
    question: "Is everything I share confidential?",
    answer: "Confidentiality is a cornerstone of therapy. What you share remains private, with a few exceptions required by law: if there's risk of harm to yourself or others, or in cases involving child protection issues. As a BACP registered member, I follow their ethical framework which prioritizes client confidentiality and safety."
  },
  {
    id: 4,
    question: "What's your approach to therapy?",
    answer: "As an Integrative Therapist, I draw from various therapeutic approaches to tailor treatment to your unique needs. This may include elements of cognitive-behavioral therapy, person-centered therapy, psychodynamic approaches, and mindfulness techniques. My approach is collaborative, compassionate, and focused on helping you develop insights and practical strategies for positive change."
  },
  {
    id: 5,
    question: "How often will we meet?",
    answer: "Most clients attend weekly sessions, especially at the beginning of therapy. This consistency helps build momentum and establish a therapeutic relationship. As you progress, we might adjust to fortnightly sessions. We'll work together to determine a schedule that best supports your healing journey."
  },
  {
    id: 6,
    question: "Do you offer online sessions?",
    answer: "Yes, I offer both in-person and secure online therapy sessions. Online therapy provides flexibility and accessibility while maintaining the same quality of care. We can discuss which format would work best for your circumstances during our initial consultation."
  },
];

const FaqItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-secondary-200 last:border-0">
      <button
        className="flex justify-between items-center w-full py-5 text-left focus:outline-none"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium text-secondary-900">{question}</h3>
        <span className="ml-4 flex-shrink-0">
          {isOpen ? (
            <FiMinus className="text-primary-600" />
          ) : (
            <FiPlus className="text-secondary-500" />
          )}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="pb-5 text-secondary-600">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FaqSection = () => {
  const [openId, setOpenId] = useState(1);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section ref={ref} className="section bg-secondary-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-secondary-600 text-lg">
            Find answers to common questions about therapy and the counselling process
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm border border-secondary-100 divide-y divide-secondary-200"
        >
          {faqs.map((faq) => (
            <FaqItem
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
              isOpen={openId === faq.id}
              onClick={() => toggleFaq(faq.id)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
