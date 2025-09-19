import styles from "../AdminLayout/AdminLayout.module.scss";
import Header from "../components/Header";
import AdminFooter from "./components/AdminFooter";
import AdminSidebar from "./components/AdminSidebar";
import { Outlet } from "react-router-dom";
function AdminLayout() {
    return (
        <div className={styles.wrapper}>
            <Header />

            <main className={styles.content}>
                <AdminSidebar />
                <div className={styles["page-content"]}>
                    <Outlet />
                </div>
            </main>
            <AdminFooter />
        </div>
    );
}
export default AdminLayout;
