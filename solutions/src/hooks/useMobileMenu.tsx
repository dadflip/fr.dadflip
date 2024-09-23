// useMobileMenu.ts
import { useState } from 'react';

const useMobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return { isMenuOpen, toggleMenu };
};

export default useMobileMenu;
