"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import DiagonalSeparator from "@/components/sections/DiagonalSeparator";
import Footer from "@/components/sections/Footer";
import useMobileMenu from "@/hooks/useMobileMenu";
import Header from "@/components/sections/Header";
import LanguageSwitcher from "@/components/utils/LangSwitcher";
import ContactInfoSection from "@/components/sections/ContactInfoSection";
import ContactForm from "@/components/sections/ContactForm";

export default function Contact() {
  const { isMenuOpen, toggleMenu } = useMobileMenu();

  return (
    <LanguageProvider>
      <div className="bg-black text-white">
        <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <DiagonalSeparator height="200px" />
        <LanguageSwitcher />
        <ContactInfoSection />
        <DiagonalSeparator height="200px" />
        <ContactForm />
        <DiagonalSeparator />
        <Footer />
      </div>
    </LanguageProvider>
  );
}
