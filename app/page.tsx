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
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-b from-[#141414] via-[#191919] to-[#121826] relative">
      {/* Abstract geometric pattern background */}
      <div className="fixed inset-0 z-[-6] opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(30deg, #1a1a1a 12%, transparent 12.5%, transparent 87%, #1a1a1a 87.5%, #1a1a1a),
            linear-gradient(150deg, #1a1a1a 12%, transparent 12.5%, transparent 87%, #1a1a1a 87.5%, #1a1a1a),
            linear-gradient(30deg, #1a1a1a 12%, transparent 12.5%, transparent 87%, #1a1a1a 87.5%, #1a1a1a),
            linear-gradient(150deg, #1a1a1a 12%, transparent 12.5%, transparent 87%, #1a1a1a 87.5%, #1a1a1a),
            linear-gradient(60deg, rgba(199, 234, 70, 0.05) 25%, transparent 25.5%, transparent 75%, rgba(199, 234, 70, 0.05) 75%, rgba(199, 234, 70, 0.05)),
            linear-gradient(60deg, rgba(199, 234, 70, 0.05) 25%, transparent 25.5%, transparent 75%, rgba(199, 234, 70, 0.05) 75%, rgba(199, 234, 70, 0.05))
          `,
          backgroundSize: '80px 140px',
          backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px'
        }}
      ></div>
      
      {/* Noise overlay */}
      <div className="fixed inset-0 opacity-30 z-[-5] pointer-events-none bg-repeat" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }}
      ></div>
      
      {/* Subtle dot pattern */}
      <div className="fixed inset-0 opacity-10 z-[-4] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(199, 234, 70, 0.3) 2px, transparent 2px)`,
          backgroundSize: '30px 30px'
        }}
      ></div>
      
      {/* Subtle radial glow effect */}
      <div className="fixed inset-0 bg-radial-gradient z-[-3] opacity-40 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(199, 234, 70, 0.08), transparent 70%)'
        }}
      ></div>
      
      <ScrollProgress color="#C7EA46" height={4} showPercentage={true} />
      <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-full -z-10">
        <Squares 
          speed={0.5} 
          squareSize={30}
          direction='diagonal'
          borderColor='rgba(0, 77, 64, 0.3)'
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
