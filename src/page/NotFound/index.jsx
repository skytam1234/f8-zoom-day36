import React from "react";
import { Link } from "react-router-dom";
import styles from "./NotFound.module.scss";

const NotFound = () => {
    return (
        <div className={styles.notFoundPage}>
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>Sorry, the page you're looking for doesn't exist.</p>
            <Link to="/" className={styles.homeLink}>
                Go to Home
            </Link>
        </div>
    );
};

export default NotFound;
