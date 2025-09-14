import { IoMdHeart } from "react-icons/io";
import { FaRegCopyright } from "react-icons/fa6";
import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const year = new Date().getFullYear();
  const { theme } = useTheme();

  return (
    <>
      <footer className="p-2 flex flex-row flex-wrap justify-center items-center gap-2 bg-primary-light dark:bg-primary-dark border-t border-t-secondary-light dark:border-t-secondary-dark ">
        Created By <IoMdHeart color={theme === "dark" ? "red" : "darkred"} />
        <a
          href="https://www.linkedin.com/in/chetannada"
          target="_blank"
          className="font-semibold tracking-wider hover:underline"
        >
          Chetan Nada
        </a>
        <FaRegCopyright />
        {year}
        <a
          href="https://github.com/chetannada/DevFoundry"
          target="_blank"
          className="font-semibold hover:underline tracking-widest"
        >
          <span className="text-secondary-light dark:text-secondary-dark">Dev</span>
          Foundry
        </a>
      </footer>
    </>
  );
};

export default Footer;
