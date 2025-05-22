import { useState, useEffect } from 'react';
import { Menu, X, Youtube, Instagram } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container-custom max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
        <div className="flex justify-between items-center h-20">
          <a href="#home" className="text-2xl font-bold text-amber-500 hover:text-white transition-colors duration-300">
            Pani.M
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="hidden md:flex space-x-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-amber-500 transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <div className="flex space-x-3">
              <a href="https://www.youtube.com/@phanimadireddycreator" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Youtube size={18} />
              </a>
              <a href="https://www.instagram.com/aryamadireddy" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden group focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            type="button"
          >
            <div className="relative w-9 h-9 flex items-center justify-center">
              <div className="relative w-8 h-8 flex items-center justify-center">
                {/* Top bar */}
                <span
                  className={`absolute left-0 w-8 h-1 rounded-full bg-amber-500 shadow-md transition-all duration-500 ease-in-out
                    ${isOpen ? 'rotate-45 top-4 scale-110' : 'top-2'}
                    group-hover:bg-amber-400 group-active:shadow-amber-300`}
                ></span>
                {/* Middle bar */}
                <span
                  className={`absolute left-0 w-8 h-1 rounded-full bg-amber-500 shadow-md transition-all duration-500 ease-in-out
                    ${isOpen ? 'opacity-0 scale-75' : 'top-4 opacity-100'}
                    group-hover:bg-amber-400 group-active:shadow-amber-300`}
                ></span>
                {/* Bottom bar */}
                <span
                  className={`absolute left-0 w-8 h-1 rounded-full bg-amber-500 shadow-md transition-all duration-500 ease-in-out
                    ${isOpen ? '-rotate-45 top-4 scale-110' : 'top-6'}
                    group-hover:bg-amber-400 group-active:shadow-amber-300`}
                ></span>
              </div>
              {/* Soft glow on open */}
              <div className={`absolute inset-0 rounded-full pointer-events-none transition-all duration-500 ease-in-out
                ${isOpen ? 'bg-amber-400/20 scale-110 blur-sm' : 'bg-transparent scale-0'}`}
              ></div>
            </div>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-md shadow-lg transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
          <div className="container-custom flex flex-col space-y-4 py-4">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-amber-500 transition-colors duration-300 py-2 transform hover:translate-x-2"
                onClick={toggleMenu}
              >
                {link.name}
              </a>
            ))}
            
            <div className="flex space-x-3 py-2">
              <a href="https://www.youtube.com/@phanimadireddycreator" target="_blank" rel="noopener noreferrer" className="social-icon hover:scale-110 transition-transform duration-300">
                <Youtube size={18} />
              </a>
              <a href="https://www.instagram.com/aryamadireddy" target="_blank" rel="noopener noreferrer" className="social-icon hover:scale-110 transition-transform duration-300">
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;