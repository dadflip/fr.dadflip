import menuItems from '@/data/menuItems.json';

interface MainNavigationProps {
  translate: (key: string) => string;
}

const MainNavigation: React.FC<MainNavigationProps> = ({ translate }) => {
  return (
    <div>
      <div className="hidden lg:flex lg:gap-x-12">
        {menuItems
          .filter(item => item.menu.includes("header")) // Filter for header items
          .map(item => (
            <a
              key={item.key}
              href={item.href}
              className="text-sm font-semibold leading-6 text-green-500"
            >
              {translate(item.key)}
            </a>
          ))}
      </div>
    </div>
  );
};

export default MainNavigation;
