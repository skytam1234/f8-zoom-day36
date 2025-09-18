import { NavLink } from "react-router-dom";
import styles from "./AuthSidebar.module.scss";

const sidebarNavLinks = [
    {
        to: "/login",
        label: "Đăng nhập",
    },
    {
        to: "/register",
        label: "Đăng ký",
    },
    {
        to: "/forgot-password",
        label: "Quên mật khẩu",
    },
];

function AuthSidebar() {
    return (
        <div className={styles.sidebar}>
            <h1 className={styles.sidebarTitle}>ACCOUNT</h1>
            <ul className={styles.sidebarList}>
                {sidebarNavLinks &&
                    sidebarNavLinks.map((navItem) => (
                        <li key={navItem.label} className={styles.sidebarItem}>
                            <NavLink
                                to={navItem.to}
                                className={({ isActive }) =>
                                    isActive ? styles.active : ""
                                }
                            >
                                {navItem.label}
                            </NavLink>
                        </li>
                    ))}
            </ul>
        </div>
    );
}

export default AuthSidebar;
