import { useState, useEffect } from 'react';
import { useInView } from '../hooks/useInView';

const About = () => {
  const { ref, inView } = useInView();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setVisible(true);
    }
  }, [inView]);

  return (
    <section id="about" ref={ref} className="section-padding bg-gray-900">
      <div className="container-custom max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
        <h2 className={`section-title transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          About Me
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 delay-300 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="relative">
              <img 
                src="public/images/red.png" 
                alt="Phani Madireddy" 
                className="rounded-lg shadow-2xl w-full object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-amber-500 text-gray-900 py-2 px-4 rounded-lg shadow-xl font-medium">
                Featured in Ram Charan & Buchi Babu Film
              </div>
            </div>
          </div>
          
          <div className={`transition-all duration-1000 delay-500 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <h3 className="text-2xl font-bold mb-4">Passion for Storytelling</h3>
            <p className="text-gray-300 mb-4">
              As a 24-year-old actor from Razole, East Godavari, Andhra Pradesh, I bring a fresh perspective to the world of cinema. With a background in Computer Science (B.Sc.), I combine my technical knowledge with creative storytelling.
            </p>
            <p className="text-gray-300 mb-4">
              My journey in acting has led me to notable projects including a student role in 'Peddi' and participation in a Ram Charan & Buchi Babu film. I've also gained recognition for my recreation of the Hanuman movie's climactic 25-minute fight sequence and the forest fight scene from 'Pushpa: The Rise'.
            </p>
            <p className="text-gray-300 mb-6">
              Standing at 5'8" with a natural screen presence, I've built a strong following through my Instagram reels, where I showcase my versatility as an actor. My interests extend beyond acting to direction and editing, making me a well-rounded artist in the film industry.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="text-amber-500 font-bold mb-2">Physical Stats</h4>
                <p className="text-sm text-gray-300">Height: 5'8" | Weight: 65kg</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="text-amber-500 font-bold mb-2">Languages</h4>
                <p className="text-sm text-gray-300">Telugu (Native)</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="text-amber-500 font-bold mb-2">Location</h4>
                <p className="text-sm text-gray-300">Razole, East Godavari, AP</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="text-amber-500 font-bold mb-2">Education</h4>
                <p className="text-sm text-gray-300">B.Sc. Computer Science</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;