import '../styles/Layout.css';
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";


const Layout = () => {
  return (
    <div className="layout">
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
