import { Outlet } from "react-router-dom";
import Header from "@/components/custom/header";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col w-screen">
      <Header />
      <main className="flex-1">
        <Outlet /> {/* renders the nested route content */}
      </main>
    </div>
  );
};

export default Layout;
