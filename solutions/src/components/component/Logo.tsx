import Image, { StaticImageData } from "next/image";

interface LogoProps {
    src: string | StaticImageData;
}

const Logo: React.FC<LogoProps> = ({ src }) => {
  return (
    <div className="flex lg:flex-1">
      <a href="/" className="-m-1.5 p-1.5">
        <span className="sr-only">Dadflip Solutions</span>
        <Image className="w-[150px]" src={src} alt="Dadflip Solutions Logo" />
      </a>
    </div>
  );
};

export default Logo;
