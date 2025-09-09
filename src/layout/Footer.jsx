import { IoMdHeart } from "react-icons/io";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="p-2 flex flex-row flex-wrap justify-center items-center gap-2 bg-primary-light dark:bg-primary-dark text-text-light dark:text-text-dark border-t border-purple-300 shadow-lg">
        Created By <IoMdHeart color="darkred" />
        <a
          href="https://www.linkedin.com/in/chetannada/"
          target="_blank"
          title="Chetan Nada's Linkedin Profile"
          className="text-accent-light dark:text-accent-dark font-bold hover:underline"
        >
          Chetan Nada
        </a>
        <FaRegCopyright />
        {year}
        <a
          href="https://github.com/chetannada/DevFoundry"
          target="_blank"
          title="Github Repository"
          className="text-secondary-light dark:text-secondary-dark font-bold hover:underline"
        >
          DevFoundry
        </a>
      </footer>
    </>
  );
};

export default Footer;
