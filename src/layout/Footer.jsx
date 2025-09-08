import { IoMdHeart } from "react-icons/io";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="p-2 flex flex-row flex-wrap justify-center items-center gap-2 bg-gray-50 border-t border-purple-300 shadow-lg">
        Created By <IoMdHeart color="darkred" />
        <a
          href="https://www.linkedin.com/in/chetannada/"
          target="_blank"
          title="Chetan Nada's Linkedin Profile"
          className="text-purple-900 font-bold hover:underline"
        >
          Chetan Nada
        </a>
        <FaRegCopyright />
        {year}
        <a
          href="https://github.com/chetannada/DevFoundry"
          target="_blank"
          title="Github Repository"
          className="text-purple-900 font-bold hover:underline"
        >
          DevFoundry
        </a>
      </footer>
    </>
  );
};

export default Footer;
