'use client'

import React, { useState } from 'react';
import { FaEnvelope, FaInstagram, FaGithub, FaLinkedin, FaArrowUp } from 'react-icons/fa';
import AnimatedContent from '../AnimatedContent/AnimatedContent';

interface SocialLink {
  name: string;
  icon: React.ReactNode;
  url: string;
  color: string;
}

export default function Footer() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const socialLinks: SocialLink[] = [
    {
      name: 'Email',
      icon: <FaEnvelope size={24} />,
      url: 'mailto:vigrahanarahari@gmail.com',
      color: '#C7EA46'
    },
    {
      name: 'Instagram',
      icon: <FaInstagram size={24} />,
      url: 'https://instagram.com/narahari.vp',
      color: '#E1306C'
    },
    {
      name: 'GitHub',
      icon: <FaGithub size={24} />,
      url: 'https://github.com/Naraharivp',
      color: '#6e5494'
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative py-16 bg-[#121826] border-t border-[#333]">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C7EA46] to-transparent opacity-30"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <AnimatedContent
            distance={100}
            direction="horizontal"
            reverse={true}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1}
            threshold={0.2}
          >
            <div>
              <h3 className="text-2xl font-bold text-[#FAFAFA] font-mono mb-6">Contact Me</h3>
              <p className="text-[#AAAAAA] font-mono mb-6 max-w-md">
                Feel free to reach out for collaborations, opportunities, or just to say hello! I'll try my best to get back to you as soon as possible.
              </p>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center gap-2 px-4 py-2 bg-[#222222] rounded-lg transition-all duration-300 hover:bg-[#2A2A2A]"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <span 
                      className="transition-colors duration-300"
                      style={{ color: hoveredIndex === index ? link.color : '#FAFAFA' }}
                    >
                      {link.icon}
                    </span>
                    <span className="text-[#FAFAFA] font-mono">{link.name}</span>
                    <span 
                      className="absolute bottom-0 left-0 h-[2px] transition-all duration-300 ease-in-out"
                      style={{ 
                        width: hoveredIndex === index ? '100%' : '0%',
                        backgroundColor: link.color
                      }}
                    ></span>
                  </a>
                ))}
              </div>
            </div>
          </AnimatedContent>

          <AnimatedContent
            distance={100}
            direction="horizontal"
            reverse={false}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1}
            threshold={0.2}
          >
            <div>
              <h3 className="text-2xl font-bold text-[#FAFAFA] font-mono mb-6">Let's Connect</h3>
              <p className="text-[#AAAAAA] font-mono mb-6 max-w-md">
                I'm always interested in new projects and opportunities. Whether you have a question or just want to say hi, I'll do my best to get back to you!
              </p>
              <div className="relative group w-fit">
                <button 
                  onClick={scrollToTop}
                  className="group flex items-center gap-2 px-6 py-3 bg-transparent text-[#FAFAFA] font-medium rounded-lg transition-all duration-500 hover:text-[#1E3A5F] font-mono border-2 border-[#C7EA46] shadow-lg shadow-[#C7EA46]/30 overflow-hidden relative"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <FaArrowUp className="text-lg group-hover:text-[#1E3A5F] transition-colors duration-500" />
                    <span>Back to Top</span>
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-0 bg-[#C7EA46] transition-all duration-500 ease-in-out group-hover:h-full -z-0"></span>
                </button>
              </div>
            </div>
          </AnimatedContent>
        </div>
        
        <div className="border-t border-[#333] pt-8 text-center">
          <p className="text-[#AAAAAA] font-mono">
            &#169; {new Date().getFullYear()} Narahari Vigraha Prasada. All rights reserved.
          </p>
          <p className="text-[#777] font-mono mt-2 text-sm">
            Designed & Built with ❤️ using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
