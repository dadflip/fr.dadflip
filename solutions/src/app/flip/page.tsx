"use client";

import DiagonalSeparator from '@/components/sections/DiagonalSeparator';
import Footer from '@/components/sections/Footer';
import { LanguageProvider } from '@/context/LanguageContext';
import Header from '@/components/sections/Header';
import LanguageSwitcher from '@/components/utils/LangSwitcher';
import useMobileMenu from '@/hooks/useMobileMenu';
import FlipInfoSection from '@/components/sections/FlipInfoSection';

export default function Flip() {
  const { isMenuOpen, toggleMenu } = useMobileMenu();

  return (
    <LanguageProvider>
      <div className="bg-black text-white">
        <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <DiagonalSeparator height="200px" />
        <LanguageSwitcher />
        <FlipInfoSection />
        <DiagonalSeparator />
        <Footer />
      </div>
    </LanguageProvider>
  );
}
