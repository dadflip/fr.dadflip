import Image from "next/image";
import logo from '@/public/logos/7rm.png'

export default function Footer() {
    return(
        <footer className="bg-black text-gray-500 dark:text-gray-400">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="https://app.dadflip.fr" className="flex items-center mb-6 sm:mb-0">
            <Image src={logo} alt="Dadflip Solutions" width={150} height={40} />
            <span className="ml-2 text-lg font-semibold text-white">Dadflip Solutions</span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm">
            <li className="mr-6">
              <a href="/about" className="hover:underline">A propos</a>
            </li>
            <li className="mr-6">
              <a href="/" className="hover:underline">Privacy Policy</a>
            </li>
            <li className="mr-6">
              <a href="/about/dadflipsolutions" className="hover:underline">Mentions légales</a>
            </li>
            <li className="mr-6">
              <a href="/contact" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 dark:border-gray-700 lg:my-8" />
        <p className="text-sm text-center">
          &copy; {new Date().getFullYear()} Dadflip Solutions
        </p>
      </footer>
    );
}