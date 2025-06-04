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

      <section id="how-therapy-works" className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-100 rounded-full z-0"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent-100 rounded-full z-0"></div>
                <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Two people in a therapy session, discussing openly" 
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-md z-20">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary-100 rounded-full p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-700">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-secondary-800 font-medium">Trusting Relationship</p>
                      <p className="text-secondary-600 text-sm">The foundation of effective therapy</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary-900 mb-6">
                How Does Therapy Work?
              </h2>
              <p className="text-secondary-700 italic mb-6">
                Difficult, but not impossible, to answer
              </p>
              <p className="text-secondary-700 mb-4">
                Each therapist will have their own approach and own working style. At the heart of my practice is a trusting relationship between client and therapist. Once this is established I tailor my approach for each individual client. The intention is that the trust between us, and my tailored approach, will enable clients to feel secure and safe enough to allow themselves to be honest with me. And by being honest with me, they are being honest with themselves. This honesty is a key catalyst for change.
              </p>
              <div className="mt-8">
                <Link to="#integrative-therapy" className="btn btn-primary">
                  Learn About My Integrative Approach
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="integrative-therapy" className="py-16 md:py-24 bg-accent-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary-900 mb-6">
              Integrative Therapy
            </h2>
            <p className="text-lg text-secondary-600">
              A personalized approach tailored to your unique needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-md border border-secondary-100">
              <div className="bg-accent-100 p-3 rounded-full w-fit mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-700">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-bold text-secondary-900 mb-4">
                Tailored to You
              </h3>
              <p className="text-secondary-700">
                I practice Integrative Therapy - which means that I draw on various therapeutic models with clients. We are all individuals, hence my desire to tailor sessions to each client's needs and circumstance. My practice is to be gentle, to be firm, to be quiet, to question; the work between us is a joint undertaking, to enable you to make discoveries about yourself which can give you the ability to make changes to your thoughts, feelings and actions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border border-secondary-100">
              <div className="bg-accent-100 p-3 rounded-full w-fit mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-700">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-bold text-secondary-900 mb-4">
                Self-Understanding
              </h3>
              <p className="text-secondary-700">
                I believe that a better understanding of ourselves, our emotions and our triggers, is both liberating and empowering. Therapy can help you know yourself properly.
              </p>
              <div className="mt-6 rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3760810/pexels-photo-3760810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Person reflecting, representing self-understanding" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-md border border-secondary-100">
              <div className="bg-accent-100 p-3 rounded-full w-fit mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-700">
                  <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"></path>
                  <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-bold text-secondary-900 mb-4">
                Rewarding Journey
              </h3>
              <p className="text-secondary-700 mb-6">
                The point about therapy is for the client to make their own discoveries. My analogy is that the client and I are in a dark room, and through gentle questioning we discover where the doors are. But it is up to you, the client, whether you metaphorically open these doors. It can be challenging, but also very rewarding.
              </p>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Open door with light, representing discovery in therapy" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border border-secondary-100">
              <div className="bg-accent-100 p-3 rounded-full w-fit mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-700">
                  <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04Z"></path>
                  <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04Z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-bold text-secondary-900 mb-4">
                Personal Insights
              </h3>
              <p className="text-secondary-700">
                So, I am not sure that I have answered the question 'How does therapy work?' - for each person it is different and comparisons are difficult to make. Some clients have 'light bulb' moments of realisation, whilst others gain quiet insight.
              </p>
              <div className="mt-6 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-100/50 to-accent-100/50 rounded-lg"></div>
                <div className="relative p-6 text-center">
                  <div className="inline-block bg-white p-3 rounded-full mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600">
                      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04Z"></path>
                      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04Z"></path>
                    </svg>
                  </div>
                  <p className="text-secondary-800 font-medium text-lg">
                    "Light bulb moments or quiet insight—each person's therapeutic journey is unique."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="who-is-therapy-for" className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary-900 mb-6">
                Who is Therapy For?
              </h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  Therapy is for all of us, at any time, not just in times of crisis.
                </p>
                <p>
                  In our fast moving world, where everything needs an explanation, we seem to believe that we need a reason to have therapy. This was not the case for the ancient Greeks, who valued the health of the mind as much as the health of the body. Thales of Miletus spoke of 'peace of mind'. Peace of mind comes from understanding ourselves.
                </p>
                <p className="font-medium text-secondary-800">
                  So therapy is for anyone who would like peace of mind through a greater understanding of themselves.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/contact" className="btn btn-primary">
                  Begin Your Journey
                </Link>
                <Link to="#do-i-need-therapy" className="btn btn-outline">
                  Do I Need Therapy?
                </Link>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent-100 rounded-full z-0"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary-100 rounded-full z-0"></div>
                <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://i.ibb.co/5xh0Y6sN/thales-of-miletus.jpg" 
                    alt="Thales of Miletus, ancient Greek philosopher" 
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
                      <p className="text-secondary-800 font-medium">Ancient Wisdom</p>
                      <p className="text-secondary-600 text-sm">Thales of Miletus on 'peace of mind'</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="do-i-need-therapy" className="py-16 md:py-24 bg-primary-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary-900 mb-6">
              Do I Need Therapy?
            </h2>
            <p className="text-lg text-secondary-600">
              I've posed this question because it shows society's attitude to therapy—that one has to <em>need</em> therapy to have it. For some, the answer is a definite yes*, particularly if you're finding life impossible to manage.
            </p>
            <p className="text-lg text-secondary-600 mt-4">
              However, my philosophy is that therapy can be beneficial to all of us at any time. So perhaps the real question is: <strong>Why do we feel we must need therapy, in order to have it?</strong>
            </p>
            <p className="text-lg text-secondary-600 mt-4">
              We buy a new pair of shoes without needing them. However, spending money on psychological well-being is still difficult to do.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <div className="relative mb-12">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-100 rounded-full z-0 opacity-70"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-200 rounded-full z-0 opacity-70"></div>
              <div className="relative z-10 bg-white p-8 rounded-xl shadow-md border border-secondary-100">
                <p className="text-lg text-secondary-700 italic">
                  The following questions, and my responses to them, may help you decide whether to have therapy, and if I am the right therapist for you. And if I am, do get in touch.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md border border-secondary-100">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-primary-100 p-3 rounded-full w-fit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-700">
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-secondary-900">
                    Are you unhappy?
                  </h3>
                </div>
                <p className="text-secondary-700">
                  Does unhappiness sit on your shoulders like a dull black cloud? Unhappiness is natural at times, but when it is persistent or makes it difficult for you to function, therapy can help.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md border border-secondary-100">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-primary-100 p-3 rounded-full w-fit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-700">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-secondary-900">
                    Are you anxious?
                  </h3>
                </div>
                <p className="text-secondary-700">
                  Anxiety and stress can motivate us, but too much can be very uncomfortable and debilitating. Perhaps you have had a crisis—a relationship breakup, a bereavement, redundancy, or perhaps anxiety has become so much part of your life, that it is difficult to know the cause. Therapy provides the space to process events, to look into ourselves and to discover our own in-built ability to make life manageable again.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md border border-secondary-100">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-primary-100 p-3 rounded-full w-fit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-700">
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-secondary-900">
                    Do your responsibilities feel too much?
                  </h3>
                </div>
                <p className="text-secondary-700">
                  Are your daily responsibilities feeling too heavy? Perhaps you have a stressful job, or find parenting difficult, or are having to cope with caring for a loved one. And perhaps your self esteem is taking a battering. Friends are well-meaning but they cannot help but see things from their perspective. Therapy offers you the neutral space to allow you to discover your real feelings about your life, to consider how you can make changes, so that you find the path right for you and to find your inner qualities.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md border border-secondary-100">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-primary-100 p-3 rounded-full w-fit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-700">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 16v-4"></path>
                      <path d="M12 8h.01"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-secondary-900">
                    Are you struggling with perfectionism?
                  </h3>
                </div>
                <p className="text-secondary-700">
                  Perfectionism is woven into the fabric of our society, but why? What does being perfect mean, and who is meant to achieve it? And perhaps most importantly, can we manage with not being perfect? Therapy can challenge society's expectations and our responses to them, so that you can work out what is best for you.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-white p-6 rounded-lg border border-primary-200 text-secondary-700">
              <p className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600 mr-3 mt-1 flex-shrink-0">
                  <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                  <line x1="12" y1="9" x2="12" y2="13"></line>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
                <span>
                  <strong>*Please note:</strong> Therapy should not replace medication, unless on the advice of a GP. If in extreme distress, it would be wise to take more immediate action by calling the emergency services and seeing a medical professional.
                </span>
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link to="/contact" className="btn btn-primary">
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      <section id="understanding-therapy" className="py-16 md:py-24 bg-secondary-50">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary-900 mb-6 text-center">
              Understanding Therapy
            </h2>
            <div className="prose prose-lg max-w-none">
              <p>
                Therapy, whether counselling or psychotherapy, is a meeting or series of meetings between a therapist and client, or clients. The client talks about what is unsettling them, and the work between the therapist and client helps to resolve these problematic issues. Often clients are in some sort of distress, with the brain feeling jumbled and conflicted. The benefits that clients gain are many and varied - from short term relief to a longer term difference of perspective, attitude and behaviour.
              </p>
              <div className="my-8 rounded-xl overflow-hidden shadow-lg flex justify-center">
                <img 
                  src="https://i.ibb.co/PvKLWzpn/brain-954816-1.jpg" 
                  alt="Representation of the human brain" 
                  className="max-h-64 w-auto object-contain"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-secondary-100">
              <div className="bg-primary-50 p-3 rounded-full w-fit mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-bold text-secondary-900 mb-4">
                Feelings
              </h3>
              <p className="text-secondary-700 mb-6">
                Therapy can be primarily listening, just allowing the client to experience and vocalise what they are feeling. This could be to let out anger or frustration, to question aspects of life, or perhaps just to 'let go'. Whilst the outpouring of emotion is beneficial in itself, it can also lead into constructive ongoing therapeutic work.
              </p>
              <div className="rounded-lg overflow-hidden flex justify-center">
                <img 
                  src="https://i.ibb.co/PsdKZmpt/flower-1025329-1920.jpg" 
                  alt="Serene flower representing emotional growth" 
                  className="max-h-56 w-auto object-contain"
                />
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-secondary-100">
              <div className="bg-primary-50 p-3 rounded-full w-fit mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-bold text-secondary-900 mb-4">
                Liberating
              </h3>
              <p className="text-secondary-700 mb-6">
                Therapy can be liberating. Through careful discussion, clients can discover things about themselves which allows them to have greater autonomy over their thoughts and actions.
              </p>
              <div className="rounded-lg overflow-hidden flex justify-center">
                <img 
                  src="https://i.ibb.co/j9t0b7zX/recycling-401397-1280.png" 
                  alt="Recycling symbol representing renewal and transformation" 
                  className="max-h-56 w-auto object-contain"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-secondary-100">
              <div className="bg-primary-50 p-3 rounded-full w-fit mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-bold text-secondary-900 mb-4">
                Challenging
              </h3>
              <p className="text-secondary-700">
                Therapy can be challenging and uncomfortable in the short term. Individuals get stuck in ruts whereby habits, thoughts and opinions can become ingrained. Through constructive therapy, a client may find better alternatives.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-secondary-100">
              <div className="bg-primary-50 p-3 rounded-full w-fit mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600">
                  <path d="M3 3v18h18"></path>
                  <path d="m19 9-5 5-4-4-3 3"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-bold text-secondary-900 mb-4">
                History
              </h3>
              <p className="text-secondary-700">
                I believe that we are a product of our histories. Clients are often loathe to delve into their earlier lives, thinking it irrelevant to current problems. However it is in our younger years we create coping mechanisms which may have served us well, but are no longer doing so. Therapy with me could explore aspects of your early life, if you are happy to do that.
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
