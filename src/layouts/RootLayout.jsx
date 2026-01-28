import { Outlet } from "react-router-dom";
import Navbar from "../componets/Navbar";

const RootLayout = () => {
  return (
    <div>
      <nav>
        <Navbar></Navbar>
      </nav>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default RootLayout;
