import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import logo from '@/public/logos/7rm.png';
import menuItemsData from '@/data/menuItems.json'; // Adjust the path accordingly

const FooterNav: React.FC = () => {
  const context = useLanguage();

  // Check if context is available
  if (!context) {
    return null; // Optionally, render a loader or error message
  }

  const { translate } = context;

  return (
    <div className="flex flex-col items-center sm:flex-row sm:justify-between">
      <a href="https://app.dadflip.fr" className="flex items-center mb-6 sm:mb-0">
        <Image src={logo} alt="Dadflip Solutions" width={150} height={40} />
        <span className="ml-2 text-lg font-semibold text-white">Dadflip Solutions</span>
      </a>
      <ul className="flex flex-wrap items-center mb-6 text-sm justify-center">
        {menuItemsData
          .filter(item => item.menu.includes("footer")) // Filter for footer items
          .map(item => (
            <li className="mr-6" key={item.key}>
              <a href={item.href} className="hover:underline">
                {translate(item.key)}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default FooterNav;
