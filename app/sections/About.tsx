import React from 'react';
import SplitText from '../components/SplitText/SplitText';
import RotatingText from '../components/RotatingText/RotatingText';
import BlurText from '../components/BlurText/BlurText';
import FadeContent from '../components/FadeContent/FadeContent';
import PixelTransition from '../components/PixelTransition/PixelTransition';
import AnimatedContent from '../components/AnimatedContent/AnimatedContent';
import { FaFileAlt } from 'react-icons/fa';

export default function About() {
  return (
    <section id="about" className="min-h-screen overflow-x-hidden py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-[#FAFAFA] font-mono mb-12 text-center">About Me</h2>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-6 flex flex-col justify-center px-8 lg:px-16">
            <div className="mb-6">
              <SplitText
                text="Narahari Vigraha Prasada"
                className="text-4xl font-bold text-[#FAFAFA] font-mono"
                delay={150}
                textAlign="left"
                threshold={0.1}
                rootMargin="0px"
              />
            </div>
            <div className="flex items-center mb-6">
              <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                <h2 className="text-2xl lg:text-3xl font-medium text-[#F5F5F5] mr-3 font-mono">
                  I'm a
                </h2>
              </FadeContent>
              
              <div className="inline-flex items-center">
                <RotatingText
                  texts={['UI Designer', 'Mobile Developer', 'Web Developer']}
                  mainClassName="px-3 py-1 bg-[#C7EA46] text-black font-medium 
                  text-xl lg:text-2xl rounded-lg transition-all font-mono"
                  staggerFrom={"last"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={3000}
                />
              </div>
            </div>
            <BlurText
              text="A UI Designer and Software Engineer from Indonesia with a background in Informatics,
              passionate about crafting intuitive and visually appealing digital experiences.
              Focused on modern web technologies and responsive design, always striving to build seamless and user-centered interfaces."
              delay={120}
              animateBy="words"
              direction="top"
              className="text-2xl mb-8 text-[#FAFAFA] font-mono"
            />
            <AnimatedContent
              distance={150}
              direction="vertical"
              reverse={false}
              config={{ tension: 80, friction: 20 }}
              initialOpacity={0.2}
              animateOpacity
              scale={1.1}
              threshold={0.2}>
              <div className="flex space-x-4">
                <a 
                  href="/cv.pdf" 
                  download 
                  className="group relative overflow-hidden px-8 py-4 bg-transparent text-[#FAFAFA] font-medium rounded-lg 
                  transition-all duration-500 hover:text-[#1E3A5F] font-mono border-2 border-[#C7EA46] shadow-lg shadow-[#C7EA46]/30"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <FaFileAlt className="text-lg group-hover:text-[#1E3A5F] transition-colors duration-500" />
                    <span>Download CV</span>
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-0 bg-[#C7EA46] transition-all duration-500 ease-in-out group-hover:h-full -z-0"></span>
                </a>
              </div>
            </AnimatedContent>
          </div>
          <div className="lg:col-span-6 flex items-center justify-center">
            <PixelTransition
              firstContent={
                <img
                  src="/pp.jpeg"
                  alt="Profile Picture"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              }
              secondContent={
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "grid",
                    placeItems: "center",
                    backgroundColor: "#C7EA46"
                  }}
                >
                  <p style={{ fontWeight: 900, fontSize: "3rem", color: "#004D40", fontFamily: 'monospace' }}>ME!</p>
                </div>
              }
              gridSize={12}
              pixelColor='#C7EA46'
              animationStepDuration={0.4}
              className="custom-pixel-card"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
