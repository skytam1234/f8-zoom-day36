import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./AdminSidebar.module.scss";

const AdminSidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <h3>Admin Panel</h3>
            <nav>
                <ul>
                    <li>
                        <NavLink
                            to="/admin"
                            end
                            className={({ isActive }) =>
                                isActive ? styles.active : ""
                            }
                        >
                            Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/admin/users"
                            className={({ isActive }) =>
                                isActive ? styles.active : ""
                            }
                        >
                            Manage Users
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/admin/settings"
                            className={({ isActive }) =>
                                isActive ? styles.active : ""
                            }
                        >
                            Setting
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default AdminSidebar;
