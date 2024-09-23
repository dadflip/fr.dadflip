"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import DiagonalSeparator from "@/components/sections/DiagonalSeparator";
import Footer from "@/components/sections/Footer";
import useMobileMenu from "@/hooks/useMobileMenu";
import Header from "@/components/sections/Header";
import HomeSection from "@/components/sections/HomeSection";
import LanguageSwitcher from "@/components/utils/LangSwitcher";

export default function Home() {
  const { isMenuOpen, toggleMenu } = useMobileMenu();

  return (
    <LanguageProvider>
      <div className="bg-black text-white">
        <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <DiagonalSeparator height="200px" />
        <LanguageSwitcher />
        <HomeSection />
        <DiagonalSeparator />
        <Footer />
      </div>
    </LanguageProvider>
  );
}
