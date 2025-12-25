import TitleBar from "@/components/custom/titlebar";
import NavBar from "@/components/custom/navbar";

function Header() {
  return (
    <>
      <div className="bg-amber-50 flex flex-col w-full shadow-md gap-[2vh]">
        <TitleBar />
        <NavBar />
      </div>
    </>
  );
}

export default Header;
