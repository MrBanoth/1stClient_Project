import { useState, useEffect } from 'react';
import { Play, Filter, X } from 'lucide-react';
import { useInView } from '../hooks/useInView';

type ProjectCategory = 'All' | 'Film' | 'Action' | 'Digital';

interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  thumbnail: string;
  videoUrl: string;
  description: string;
  year: string;
  role: string;
}

const Portfolio = () => {
  const { ref, inView } = useInView();
  const [visible, setVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState<'showreel' | 'projects'>('showreel');
  const [projectFilter, setProjectFilter] = useState<ProjectCategory>('All');
  const [showFilters, setShowFilters] = useState(false);
  const [showShowreelModal, setShowShowreelModal] = useState(false);

  useEffect(() => {
    if (inView) {
      setVisible(true);
    }
  }, [inView]);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Ram Charan & Buchi Babu Film',
      category: 'Film',
      thumbnail: 'https://i.ibb.co/Jk3RLSM/phani-madireddy.jpg',
      videoUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID',
      description: 'Featured role in upcoming film with Ram Charan, directed by Buchi Babu.',
      year: '2024',
      role: 'Actor',
    },
    {
      id: 2,
      title: 'Hanuman Fight Scene Recreation',
      category: 'Action',
      thumbnail: 'https://i.ibb.co/Jk3RLSM/phani-madireddy.jpg',
      videoUrl: 'https://www.youtube.com/embed/YOUR_HANUMAN_VIDEO_ID',
      description: 'A 25-minute recreation of the climactic fight sequence from Hanuman.',
      year: '2023',
      role: 'Lead Actor',
    },
    {
      id: 3,
      title: 'Pushpa Forest Fight Recreation',
      category: 'Action',
      thumbnail: 'https://i.ibb.co/Jk3RLSM/phani-madireddy.jpg',
      videoUrl: 'https://www.youtube.com/embed/YOUR_PUSHPA_VIDEO_ID',
      description: 'Detailed recreation of the intense forest fight sequence from Pushpa: The Rise.',
      year: '2023',
      role: 'Lead Actor',
    },
    {
      id: 4,
      title: 'Peddi',
      category: 'Film',
      thumbnail: 'https://i.ibb.co/Jk3RLSM/phani-madireddy.jpg',
      videoUrl: 'https://www.youtube.com/embed/YOUR_PEDDI_VIDEO_ID',
      description: 'Student role in the feature film Peddi.',
      year: '2023',
      role: 'Actor',
    }
  ];

  const filteredProjects = projectFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === projectFilter);

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <section id="portfolio" ref={ref} className="section-padding bg-gray-900">
      <div className="container-custom max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
        <h2 className={`section-title text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold mb-8 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Portfolio
        </h2>
        
        {/* Portfolio Navigation */}
        <div className={`mb-10 transition-all duration-1000 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-wrap gap-4 max-w-3xl">
            <button 
              className={`px-5 py-2.5 rounded-lg text-base font-medium transition-all duration-300 ${activeTab === 'showreel' ? 'bg-amber-500 text-gray-900' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
              onClick={() => setActiveTab('showreel')}
            >
              Showreel
            </button>
            <button 
              className={`px-5 py-2.5 rounded-lg text-base font-medium transition-all duration-300 ${activeTab === 'projects' ? 'bg-amber-500 text-gray-900' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
              onClick={() => setActiveTab('projects')}
            >
              Projects
            </button>
            
            {activeTab === 'projects' && (
              <button 
                className="ml-auto flex items-center px-5 py-2.5 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 transition-all duration-300 text-base font-medium"
                onClick={toggleFilters}
              >
                <Filter size={18} className="mr-2" />
                Filter
              </button>
            )}
          </div>
          
          {/* Filters */}
          {showFilters && (
            <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-xl max-w-3xl">
              <div className="flex flex-wrap gap-2">
                {(['All', 'Film', 'Action'] as ProjectCategory[]).map((category) => (
                  <button
                    key={category}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 ${projectFilter === category ? 'bg-amber-500 text-gray-900' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
                    onClick={() => setProjectFilter(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {/* Showreel */}
        {activeTab === 'showreel' && (
          <div className={`transition-all duration-1000 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="aspect-video w-full max-w-[1600px] mx-auto rounded-xl overflow-hidden bg-gray-800 shadow-2xl flex items-center justify-center cursor-pointer group"
              onClick={() => setShowShowreelModal(true)}
              title="Play Showreel">
              {/* Showreel Thumbnail with YouTube Logo Overlay */}
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src="https://i.ytimg.com/vi/_gmp_eFDxQM/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBhucjucbGrreexH5anI6-HmYdCQg"
                  alt="Showreel Thumbnail"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 67 60"
                  fill="none"
                  focusable="false"
                  aria-hidden="true"
                  className="relative z-10 w-16 h-16 md:w-20 md:h-20 drop-shadow-lg"
                >
                  <path d="M63 14.87a7.885 7.885 0 00-5.56-5.56C52.54 8 32.88 8 32.88 8S13.23 8 8.32 9.31c-2.7.72-4.83 2.85-5.56 5.56C1.45 19.77 1.45 30 1.45 30s0 10.23 1.31 15.13c.72 2.7 2.85 4.83 5.56 5.56C13.23 52 32.88 52 32.88 52s19.66 0 24.56-1.31c2.7-.72 4.83-2.85 5.56-5.56C64.31 40.23 64.31 30 64.31 30s0-10.23-1.31-15.13z" fill="#ef4444"/>
                  <path fill="#FFF" className="logo-arrow" d="M26.6 39.43L42.93 30 26.6 20.57z"/>
                </svg>
              </div>
            </div>
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-start">
              {/* Instagram Card */}
              <div className="bg-gray-800 p-6 md:p-8 rounded-2xl shadow-2xl border border-gray-700 flex flex-col w-full max-w-xl mx-auto transition-all duration-300 group hover:shadow-[0_0_32px_4px_rgba(139,92,246,0.4)] hover:border-pink-400">
                <h3 className="text-xl font-bold mb-4">Latest Instagram Reels</h3>
                <div className="aspect-[9/16] w-full overflow-hidden" style={{maxHeight: '400px'}}>
                  <iframe
                    src="https://www.instagram.com/aryamadireddy/embed"
                    className="w-full h-full rounded-lg border-0 md:max-h-[500px] max-h-[400px]"
                    frameBorder="0"
                    scrolling="no"
                    allowTransparency
                    title="Instagram Feed"
                    style={{minHeight: 0, height: '100%'}}
                  ></iframe>
                </div>
              </div>
              {/* YouTube Card */}
              <div className="bg-gray-800 p-6 md:p-8 rounded-2xl shadow-2xl border border-gray-700 flex flex-col transition-all duration-300 group w-full max-w-xl mx-auto hover:shadow-[0_0_32px_4px_rgba(251,191,36,0.4)] hover:border-amber-400 hover:scale-105 animate-pulse border-2">
                <h3 className="text-xl font-bold mb-4">YouTube Channel</h3>
                <a
                  href="https://www.youtube.com/@Phanimadireddycreator/videos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block aspect-video w-full overflow-hidden group"
                  title="Visit YouTube Channel"
                >
                  <img
                    src="/images/image.png"
                    alt="YouTube Channel Preview"
                    className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                  />
                </a>
              </div>
            </div>
          </div>
        )}
        
        {/* Projects */}
        {activeTab === 'projects' && (
          <div className={`transition-all duration-1000 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 max-w-[1920px] mx-auto">
              {filteredProjects.map((project, index) => (
                <div 
                  key={project.id}
                  className="group bg-gray-800 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/20 hover:-translate-y-2"
                  onClick={() => openProjectModal(project)}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={project.thumbnail} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-90"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-amber-500/90 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                        <Play className="text-gray-900 w-8 h-8" />
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-700 text-amber-400">
                        {project.category}
                      </span>
                      <span className="text-xs text-gray-400">{project.year}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-1.5 text-white group-hover:text-amber-400 transition-colors duration-300">{project.title}</h3>
                    <p className="text-sm text-gray-400">{project.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* Showreel Modal */}
      {showShowreelModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/95 backdrop-blur-sm">
          <div className="max-w-3xl w-full bg-gray-800 rounded-xl overflow-hidden shadow-2xl relative">
            <button 
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-900/80 flex items-center justify-center z-10 text-white hover:bg-amber-500 hover:text-gray-900 transition-all duration-300"
              onClick={() => setShowShowreelModal(false)}
            >
              <X size={20} />
            </button>
            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/_gmp_eFDxQM?autoplay=1"
                title="Phani Madireddy Showreel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
      
      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/95 backdrop-blur-sm">
          <div className="max-w-[1600px] w-full bg-gray-800 rounded-xl overflow-hidden shadow-2xl">
            <div className="relative">
              <button 
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-900/80 flex items-center justify-center z-10 text-white hover:bg-amber-500 hover:text-gray-900 transition-all duration-300"
                onClick={closeProjectModal}
              >
                <X size={20} />
              </button>
              
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full"
                  src={selectedProject.videoUrl}
                  title={selectedProject.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1.5">{selectedProject.title}</h3>
                  <p className="text-base text-gray-400">{selectedProject.role}</p>
                </div>
                <span className="text-sm font-medium px-3 py-1.5 rounded-full bg-gray-700 text-amber-400">
                  {selectedProject.category}
                </span>
              </div>
              <p className="text-base text-gray-300 leading-relaxed">{selectedProject.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;