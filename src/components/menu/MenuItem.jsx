import clsx from "clsx";

const MenuItem = ({
  icon,
  label,
  onClick,
  hoverClass = "hover:bg-text-light dark:hover:bg-text-dark",
  pxClass = "px-4",
}) => (
  <li
    className={clsx(
      "flex items-center py-3 cursor-pointer text-light dark:text-dark hover:text-primary-light dark:hover:text-primary-dark transition-colors duration-200",
      hoverClass,
      pxClass
    )}
    onClick={onClick}
  >
    <span className="mr-3">{icon}</span>
    {label}
  </li>
);

export default MenuItem;
