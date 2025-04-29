import React, { useState } from 'react';
import FadeContent from '../components/FadeContent/FadeContent';
import { FaFigma, FaReact, FaNodeJs, FaDatabase, FaGithub, FaHtml5, FaPython, FaLaravel } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiExpress, SiMongodb, SiCss3, SiMysql, SiDart, SiKotlin } from 'react-icons/si';
import AnimatedContent from '../components/AnimatedContent/AnimatedContent';

type Skill = {
  name: string;
  description: string;
  bgColor: string;
  textColor: string;
  icon: React.ReactNode;
};

type SkillCategories = {
  frontend: Skill[];
  backend: Skill[];
  design: Skill[];
  mobile: Skill[];
  tools: Skill[];
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<'frontend' | 'backend' | 'design' | 'mobile' | 'tools'>('frontend');
  
  const skillCategories: SkillCategories = {
    frontend: [
      { 
        name: "HTML", 
        description: "Markup Language",
        bgColor: "#E34F26",
        textColor: "#FFFFFF",
        icon: <FaHtml5 size={30} color="#FFFFFF" />
      },
      { 
        name: "CSS", 
        description: "Styling & Layout",
        bgColor: "#1572B6",
        textColor: "#FFFFFF",
        icon: <SiCss3 size={30} color="#FFFFFF" />
      },
      { 
        name: "JavaScript", 
        description: "Client-side Scripting",
        bgColor: "#F7DF1E",
        textColor: "#000000",
        icon: <SiJavascript size={30} color="#000000" />
      },
      { 
        name: "React", 
        description: "UI Library",
        bgColor: "#61DAFB",
        textColor: "#000000",
        icon: <FaReact size={30} color="#000000" />
      },
      { 
        name: "TailwindCSS", 
        description: "Utility-first CSS",
        bgColor: "#06B6D4",
        textColor: "#FFFFFF",
        icon: <SiTailwindcss size={30} color="#FFFFFF" />
      }
    ],
    backend: [
      { 
        name: "NodeJS", 
        description: "JavaScript Runtime",
        bgColor: "#339933",
        textColor: "#FFFFFF",
        icon: <FaNodeJs size={30} color="#FFFFFF" />
      },
      { 
        name: "ExpressJS", 
        description: "Web Framework",
        bgColor: "#000000",
        textColor: "#FFFFFF",
        icon: <SiExpress size={30} color="#FFFFFF" />
      },
      { 
        name: "Laravel", 
        description: "PHP Framework",
        bgColor: "#FF2D20",
        textColor: "#FFFFFF",
        icon: <FaLaravel size={30} color="#FFFFFF" />
      },
      { 
        name: "Python", 
        description: "Server-side Language",
        bgColor: "#3776AB",
        textColor: "#FFFFFF",
        icon: <FaPython size={30} color="#FFFFFF" />
      },
      { 
        name: "MongoDB", 
        description: "NoSQL Database",
        bgColor: "#47A248",
        textColor: "#FFFFFF",
        icon: <SiMongodb size={30} color="#FFFFFF" />
      },
      { 
        name: "MySQL", 
        description: "Relational Database",
        bgColor: "#4479A1",
        textColor: "#FFFFFF",
        icon: <SiMysql size={30} color="#FFFFFF" />
      }
    ],
    design: [
      { 
        name: "Figma", 
        description: "UI/UX Design Platform",
        bgColor: "#1E1E1E",
        textColor: "#F24E1E",
        icon: <FaFigma size={30} color="#F24E1E" />
      }
    ],
    mobile: [
      { 
        name: "Dart", 
        description: "Flutter Development",
        bgColor: "#0175C2",
        textColor: "#FFFFFF",
        icon: <SiDart size={30} color="#FFFFFF" />
      },
      { 
        name: "Kotlin", 
        description: "Native Android",
        bgColor: "#7F52FF",
        textColor: "#FFFFFF",
        icon: <SiKotlin size={30} color="#FFFFFF" />
      }
    ],
    tools: [
      { 
        name: "GitHub", 
        description: "Version Control",
        bgColor: "#181717",
        textColor: "#FFFFFF",
        icon: <FaGithub size={30} color="#FFFFFF" />
      }
    ]
  };

  // Fungsi responsive untuk ukuran ikon
  const getIconSize = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 640 ? 24 : 30;
    }
    return 30;
  };

  return (
    <section 
      id="skills" 
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#FAFAFA] font-mono mb-4 md:mb-6 text-center">Skills</h2>
          <p className="text-sm md:text-base text-[#FAFAFA] text-center mb-8 md:mb-12 font-mono max-w-3xl mx-auto">
            Comprehensive suite of technical proficiencies across full-stack development, UI/UX design, and mobile application development, demonstrating adaptability and commitment to industry best practices.
          </p>
        </AnimatedContent>
        
        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center items-center mb-8 md:mb-12 gap-2 md:gap-4">
          <button 
            onClick={() => setActiveCategory('frontend')}
            className={`px-3 py-2 md:px-5 md:py-3 rounded-lg font-mono text-sm md:text-base transition-all duration-300 ${
              activeCategory === 'frontend' 
                ? 'bg-[#C7EA46] text-black font-medium' 
                : 'bg-[#333] text-[#FAFAFA] hover:bg-[#444]'
            }`}
          >
            Front-end
          </button>
          <button 
            onClick={() => setActiveCategory('backend')}
            className={`px-3 py-2 md:px-5 md:py-3 rounded-lg font-mono text-sm md:text-base transition-all duration-300 ${
              activeCategory === 'backend' 
                ? 'bg-[#C7EA46] text-black font-medium' 
                : 'bg-[#333] text-[#FAFAFA] hover:bg-[#444]'
            }`}
          >
            Back-end
          </button>
          <button 
            onClick={() => setActiveCategory('design')}
            className={`px-3 py-2 md:px-5 md:py-3 rounded-lg font-mono text-sm md:text-base transition-all duration-300 ${
              activeCategory === 'design' 
                ? 'bg-[#C7EA46] text-black font-medium' 
                : 'bg-[#333] text-[#FAFAFA] hover:bg-[#444]'
            }`}
          >
            Design
          </button>
          <button 
            onClick={() => setActiveCategory('mobile')}
            className={`px-3 py-2 md:px-5 md:py-3 rounded-lg font-mono text-sm md:text-base transition-all duration-300 ${
              activeCategory === 'mobile' 
                ? 'bg-[#C7EA46] text-black font-medium' 
                : 'bg-[#333] text-[#FAFAFA] hover:bg-[#444]'
            }`}
          >
            Mobile
          </button>
          <button 
            onClick={() => setActiveCategory('tools')}
            className={`px-3 py-2 md:px-5 md:py-3 rounded-lg font-mono text-sm md:text-base transition-all duration-300 ${
              activeCategory === 'tools' 
                ? 'bg-[#C7EA46] text-black font-medium' 
                : 'bg-[#333] text-[#FAFAFA] hover:bg-[#444]'
            }`}
          >
            Tools
          </button>
        </div>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
          {skillCategories[activeCategory].map((skill: Skill, index: number) => (
            <FadeContent key={index} duration={800} delay={index * 100} easing="ease-out" initialOpacity={0}>
              <div className="bg-[#222222] p-3 sm:p-4 md:p-6 rounded-lg border-2 border-[#333] hover:border-[#C7EA46] transition-all duration-300 hover:transform hover:scale-[1.05] flex flex-col items-center">
                <div 
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-2 md:mb-4"
                  style={{ backgroundColor: skill.bgColor || '#222222' }}
                >
                  {skill.icon}
                </div>
                <h4 className="text-lg md:text-xl font-bold text-[#FAFAFA] font-mono mb-0.5 md:mb-1 text-center">{skill.name}</h4>
                <p className="text-xs md:text-sm text-[#999] font-mono text-center">{skill.description}</p>
              </div>
            </FadeContent>
          ))}
        </div>
      </div>
    </section>
  );
}
