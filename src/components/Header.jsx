import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-serif font-bold text-primary-600">
            Caroline Blum
          </Link>

          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <NavLink 
                  to="/" 
                  className={({ isActive }) => 
                    `text-secondary-800 hover:text-primary-600 transition-colors ${
                      isActive ? 'font-medium text-primary-600' : ''
                    }`
                  }
                  end
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/about" 
                  className={({ isActive }) => 
                    `text-secondary-800 hover:text-primary-600 transition-colors ${
                      isActive ? 'font-medium text-primary-600' : ''
                    }`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/services" 
                  className={({ isActive }) => 
                    `text-secondary-800 hover:text-primary-600 transition-colors ${
                      isActive ? 'font-medium text-primary-600' : ''
                    }`
                  }
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/contact" 
                  className={({ isActive }) => 
                    `text-secondary-800 hover:text-primary-600 transition-colors ${
                      isActive ? 'font-medium text-primary-600' : ''
                    }`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="hidden md:block">
            <Link to="/contact" className="btn btn-primary">
              Book a Consultation
            </Link>
          </div>

          <button 
            className="md:hidden text-secondary-800 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-secondary-100 mt-3"
          >
            <div className="container py-4">
              <nav>
                <ul className="space-y-4">
                  <li>
                    <NavLink 
                      to="/" 
                      className={({ isActive }) => 
                        `block py-2 text-secondary-800 hover:text-primary-600 transition-colors ${
                          isActive ? 'font-medium text-primary-600' : ''
                        }`
                      }
                      end
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink 
                      to="/about" 
                      className={({ isActive }) => 
                        `block py-2 text-secondary-800 hover:text-primary-600 transition-colors ${
                          isActive ? 'font-medium text-primary-600' : ''
                        }`
                      }
                    >
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink 
                      to="/services" 
                      className={({ isActive }) => 
                        `block py-2 text-secondary-800 hover:text-primary-600 transition-colors ${
                          isActive ? 'font-medium text-primary-600' : ''
                        }`
                      }
                    >
                      Services
                    </NavLink>
                  </li>
                  <li>
                    <NavLink 
                      to="/contact" 
                      className={({ isActive }) => 
                        `block py-2 text-secondary-800 hover:text-primary-600 transition-colors ${
                          isActive ? 'font-medium text-primary-600' : ''
                        }`
                      }
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </nav>
              <div className="mt-6">
                <Link to="/contact" className="btn btn-primary w-full">
                  Book a Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
