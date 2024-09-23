import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { FlagIcon } from 'react-flag-kit';
import { SupportedLanguages } from '@/types/types'; // Assurez-vous que le chemin est correct

const LanguageSwitcher: React.FC = () => {
  const context = useLanguage();

  // Vérifiez si le contexte est défini
  if (!context) {
    return null; // Ou un message d'erreur, ou un loader
  }

  const { changeLanguage, translate } = context;

  // Liste des langues supportées avec les codes de drapeau
  const supportedLanguages: Array<{ code: SupportedLanguages; label: string; flag: string }> = [
    { code: 'en', label: 'English', flag: 'US' },
    { code: 'fr', label: 'Français', flag: 'FR' },
    { code: 'es', label: 'Español', flag: 'ES' },
    { code: 'de', label: 'Deutsch', flag: 'DE' }, // Allemand
    { code: 'cn', label: '中文', flag: 'CN' } // Chinois
  ];

  return (
    <div className="flex justify-center flex-wrap p-4">
      {supportedLanguages.map(({ code, label, flag }) => (
        <button
          key={code}
          onClick={() => changeLanguage(code)}
          className="flex items-center space-x-2 p-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition duration-200 ease-in-out mb-2 mx-2 sm:mb-0" // Add horizontal margin
        >
          <FlagIcon code={flag} size={25} className="w-5 h-5" />
          <span className="hidden sm:inline text-sm md:text-base">{translate(label)}</span> {/* Hide text on small screens */}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
