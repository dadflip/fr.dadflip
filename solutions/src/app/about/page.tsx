import Footer from '@/components/sections/Footer';
import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-black text-white py-6 shadow-md">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-semibold">À Propos</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-10">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900">Qui sommes-nous ?</h2>
          <p className="mt-4 text-gray-700">
            Chez <strong>Dadflip Solutions</strong>, nous nous consacrons à la création de solutions numériques innovantes et intuitives, destinées à améliorer l'apprentissage et la découverte. Notre mission est de rendre les connaissances accessibles de manière interactive.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900">Notre Mission</h2>
          <p className="mt-4 text-gray-700">
            <strong>Flip App</strong>, notre produit phare, est conçu pour transformer l'apprentissage en une aventure ludique. Nous croyons que chaque découverte doit être une expérience enrichissante, c'est pourquoi Flip App permet aux utilisateurs de découvrir de nouvelles connaissances tout en s'amusant.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900">Nos Valeurs</h2>
          <ul className="mt-4 text-gray-700 list-disc list-inside">
            <li>Innovation continue</li>
            <li>Accessibilité à l'éducation pour tous</li>
            <li>Engagement pour une expérience utilisateur optimale</li>
            <li>Communauté et partage des connaissances</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900">Contact</h2>
          <p className="mt-4 text-gray-700">
            Pour toute question ou demande de partenariat, n'hésitez pas à nous contacter à l'adresse suivante :
            <br />
            <strong>Email :</strong> <a href="mailto:contact@dadflip.fr" className="text-green-500 hover:text-green-600">contact@dadflip.fr</a>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900">Hébergement</h2>
          <p className="mt-4 text-gray-700">
            Le site est hébergé par <strong>Agence des Médias Numériques (AMEN SASU)</strong>.
            <br />
            Adresse: 12-14, Rond Point des Champs Elysées, 75008 Paris, France
            <br />
            Site Web: <a href="https://www.amen.fr" className="text-green-500 hover:text-green-600">www.amen.fr</a>
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
