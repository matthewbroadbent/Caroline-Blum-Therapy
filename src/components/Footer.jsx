import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-800 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Therapy Benefits</h3>
            <p className="mb-4 text-secondary-300">
              Caroline Elliott BA (Hons), PG Adv Dip, MBACP, a qualified Integrative Therapist, working as an adult counsellor and psychotherapist.
            </p>
            <div className="flex space-x-4 mt-4">
              <img src="https://i.ibb.co/J6s5h1F/BACPRegistered.png" alt="BACP Registered member" className="h-12 bg-white p-1 rounded" />
              <img src="https://i.ibb.co/LGhMKTP/ProfStds.png" alt="Professional Standards" className="h-12 bg-white p-1 rounded" />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-secondary-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-secondary-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-secondary-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-secondary-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FiMail className="mt-1 mr-3 text-primary-400" />
                <a href="mailto:caro.m.blum@hotmail.co.uk" className="text-secondary-300 hover:text-white transition-colors">
                  caro.m.blum@hotmail.co.uk
                </a>
              </li>
              <li className="flex items-start">
                <FiPhone className="mt-1 mr-3 text-primary-400" />
                <span className="text-secondary-300">Please email for contact details</span>
              </li>
              <li className="flex items-start">
                <FiMapPin className="mt-1 mr-3 text-primary-400" />
                <span className="text-secondary-300">Session location details provided upon booking</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-700 mt-8 pt-8 text-center text-secondary-400">
          <p>&copy; {currentYear} Therapy Benefits. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Caroline Blum BA (Hons), PG Adv Dip, MBACP - Registered Member of the British Association for Counselling and Psychotherapy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
