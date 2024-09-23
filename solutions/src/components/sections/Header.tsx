"use client";

import logo from "@/public/logos/7rm.png";
import Logo from "@/components/component/Logo";
import MenuButton from "@/components/component/MenuButton";
import MainNavigation from "@/components/sections/navigation/MainNavigation";
import MobileMenu from "@/components/sections/MobileMenu";
import { useLanguage } from "@/context/LanguageContext"; // Import du contexte

interface HeaderProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, toggleMenu }) => {
  const context = useLanguage();

  // Vérifiez si le contexte est défini
  if (!context) {
    return null; // Ou un message d'erreur, ou un loader
  }

  const { translate } = context;

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <Logo src={logo} />
        <MenuButton toggleMenu={toggleMenu} />
        <MainNavigation translate={translate} />
      </nav>
      <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} translate={translate} />
    </header>
  );
};

export default Header;
