import '../styles/Layout.css';
import { Outlet } from "react-router-dom";
import Header from "../components/Header";


const Layout = () => {

  return (
    <div className="layout">
      <header>
        <Header/>
      </header>
      <main>
        <Outlet/>
      </main>
    </div>
  );
}

export default Layout;
