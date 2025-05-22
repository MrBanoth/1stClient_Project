import { useEffect, useState } from 'react';
import { ArrowRight, Youtube, Instagram } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: 'url("/images/black1.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
      </div>
      
      <div className="container-custom max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 relative z-10">
        <div className="backdrop-blur-lg bg-black/30 rounded-2xl shadow-2xl p-4 sm:p-8 md:p-12 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <img
              src="https://yt3.googleusercontent.com/-o1wAHm9HpfFzqL_A_khxHIQFJLhmKS9rZLBJlqCP5T89FEhLHHpVeaDwwitLwjSpmkNi0cr=s160-c-k-c0x00ffffff-no-rj"
              alt="Pani.M Profile"
              className="w-32 h-32 md:w-44 md:h-44 rounded-full object-cover border-4 border-amber-500 shadow-xl transition-transform duration-300 hover:scale-105 bg-gray-800"
            />
          </div>
          {/* Hero Text Content */}
          <div className="max-w-3xl">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Phani Madireddy
                <span className="block text-amber-500 mt-2 text-xl md:text-2xl font-normal">
                  Actor | Creator | Storyteller
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                Bringing characters to life through passion, dedication, and authentic storytelling.
                From action sequences to dramatic performances, I transform stories into memorable experiences.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#portfolio" className="btn btn-primary">
                  View My Work
                  <ArrowRight className="ml-2" size={18} />
                </a>
                
                <a href="#contact" className="btn btn-secondary">
                  Contact Me
                </a>
              </div>
              
              <div className="mt-12 flex items-center space-x-6 animate-fade-in">
                <a 
                  href="https://www.youtube.com/@phanimadireddycreator" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center"
                >
                  <span className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Youtube size={20} />
                  </span>
                  <span className="ml-2 text-gray-300 group-hover:text-red-600 transition-colors duration-300">YouTube</span>
                </a>
                
                <a 
                  href="https://www.instagram.com/aryamadireddy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center"
                >
                  <span className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 to-amber-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Instagram size={20} />
                  </span>
                  <span className="ml-2 text-gray-300 group-hover:text-amber-500 transition-colors duration-300">Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-sm text-gray-400 mb-2">Scroll Down</span>
        <div className="w-5 h-10 rounded-full border-2 border-gray-400 flex justify-center p-1">
          <div className="w-1 h-2 bg-amber-500 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;