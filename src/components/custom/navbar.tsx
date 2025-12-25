import NavBarBtn from "@/components/custom/navbarbtn";
import { UtensilsCrossedIcon, BookTextIcon, ListTodo } from "lucide-react";

const NavBar = () => {
  const iconSize = "1.2em";
  return (
    <div className="w-full flex bg-amber-50 px-[10%] shadow-md">
      <NavBarBtn title="Recipes">
        <UtensilsCrossedIcon size={iconSize} />
      </NavBarBtn>
      <NavBarBtn title="Cookbooks">
        <BookTextIcon size={iconSize} />
      </NavBarBtn>
      <NavBarBtn title="Shopping List">
        <ListTodo size={iconSize} />
      </NavBarBtn>
    </div>
  );
};

export default NavBar;
