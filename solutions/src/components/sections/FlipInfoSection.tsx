import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

interface Translation {
  crowdfunding: string;
  comingSoon: string;
  flipInfoTitle: string;
  flipInfoDescription: string;
}

const FlipInfoSection: React.FC = () => {
  const context = useLanguage();
  const [translations, setTranslations] = useState<Translation | null>(null);
  
  useEffect(() => {
    if (context) {
      const fetchTranslations = async () => {
        const response = await fetch('/locales/translations.json');
        const data = await response.json();
        setTranslations(data[context.language]);
      };

      fetchTranslations();
    }
  }, [context]);

  if (!translations) {
    return null; // Loader can be added here if needed
  }

  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-gray-700 hover:ring-gray-600">
            {translations.crowdfunding}
            <a href="#" className="font-semibold text-green-500">
              <span className="absolute inset-0" aria-hidden="true"></span>
              {translations.comingSoon} <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            {translations.flipInfoTitle}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            {translations.flipInfoDescription}
          </p>
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  );
};

export default FlipInfoSection;
