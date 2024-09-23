import FooterNav from "./navigation/FooterNav";

export default function Footer() {
    return(
        <footer className="bg-black text-gray-500 dark:text-gray-400">
        <FooterNav />
        <hr className="my-6 border-gray-200 dark:border-gray-700 lg:my-8" />
        <p className="text-sm text-center">
          &copy; {new Date().getFullYear()} Dadflip Solutions
        </p>
      </footer>
    );
}