"use client";

import Footer from '@/components/sections/Footer';
import React from 'react';
import HeaderA from '@/components/sections/headers/HeaderA'
import useMobileMenu from '@/hooks/useMobileMenu';
import AboutSection from '@/components/sections/AboutSection';
import DiagonalSeparator from '@/components/sections/DiagonalSeparator';
import Header from '@/components/sections/Header';
import { LanguageProvider } from '@/context/LanguageContext';

const About = () => {
  const { isMenuOpen, toggleMenu } = useMobileMenu();

  return (
    <LanguageProvider>
      <div className="bg-black text-white">
        <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <DiagonalSeparator height="200px" />
        <AboutSection />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default About;
