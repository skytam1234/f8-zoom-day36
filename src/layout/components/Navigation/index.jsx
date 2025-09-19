import React from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "./Navigation.module.scss";
import { useLocation } from "react-router-dom";

const items = [
    {
        path: "/",
        title: "Home",
        icon: `fa-solid fa-house`,
    },
    {
        path: "/about",
        title: "About",
        icon: `fa-solid fa-comment`,
    },
    {
        path: "/posts",
        title: "Posts",
        icon: `fa-brands fa-product-hunt`,
    },
    {
        path: "/login",
        title: "Login",
        icon: `fa-solid fa-calculator`,
    },
    {
        path: "/register",
        title: "Register",
        icon: `fa-solid fa-list-check`,
    },
    {
        path: "/admin",
        title: "Admin",
        icon: `fa-solid fa-cloud`,
    },
];
function Navigation() {
    const param = useLocation();
    const [params, setParams] = React.useState(param.pathname);

    React.useEffect(() => {
        const path = param.pathname;
        const pathPara = path.split("/")[1];
        setParams(`/${pathPara}`);
    }, [param, setParams]);

    return (
        <>
            <div className={styles["navigation"]}>
                <div className={styles["home"]}>
                    <Link to="/">
                        <i className="fa-solid fa-house"></i>
                    </Link>
                </div>
                <ul>
                    {items.map((item, index) => {
                        return (
                            <li
                                key={index}
                                className={`${styles["list-item"]} ${
                                    params === item.path ? styles.active : ""
                                }`}
                            >
                                <NavLink to={item.path}>
                                    <span className={styles["icon"]}>
                                        <i className={item.icon}></i>
                                    </span>
                                    <span className={styles["text"]}>
                                        {item.title}
                                    </span>
                                </NavLink>
                            </li>
                        );
                    })}

                    <div className={styles["indicator"]}></div>
                </ul>
            </div>
        </>
    );
}
export default Navigation;
