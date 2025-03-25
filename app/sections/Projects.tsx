import React from 'react';
import FadeContent from '../components/FadeContent/FadeContent';
import { FaGithub } from 'react-icons/fa';
import AnimatedContent from '../components/AnimatedContent/AnimatedContent';

export default function Projects() {
  const projects = [
    {
      title: "ClipperCuts",
      description: "A barbershop booking website that allows customers to browse services, view barber profiles, and book appointments seamlessly. Admins can manage bookings, barbers, services, and business settings through an intuitive dashboard.",
      technologies: ["Next.js", "Tailwind CSS"],
      image: "/clippercuts.png",
      link: "https://clippercuts.vercel.app/",
      github: "https://github.com/Naraharivp/clippercuts"
    },
    {
      title: "E-Presensi",
      description: "A web-mobile employee attendance system integrating face recognition and GPS for secure and accurate check-ins, featuring authentication, attendance history recap, leave requests, and profile management.",
      technologies: ["Laravel", "MySQL", "Python"],
      image: "/presensigps.jpeg",
      link: "https://github.com/Naraharivp/presensigps",
      github: "https://github.com/Naraharivp/presensigps"
    },
    {
      title: "Gym Landing Page",
      description: "A sleek and modern landing page for a gym, featuring a bold design, clear navigation, and a compelling call to action. Optimized for responsiveness and user engagement. ",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "/landingPage.jpeg",
      link: "https://rygym.netlify.app/",
      github: "https://github.com/Naraharivp/gym.github.io.git"
    },
    {
      title: "MyAnime-ku",
      description: "a simple website assignment that we are given the task of applying an api to the website and I chose to make this anime list using a free api from Jikan.Moe",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "/animeku.png",
      link: "https://myanime-ku.netlify.app/",
      github: "https://github.com/Naraharivp/MyAnime-ku"
    }
  ];

  return (
    <section 
      id="projects" 
      className="min-h-screen py-8 md:py-16"
      style={{ scrollMarginTop: '80px' }}
    >
      <div className="container mx-auto px-4">
      <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={false}
          config={{ tension: 80, friction: 20 }}
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#FAFAFA] font-mono mb-4 md:mb-8 text-center">Projects</h2>
          <p className="text-sm md:text-base text-[#FAFAFA] text-center mb-8 md:mb-12 font-mono max-w-2xl mx-auto">
            A showcase of my recent work, featuring web applications and design projects
          </p>
        </AnimatedContent>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <FadeContent key={index} duration={800} delay={index * 200} easing="ease-out" initialOpacity={0}>
              <div className="bg-[#222222] rounded-lg overflow-hidden border border-[#333] hover:border-[#C7EA46] transition-all duration-300 hover:transform hover:scale-[1.02]">
                <div className="relative pt-[56.25%]">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="absolute top-0 left-0 w-full h-full object-contain bg-[#1A1A1A] transition-transform duration-500 hover:scale-105 p-2"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-xl md:text-2xl font-bold text-[#FAFAFA] font-mono mb-2">{project.title}</h3>
                  <p className="text-sm md:text-base text-[#AAAAAA] font-mono mb-3 md:mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1 md:gap-2 mb-3 md:mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 md:px-3 py-1 bg-[#222222] text-[#C7EA46] rounded-full text-xs md:text-sm font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <div className="relative group w-full sm:w-fit">
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="w-full sm:w-auto group flex items-center justify-center sm:justify-start gap-2 px-4 md:px-6 py-2 md:py-3 bg-transparent text-[#FAFAFA] font-medium rounded-lg transition-all duration-500 hover:text-[#1E3A5F] font-mono border-2 border-[#C7EA46] shadow-lg shadow-[#C7EA46]/30 overflow-hidden relative"
                      >
                        <span className="relative z-10 flex items-center gap-2 md:gap-3">
                          <span>View Project</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 group-hover:text-[#1E3A5F] transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </span>
                        <span className="absolute bottom-0 left-0 w-full h-0 bg-[#C7EA46] transition-all duration-500 ease-in-out group-hover:h-full -z-0"></span>
                      </a>
                    </div>
                    <div className="relative group w-full sm:w-fit">
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="w-full sm:w-auto group flex items-center justify-center sm:justify-start gap-2 px-4 md:px-6 py-2 md:py-3 bg-transparent text-[#FAFAFA] font-medium rounded-lg transition-all duration-500 hover:text-[#1E3A5F] font-mono border-2 border-[#C7EA46] shadow-lg shadow-[#C7EA46]/30 overflow-hidden relative"
                      >
                        <span className="relative z-10 flex items-center gap-2 md:gap-3">
                          <FaGithub className="text-lg md:text-xl group-hover:text-[#1E3A5F] transition-colors duration-500" />
                          <span>Source Code</span>
                        </span>
                        <span className="absolute bottom-0 left-0 w-full h-0 bg-[#C7EA46] transition-all duration-500 ease-in-out group-hover:h-full -z-0"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </FadeContent>
          ))}
        </div>
      </div>
    </section>
  );
}
