import { useLocation, Link } from "react-router-dom";

interface NavBarBtnProps {
  title: string;
  children: React.ReactNode;
}

const NavBarBtn: React.FC<NavBarBtnProps> = ({ title, children }) => {
  const path = useLocation().pathname;
  const normalizedTitle = title.toLowerCase().replace(/\s+/g, "-");
  const isActive = path.includes(normalizedTitle);

  const baseClasses =
    "custom flex items-center justify-center gap-2 border-b-4 transition-colors rounded-t-md";
  const activeClasses = "border-amber-400 text-amber-950";
  const inactiveClasses =
    "border-transparent text-muted-foreground hover:border-amber-200 hover:text-amber-950 hover:bg-amber-100/60";

  return (
    <Link to={`/${normalizedTitle}`}>
      <button
        className={`${baseClasses} ${
          isActive ? activeClasses : inactiveClasses
        }`}
      >
        {children}
        {title}
      </button>
    </Link>
  );
};

export default NavBarBtn;
