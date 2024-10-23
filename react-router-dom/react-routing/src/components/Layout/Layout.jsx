import Footer from "./../Footer/Footer";
import { Outlet } from "react-router-dom";

import Navbar from "./../Navbar/Navbar";

const Layout = () => {
  return (
    <>
      <main className="w-full bg-slate-300 text-black">
        <Navbar />
        <Outlet />
        <Footer />
      </main>
    </>
  );
};

export default Layout;
