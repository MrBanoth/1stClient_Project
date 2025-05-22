import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container-custom py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold text-amber-500">PHANI.M</a>
            <p className="text-gray-400 mt-2">Actor | Creator | Storyteller</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <button 
              onClick={scrollToTop}
              className="mb-4 w-12 h-12 rounded-full bg-gray-800 hover:bg-amber-500 text-white hover:text-gray-900 flex items-center justify-center transition-all duration-300"
            >
              <ArrowUp size={20} />
            </button>
            
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Phani Madireddy. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;