import { IoMdHeart } from "react-icons/io";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border-light dark:border-border-dark bg-primary-light dark:bg-primary-dark">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary-light/40 dark:via-secondary-dark/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-8 max2xs:px-4 py-2 flex flex-wrap items-center justify-center minSm:justify-between gap-x-4 gap-y-1">
        <p className="flex flex-wrap items-center justify-center gap-1.5 text-xs minSm:text-sm text-gray-500 dark:text-gray-400">
          <span>Built with</span>
          <IoMdHeart className="text-red-500 dark:text-red-400 animate-pulse" size={14} />
          <span>by</span>
          <a
            href="https://www.linkedin.com/in/chetannada"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-text-light dark:text-text-dark transition-colors duration-300 hover:text-secondary-light dark:hover:text-secondary-dark"
          >
            Chetan Nada
          </a>
          <span className="text-gray-400 dark:text-gray-500">·</span>
          <span>© {year}</span>
          <span className="font-semibold tracking-wider">
            <span className="text-secondary-light dark:text-secondary-dark">Dev</span>
            <span className="text-text-light dark:text-text-dark">Foundry</span>
          </span>
        </p>

        <div className="flex items-center gap-1.5">
          <a
            href="https://github.com/chetannada"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark text-gray-500 dark:text-gray-400 transition-all duration-300 hover:border-secondary-light/50 dark:hover:border-secondary-dark/50 hover:text-secondary-light dark:hover:text-secondary-dark hover:shadow-md hover:shadow-secondary-light/10 dark:hover:shadow-secondary-dark/10"
            aria-label="GitHub"
          >
            <FaGithub size={14} />
          </a>
          <a
            href="https://www.linkedin.com/in/chetannada"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark text-gray-500 dark:text-gray-400 transition-all duration-300 hover:border-secondary-light/50 dark:hover:border-secondary-dark/50 hover:text-secondary-light dark:hover:text-secondary-dark hover:shadow-md hover:shadow-secondary-light/10 dark:hover:shadow-secondary-dark/10"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={14} />
          </a>
          <a
            href="https://x.com/chetannada"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark text-gray-500 dark:text-gray-400 transition-all duration-300 hover:border-secondary-light/50 dark:hover:border-secondary-dark/50 hover:text-secondary-light dark:hover:text-secondary-dark hover:shadow-md hover:shadow-secondary-light/10 dark:hover:shadow-secondary-dark/10"
            aria-label="X (Twitter)"
          >
            <FaXTwitter size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
