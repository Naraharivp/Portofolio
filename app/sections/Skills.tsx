import React from 'react';
import FadeContent from '../components/FadeContent/FadeContent';
import { FaFigma, FaReact, FaNodeJs, FaDatabase, FaGithub, FaHtml5, FaPython, FaLaravel } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiExpress, SiMongodb, SiCss3, SiMysql, SiDart, SiKotlin } from 'react-icons/si';
import AnimatedContent from '../components/AnimatedContent/AnimatedContent';

export default function Skills() {
  const skills = [
    { 
      name: "Figma", 
      description: "Design tool",
      bgColor: "#1E1E1E",
      textColor: "#F24E1E",
      icon: <FaFigma size={30} color="#F24E1E" />
    },
    { 
      name: "HTML", 
      description: "Markup Language",
      bgColor: "#E34F26",
      textColor: "#FFFFFF",
      icon: <FaHtml5 size={30} color="#FFFFFF" />
    },
    { 
      name: "CSS", 
      description: "User Interface",
      bgColor: "#1572B6",
      textColor: "#FFFFFF",
      icon: <SiCss3 size={30} color="#FFFFFF" />
    },
    { 
      name: "JavaScript", 
      description: "Interaction",
      bgColor: "#F7DF1E",
      textColor: "#000000",
      icon: <SiJavascript size={30} color="#000000" />
    },
    { 
      name: "Python", 
      description: "Programming Language",
      bgColor: "#3776AB",
      textColor: "#FFFFFF",
      icon: <FaPython size={30} color="#FFFFFF" />
    },
    { 
      name: "NodeJS", 
      description: "Web Server",
      bgColor: "#339933",
      textColor: "#FFFFFF",
      icon: <FaNodeJs size={30} color="#FFFFFF" />
    },
    { 
      name: "ExpressJS", 
      description: "Node Framework",
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
      name: "MongoDB", 
      description: "NoSQL Database",
      bgColor: "#47A248",
      textColor: "#FFFFFF",
      icon: <SiMongodb size={30} color="#FFFFFF" />
    },
    { 
      name: "MySQL", 
      description: "SQL Database",
      bgColor: "#4479A1",
      textColor: "#FFFFFF",
      icon: <SiMysql size={30} color="#FFFFFF" />
    },
    { 
      name: "React", 
      description: "Framework",
      bgColor: "#61DAFB",
      textColor: "#000000",
      icon: <FaReact size={30} color="#000000" />
    },
    { 
      name: "TailwindCSS", 
      description: "User Interface",
      bgColor: "#06B6D4",
      textColor: "#FFFFFF",
      icon: <SiTailwindcss size={30} color="#FFFFFF" />
    },
    { 
      name: "Dart", 
      description: "Mobile Development",
      bgColor: "#0175C2",
      textColor: "#FFFFFF",
      icon: <SiDart size={30} color="#FFFFFF" />
    },
    { 
      name: "Kotlin", 
      description: "Android Development",
      bgColor: "#7F52FF",
      textColor: "#FFFFFF",
      icon: <SiKotlin size={30} color="#FFFFFF" />
    },
    { 
      name: "GitHub", 
      description: "Version Control",
      bgColor: "#181717",
      textColor: "#FFFFFF",
      icon: <FaGithub size={30} color="#FFFFFF" />
    }
  ];

  return (
    <section id="skills" className="min-h-screen py-16">
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
          <h2 className="text-4xl font-bold text-[#FAFAFA] font-mono mb-6 text-center">Skills</h2>
          <p className="text-[#FAFAFA] text-center mb-12 font-mono max-w-2xl mx-auto">
          Technologies and tools I use for web, mobile development, and UI/UX design.
          </p>
        </AnimatedContent>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <FadeContent key={index} duration={800} delay={index * 100} easing="ease-out" initialOpacity={0}>
              <div className="bg-[#222222] p-6 rounded-lg border-2 border-[#333] hover:border-[#C7EA46] transition-all duration-300 hover:transform hover:scale-[1.05] flex flex-col items-center">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: skill.bgColor || '#222222' }}
                >
                  {skill.icon}
                </div>
                <h4 className="text-xl font-bold text-[#FAFAFA] font-mono mb-1">{skill.name}</h4>
                <p className="text-sm text-[#999] font-mono text-center">{skill.description}</p>
              </div>
            </FadeContent>
          ))}
        </div>
      </div>
    </section>
  );
}
