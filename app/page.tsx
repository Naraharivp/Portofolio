'use client'

import React, { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

// Dynamic import untuk komponen yang menggunakan window
const Squares = dynamic(() => import('./components/Squares/Squares'), { ssr: false });
const ScrollProgress = dynamic(() => import('./components/ScrollProgress/ScrollProgress'), { ssr: false });
const Header = dynamic(() => import('./components/Header/Header'), { ssr: false });
const Footer = dynamic(() => import('./components/Footer/Footer'), { ssr: false });
const About = dynamic(() => import('./sections/About'), { ssr: false });
const Education = dynamic(() => import('./sections/Education'), { ssr: false });
const Skills = dynamic(() => import('./sections/Skills'), { ssr: false });
const Projects = dynamic(() => import('./sections/Projects'), { ssr: false });

export default function Home() {
  const aboutRef = useRef(null);
  
  // Gunakan layout effect untuk force scroll di awal
  useEffect(() => {
    // Force scroll ke posisi 0,0 saat halaman dimuat
    if (typeof window !== 'undefined') {
      // Disable auto-restore scroll position
      window.history.scrollRestoration = 'manual';
      
      // Reset scroll position
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
      
      // Tambahan force scroll dengan interval untuk memastikan posisi di atas
      const forceScrollTimer = setInterval(() => {
        if (window.scrollY !== 0) {
          window.scrollTo(0, 0);
        } else {
          clearInterval(forceScrollTimer);
        }
      }, 10);
      
      // Clear interval sebagai fallback
      setTimeout(() => clearInterval(forceScrollTimer), 500);
    }
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#191919]">
      <ScrollProgress color="#C7EA46" height={4} showPercentage={true} />
      <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-full -z-10">
        <Squares 
          speed={0.5} 
          squareSize={30}
          direction='diagonal'
          borderColor='#004D40'
          hoverFillColor='#C7EA46'
        />
      </div>
      
      <Header />
      
      {/* Memberikan template grid untuk mengontrol tampilan */}
      <main className="relative pt-0">
        <div 
          ref={aboutRef} 
          key="about-section"
          style={{ scrollMarginTop: "0px" }}
          className="min-h-screen"
        >
          <About />
        </div>
        
        <div 
          key="education-section" 
          style={{ scrollMarginTop: "70px" }}
          className="scroll-mt-16 md:scroll-mt-20"
        >
          <Education />
        </div>
        
        <div 
          key="skills-section" 
          style={{ scrollMarginTop: "70px" }}
          className="scroll-mt-16 md:scroll-mt-20"
        >
          <Skills />
        </div>
        
        <div 
          key="projects-section" 
          style={{ scrollMarginTop: "70px" }}
          className="scroll-mt-16 md:scroll-mt-20"
        >
          <Projects />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
