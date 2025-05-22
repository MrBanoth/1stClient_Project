import { useState, useEffect } from 'react';
import { Download, ChevronDown, ChevronUp } from 'lucide-react';
import { useInView } from '../hooks/useInView';

type EducationType = {
  id: number;
  degree: string;
  institution: string;
  year: string;
  description?: string;
};

type TrainingType = {
  id: number;
  course: string;
  institution: string;
  year: string;
  instructor?: string;
};

type ExperienceType = {
  id: number;
  project: string;
  role: string;
  director: string;
  year: string;
  production: string;
};

type SkillType = {
  id: number;
  category: string;
  skills: string[];
};

const Resume = () => {
  const { ref, inView } = useInView();
  const [visible, setVisible] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  useEffect(() => {
    if (inView) {
      setVisible(true);
    }
  }, [inView]);

  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  const education: EducationType[] = [
    {
      id: 1,
      degree: 'B.Sc. Computer Science',
      institution: 'College of Computer Science',
      year: '2023',
      description: 'Comprehensive education in computer science fundamentals and programming'
    }
  ];

  const experience: ExperienceType[] = [
    {
      id: 1,
      project: 'Ram Charan & Buchi Babu Film',
      role: 'Actor',
      director: 'Buchi Babu',
      year: '2024',
      production: 'Production House'
    },
    {
      id: 2,
      project: 'Peddi',
      role: 'Student Role',
      director: 'Director Name',
      year: '2023',
      production: 'Production House'
    },
    {
      id: 3,
      project: 'Hanuman Fight Scene Recreation',
      role: 'Lead Actor',
      director: 'Self-Directed',
      year: '2023',
      production: 'YouTube'
    },
    {
      id: 4,
      project: 'Pushpa: The Rise Forest Fight Recreation',
      role: 'Lead Actor',
      director: 'Self-Directed',
      year: '2023',
      production: 'YouTube'
    }
  ];

  const skills: SkillType[] = [
    {
      id: 1,
      category: 'Performance',
      skills: ['Action Sequences', 'Character Development', 'Scene Recreation', 'Emotional Range']
    },
    {
      id: 2,
      category: 'Technical',
      skills: ['Direction', 'Video Editing', 'Social Media Content Creation']
    },
    {
      id: 3,
      category: 'Physical Attributes',
      skills: ['Height: 5\'8"', 'Weight: 65kg', 'Shoe Size: 9', 'Fair Complexion']
    },
    {
      id: 4,
      category: 'Languages',
      skills: ['Telugu (Native)']
    }
  ];

  return (
    <section id="resume" ref={ref} className="section-padding bg-gray-800">
      <div className="container-custom max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h2 className={`section-title transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Resume
          </h2>
          
          <a 
            href="/phani-madireddy-resume.pdf" 
            download 
            className={`btn btn-primary mt-4 md:mt-0 transition-all duration-1000 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <Download size={18} className="mr-2" />
            Download Resume
          </a>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2">
            {/* Education */}
            <div className={`transition-all duration-1000 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div 
                className="bg-gray-900 rounded-lg p-5 mb-6 cursor-pointer hover:shadow-lg transition-all duration-300"
                onClick={() => toggleSection('education')}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-white">Education</h3>
                  {expandedSection === 'education' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
                
                <div className={`mt-4 space-y-4 overflow-hidden transition-all duration-500 ${
                  expandedSection === 'education' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  {education.map((edu) => (
                    <div key={edu.id} className="border-l-2 border-amber-500 pl-4">
                      <h4 className="text-lg font-semibold text-amber-500">{edu.degree}</h4>
                      <p className="text-gray-300">{edu.institution}</p>
                      <p className="text-sm text-gray-400">{edu.year}</p>
                      {edu.description && (
                        <p className="text-sm text-gray-400 mt-1">{edu.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Skills */}
            <div className={`transition-all duration-1000 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div 
                className="bg-gray-900 rounded-lg p-5 mb-6 cursor-pointer hover:shadow-lg transition-all duration-300"
                onClick={() => toggleSection('skills')}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-white">Skills & Attributes</h3>
                  {expandedSection === 'skills' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
                
                <div className={`mt-4 space-y-4 overflow-hidden transition-all duration-500 ${
                  expandedSection === 'skills' ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  {skills.map((skillSet) => (
                    <div key={skillSet.id} className="mb-4">
                      <h4 className="text-lg font-semibold text-amber-500 mb-2">{skillSet.category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {skillSet.skills.map((skill, index) => (
                          <span 
                            key={index} 
                            className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="lg:col-span-3">
            {/* Film/Media Experience */}
            <div className={`transition-all duration-1000 delay-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div 
                className="bg-gray-900 rounded-lg p-5 cursor-pointer hover:shadow-lg transition-all duration-300"
                onClick={() => toggleSection('experience')}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-white">Film & Media Experience</h3>
                  {expandedSection === 'experience' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
                
                <div className={`mt-4 overflow-hidden transition-all duration-500 ${
                  expandedSection === 'experience' ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <table className="w-full">
                    <thead className="text-left border-b border-gray-700">
                      <tr>
                        <th className="pb-2 text-amber-500">Project</th>
                        <th className="pb-2 text-amber-500">Role</th>
                        <th className="pb-2 text-amber-500 hidden md:table-cell">Director</th>
                        <th className="pb-2 text-amber-500 hidden md:table-cell">Production</th>
                        <th className="pb-2 text-amber-500">Year</th>
                      </tr>
                    </thead>
                    <tbody>
                      {experience.map((exp) => (
                        <tr key={exp.id} className="border-b border-gray-800 hover:bg-gray-800/50 transition-colors duration-300">
                          <td className="py-3 font-medium">{exp.project}</td>
                          <td className="py-3 text-gray-300">{exp.role}</td>
                          <td className="py-3 text-gray-400 hidden md:table-cell">{exp.director}</td>
                          <td className="py-3 text-gray-400 hidden md:table-cell">{exp.production}</td>
                          <td className="py-3 text-gray-400">{exp.year}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;