import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const testimonials = [
  {
    id: 1,
    quote: "I have now found myself again. I was lost when I first went to counselling.",
    author: "Anonymous Client",
  },
  {
    id: 2,
    quote: "I felt fortunate to have Caroline for my sessions who I would say was one of the best I've met.",
    author: "Anonymous Client",
  },
  {
    id: 3,
    quote: "I was able to talk through episodes in the whole of my life including difficult episodes in my marriage.",
    author: "Anonymous Client",
  },
  {
    id: 4,
    quote: "Caroline was just right for me, she helped me so much as I was in a terrible, unhappy, state of mind.",
    author: "Anonymous Client",
  },
  {
    id: 5,
    quote: "It was a chance to spend time with an outsider, to be free to 'open up' about personal issues ....to offload without being judged.",
    author: "Anonymous Client",
  },
  {
    id: 6,
    quote: "I was impressed how she remembered the contents of our sessions without the assistance of written notes - hence I was more relaxed.",
    author: "Anonymous Client",
  },
  {
    id: 7,
    quote: "Caroline was reasonably tough with me, which is what I needed.",
    author: "Anonymous Client",
  },
  {
    id: 8,
    quote: "I have found few people, including therapists, who have been able to offer help in the way that Caroline did. It was one of the very few spaces where I have felt truly able to express what I've experienced without feeling judged. She was able to offer help at a time when I desperately needed it.",
    author: "Anonymous Client",
  },
  {
    id: 9,
    quote: "My life and thoughts felt like they were unravelable chaos when I first started seeing Caroline, and she brought order and insights which now, a few months on, I find myself continuing to use to understand and calm myself.",
    author: "Anonymous Client",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={ref} className="section bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-serif font-bold text-secondary-900 mb-4"
          >
            Client Experiences
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-secondary-600 text-lg"
          >
            Read what others have to say about their therapy journey with Caroline
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10">
            <button
              onClick={prevTestimonial}
              className="bg-white rounded-full p-2 shadow-md text-secondary-600 hover:text-primary-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-300"
              aria-label="Previous testimonial"
            >
              <FiChevronLeft size={24} />
            </button>
          </div>

          <div className="overflow-hidden py-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-primary-50 rounded-xl p-8 md:p-12 shadow-sm border border-primary-100"
              >
                <div className="mb-6">
                  <svg width="45" height="36" className="text-primary-300" viewBox="0 0 45 36" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5 36C9.9 36 6.9 34.65 4.5 31.95C2.1 29.25 0.9 25.95 0.9 22.05C0.9 17.85 2.175 13.875 4.725 10.125C7.275 6.375 10.8 3.3 15.3 0.9L18.9 5.85C15 7.95 12.15 10.2 10.35 12.6C8.55 15 7.8 17.4 8.1 19.8C8.7 19.5 9.45 19.35 10.35 19.35C12.15 19.35 13.65 20.025 14.85 21.375C16.05 22.725 16.65 24.45 16.65 26.55C16.65 29.25 15.9 31.35 14.4 32.85C12.9 34.95 11.1 36 13.5 36ZM37.8 36C34.2 36 31.2 34.65 28.8 31.95C26.4 29.25 25.2 25.95 25.2 22.05C25.2 17.85 26.475 13.875 29.025 10.125C31.575 6.375 35.1 3.3 39.6 0.9L43.2 5.85C39.3 7.95 36.45 10.2 34.65 12.6C32.85 15 32.1 17.4 32.4 19.8C33 19.5 33.75 19.35 34.65 19.35C36.45 19.35 37.95 20.025 39.15 21.375C40.35 22.725 40.95 24.45 40.95 26.55C40.95 29.25 40.2 31.35 38.7 32.85C37.2 34.95 35.4 36 37.8 36Z" />
                  </svg>
                </div>
                <p className="text-xl md:text-2xl text-secondary-800 font-serif mb-8 leading-relaxed">
                  {testimonials[currentIndex].quote}
                </p>
                <div className="flex items-center">
                  <div className="bg-primary-100 rounded-full p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-700">
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-secondary-800">{testimonials[currentIndex].author}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-4 md:translate-x-12 z-10">
            <button
              onClick={nextTestimonial}
              className="bg-white rounded-full p-2 shadow-md text-secondary-600 hover:text-primary-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-300"
              aria-label="Next testimonial"
            >
              <FiChevronRight size={24} />
            </button>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary-600' : 'bg-primary-200'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
