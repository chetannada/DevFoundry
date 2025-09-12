import clsx from "clsx";

const MenuItem = ({
  icon,
  label,
  onClick,
  hoverClass = "hover:bg-secondary-light hover:dark:bg-secondary-dark",
  pxClass = "px-4",
}) => (
  <li
    className={clsx(
      "flex items-center py-3 cursor-pointer text-text-light dark:text-text-dark transition-colors duration-200",
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
