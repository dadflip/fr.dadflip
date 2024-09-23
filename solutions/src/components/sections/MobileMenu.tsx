import Image from "next/image";
import logo from "@/public/logos/7rm.png";
import menuItems from "@/data/menuItems.json";

interface MobileMenuProps {
    isMenuOpen: boolean;
    toggleMenu: () => void;
    translate: (key: string) => string;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isMenuOpen, toggleMenu, translate }) => {
  return (
    <>
      {isMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-50" onClick={toggleMenu}></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-700">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Dadflip Solutions</span>
                <Image
                  className="w-[150px]"
                  src={logo}
                  alt="Dadflip Solutions Logo"
                />
              </a>
              <button
                onClick={toggleMenu}
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white"
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="flex flex-col py-6 space-y-2">
                  {menuItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-sm font-semibold leading-6 text-green-500"
                    >
                      {translate(item.label) || item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MobileMenu;
