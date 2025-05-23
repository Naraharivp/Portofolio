import React from 'react';
import FadeContent from '../components/FadeContent/FadeContent';
import AnimatedContent from '../components/AnimatedContent/AnimatedContent';

export default function Education() {
  const educationData = [
    {
      institution: "University of Technology Yogyakarta",
      degree: "Bachelor of Informatics Engineering",
      period: "2021 - 2025",
      description: "Focused on software engineering, UI/UX design, and web development technologies."
    }
  ];

  return (
    <section 
      id="education" 
      className="min-h-screen py-16 md:py-20 mt-20"
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#FAFAFA] font-mono mb-8 md:mb-12 text-center">Education</h2>
        </AnimatedContent>

        <AnimatedContent
          distance={250}
          direction="vertical"
          reverse={false}
          config={{ tension: 80, friction: 20 }}
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
        >
        <div className="max-w-4xl mx-auto">
          {educationData.map((item, index) => (
            <FadeContent key={index} duration={800} delay={index * 200} easing="ease-out" initialOpacity={0}>
              <div className="bg-[#222222] p-4 sm:p-6 md:p-8 rounded-lg mb-6 md:mb-8 border-l-4 border-[#C7EA46] hover:transform hover:scale-[1.02] transition-all duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3 md:mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#FAFAFA] font-mono">{item.institution}</h3>
                  <span className="text-[#C7EA46] font-mono text-sm sm:text-base mt-1 md:mt-0">{item.period}</span>
                </div>
                <h4 className="text-lg sm:text-xl text-[#FAFAFA] font-mono mb-3 md:mb-4">{item.degree}</h4>
                <p className="text-sm md:text-base text-[#AAAAAA] font-mono">{item.description}</p>
              </div>
            </FadeContent>
          ))}
        </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
