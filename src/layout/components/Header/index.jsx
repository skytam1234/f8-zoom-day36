import Navigation from "../Navigation";
import styles from "./Header.module.scss";
function Header() {
    return (
        <>
            <header className={styles.header}></header>
            <Navigation className={styles.navigation} />
        </>
    );
}
export default Header;
