import clsx from "clsx";

const MenuItem = ({ icon, label, onClick, pxClass = "px-4" }) => (
  <li
    className={clsx(
      "flex items-center py-3 cursor-pointer hover:bg-hover-light hover:dark:bg-hover-dark transition-colors duration-200",
      pxClass
    )}
    onClick={onClick}
  >
    <span className="mr-3">{icon}</span>
    {label}
  </li>
);

export default MenuItem;
