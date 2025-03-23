'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [activeSection, setActiveSection] = useState('about');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' }
  ];

  // Selalu set about sebagai default di awal load
  useEffect(() => {
    setActiveSection('about');
  }, []);

  useEffect(() => {
    // Memastikan about aktif saat di bagian atas
    const handleScroll = () => {
      // Update header style based on scroll position
      setIsScrolled(window.scrollY > 50);
      
      // First time scrolling recorded
      if (!hasScrolled && window.scrollY > 10) {
        setHasScrolled(true);
      }

      // Jika posisi di atas, selalu set about sebagai active
      if (window.scrollY < 200) {
        setActiveSection('about');
        return;
      }

      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      
      // Konversi ke array untuk processing
      const sectionsArray = Array.from(sections);
      
      // Loop through each section to find which one is in view
      let foundActive = false;
      for (let i = 0; i < sectionsArray.length; i++) {
        const section = sectionsArray[i] as HTMLElement;
        const sectionId = section.getAttribute('id');
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        // Jangan hitung offset untuk about section
        const topOffset = sectionId === 'about' ? 0 : 120;
        
        if (window.scrollY >= sectionTop - topOffset && 
            window.scrollY < sectionTop + sectionHeight - topOffset) {
          if (sectionId) {
            setActiveSection(sectionId);
            foundActive = true;
            break;
          }
        }
      }
      
      // Fallback ke about jika tidak ada section yang aktif
      if (!foundActive) {
        setActiveSection('about');
      }
    };

    // Panggil handleScroll sekali untuk mengatur activeSection
    setTimeout(() => {
      handleScroll();
    }, 300);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolled]);

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = sectionId === 'about' ? 0 : -80;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
      
      setActiveSection(sectionId);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
        ${isScrolled || isMobileMenuOpen ? 
          'bg-[#222222]/90 backdrop-blur-md shadow-md py-2 md:py-3' : 
          'bg-transparent md:bg-transparent py-4 md:py-5'
        }
        ${isMobileMenuOpen ? 'bg-[#191919]/95 backdrop-blur-md' : ''}
      `}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div 
            className="text-[#FAFAFA] font-bold text-xl md:text-2xl font-mono cursor-pointer transition-all" 
            onClick={() => scrollToSection('about')}
          >
            <span className="text-[#C7EA46]">N</span>arahari
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6 md:space-x-8">
              {navItems.map(item => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`font-mono text-base md:text-lg transition-colors duration-300 ${
                      activeSection === item.id 
                        ? 'text-[#C7EA46] font-medium' 
                        : 'text-[#FAFAFA] hover:text-[#C7EA46]'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#FAFAFA] focus:outline-none p-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 animate-fadeIn">
            <ul className="flex flex-col space-y-4">
              {navItems.map(item => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`font-mono text-lg transition-colors duration-300 w-full text-left py-2 ${
                      activeSection === item.id 
                        ? 'text-[#C7EA46] font-medium' 
                        : 'text-[#FAFAFA] hover:text-[#C7EA46]'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
