import React from 'react';
import dynamic from 'next/dynamic';
import Header from './components/Header/Header';
import About from './sections/About';
import Education from './sections/Education';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Footer from './components/Footer/Footer';

// Dynamic import untuk komponen yang menggunakan window
const Squares = dynamic(() => import('./components/Squares/Squares'), { ssr: false });
const ScrollProgress = dynamic(() => import('./components/ScrollProgress/ScrollProgress'), { ssr: false });

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#191919]">
      <ScrollProgress color="#C7EA46" height={4} showPercentage={true} />
      <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-full -z-10">
        <Squares 
          speed={0.5} 
          squareSize={40}
          direction='diagonal'
          borderColor='#004D40'
          hoverFillColor='#C7EA46'
        />
      </div>
      
      <Header />
      <main className="pt-20">
        <About />
        <Education />
        <Skills />
        <Projects />
      </main>
      
      <Footer />
    </div>
  );
}
