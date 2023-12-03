import { Outlet } from "react-router-dom";
import Header from 'main/Header/Header';
import Footer from 'main/Footer/Footer';

import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
