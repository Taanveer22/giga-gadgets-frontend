import { Outlet } from "react-router-dom";
import Navbar from "../componets/Navbar";
import Footer from "../componets/Footer";

const RootLayout = () => {
  return (
    <div>
      <nav>
        <Navbar></Navbar>
      </nav>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default RootLayout;
