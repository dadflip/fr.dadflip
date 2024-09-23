import { FC } from "react";

interface MenuButtonProps {
  toggleMenu: () => void;
}

const MenuButton: FC<MenuButtonProps> = ({ toggleMenu }) => {
  return (
    <div className="flex lg:hidden">
      <button
        onClick={toggleMenu}
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
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default MenuButton;
