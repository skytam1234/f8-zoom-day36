import styles from "../AuthLayout/AuthLayout.module.scss";
import Header from "../components/Header";
import AuthSidebar from "./components/AuthSidebar";
import { Outlet } from "react-router-dom";
function AuthLayout() {
    return (
        <div className={styles.wrapper}>
            <Header />

            <main className={styles.content}>
                <AuthSidebar />
                <div className={styles["page-content"]}>
                    <Outlet />
                </div>
            </main>
        </div>
    );
}
export default AuthLayout;
