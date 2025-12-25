import Button from "@/components/custom/button";
import { LogOutIcon } from "lucide-react";
import Usercard from "@/components/custom/usercard";
import HorizontalLogo from "@/components/custom/horizontallogo";
import { Link } from "react-router-dom";

const TitleBar = () => {
  return (
    <div className="w-full flex justify-between">
      <Link to="/" className="flex items-center">
        <HorizontalLogo />
      </Link>
      <div className="flex flex-row gap-4 align-middle justify-center items-center">
        <Usercard
          username="Username"
          avatarUrl="https://github.com/shadcn.png"
        />
        <Button label="Logout" className="hover:bg-amber-100/60 rounded-md">
          <div className="flex items-center">
            <LogOutIcon size={"1.2em"} />
          </div>
          <span className="text-">Logout</span>
        </Button>
      </div>
    </div>
  );
};

export default TitleBar;
