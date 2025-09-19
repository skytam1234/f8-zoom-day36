import React from "react";
import styles from "./AdminFooter.module.scss";

const AdminFooter = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p>
                    &copy; {new Date().getFullYear()} Admin Dashboard. All
                    rights reserved.
                </p>
                <p>Managed</p>
            </div>
        </footer>
    );
};

export default AdminFooter;
