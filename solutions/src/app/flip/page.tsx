import Image from 'next/image';
import logo from '@/public/logos/7rm.png';
import DiagonalSeparator from '@/components/sections/DiagonalSeparator';
import Footer from '@/components/sections/Footer';

export default function Flip() {
  return (
    <div className="bg-black text-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Dadflip Solutions</span>
              <Image className="w-[150px]" src={logo} alt="Dadflip Solutions" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <a href="/" className="text-sm font-semibold leading-6 text-green-500">Dadflip Solutions</a>
            <a href="/flip" className="text-sm font-semibold leading-6 text-green-500">Flip App</a>
            <a href="/contact" className="text-sm font-semibold leading-6 text-green-500">Contact</a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="/login" className="text-sm font-semibold leading-6 text-green-500">
              Se connecter (indisponible...) <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>

        {/* Mobile menu */}
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-50"></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-700">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Dadflip Solutions</span>
                <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Logo" />
              </a>
              <button type="button" className="-m-2.5 rounded-md p-2.5 text-white">
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <a href="/" className="text-sm font-semibold leading-6 text-green-500">Dadflip Solutions</a>
                  <a href="/flip" className="text-sm font-semibold leading-6 text-green-500">Flip App</a>
                  <a href="/contact" className="text-sm font-semibold leading-6 text-green-500">Contact</a>
                </div>
                <div className="py-6">
                  <a href="/login" className="text-sm font-semibold leading-6 text-green-500">
                    Se connecter (indisponible...) <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-gray-700 hover:ring-gray-600">
              La campagne de crowdfunding pour Flip App va démarrer bientôt..
              <a href="#" className="font-semibold text-green-500">
                <span className="absolute inset-0" aria-hidden="true"></span> Coming soon <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Flip App, alias @flipxe</h1>
            <p className="mt-6 text-lg leading-8 text-gray-400">
              Imaginez une application ludique et interactive qui vous permet de découvrir de nouvelles connaissances tout en vous amusant !
              Avec Flip App, l'apprentissage devient une aventure passionnante où chaque découverte vous rapproche un peu plus de la maîtrise de nouveaux sujets.
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

      <DiagonalSeparator />
    
      <Footer />
    </div>
  );
}
