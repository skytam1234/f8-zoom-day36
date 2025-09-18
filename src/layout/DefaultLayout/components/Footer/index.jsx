import React from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "./Footer.module.scss";
function Footer() {
    return (
        <footer className={styles["footer"]}>
            <ul className={styles["list-item"]}>
                <li className={styles["item"]}>
                    <NavLink className={styles.link} to="/Contact">
                        Contact
                    </NavLink>
                </li>
                <li className={styles["item"]}>
                    <NavLink className={styles.link} to="/Privacy">
                        Policy
                    </NavLink>
                </li>
            </ul>
        </footer>
    );
}
export default Footer;
