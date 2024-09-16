import Footer from '@/components/sections/Footer';
import React from 'react';

const LegalNotice = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-black text-white py-6 shadow-md">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-semibold">Mentions Légales</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-10">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900">Éditeur du site</h2>
          <p className="mt-4 text-gray-700">
            Le présent site est édité par :
            <br />
            <strong>Dadflip Solutions</strong>
            <br />
            Email: contact@dadflip.fr ou dadflip.corp@gmail.com
          </p>
        </section>


        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900">Hébergement</h2>
          <p className="mt-4 text-gray-700">
            Le site est hébergé par:
            <br />
            <strong>Agence des Médias Numériques (AMEN SASU)</strong>
            <br />
            Adresse: 12-14, Rond Point des Champs Elysées 75008 Paris, France
            <br />
            Site Web: <a href="https://www.amen.fr" className="text-green-500 hover:text-green-600">www.amen.fr</a>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900">Protection des données personnelles</h2>
          <p className="mt-4 text-gray-700">
            Conformément à la loi n° 78-17 du 6 janvier 1978 modifiée relative à l'informatique, aux fichiers et aux libertés, vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant.
            <br />
            Pour exercer ces droits, vous pouvez nous contacter à l'adresse email suivante: <strong>contact@dadflip.fr</strong>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900">Limitation de responsabilité</h2>
          <p className="mt-4 text-gray-700">
            Le contenu du site est fourni à titre informatif et peut être modifié sans préavis.
            <br />
            L'éditeur ne saurait être tenu responsable des dommages directs ou indirects liés à l'utilisation du site ou des informations présentes sur celui-ci.
          </p>
        </section>
      </main>

      <Footer />

    </div>
  );
};

export default LegalNotice;
