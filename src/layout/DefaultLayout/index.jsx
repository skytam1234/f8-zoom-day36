import Header from "../components/Header";
import Footer from "./components/Footer";
import Navigation from "../components/Navigation";
import { Outlet } from "react-router-dom";
import styles from "./DefaultLayout.module.scss";
function DefaultLayout() {
    return (
        <div className={styles.wrapper}>
            <Header />
            <main className={styles.content}>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
export default DefaultLayout;
